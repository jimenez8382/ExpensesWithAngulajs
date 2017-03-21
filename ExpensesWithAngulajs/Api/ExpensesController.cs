using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using ExpensesWithAngulajs.Data;
using ExpensesWithAngulajs.Data.Models;
using System.Linq.Dynamic;

namespace ExpensesWithAngulajs.Api
{
    public class ExpensesController : ApiController
    {
        private ExpensesDbContext db = new ExpensesDbContext();

        // GET: api/Expenses
        public HttpResponseMessage GetExpenses(int pageSize, int currentPageNumber, string sortExpression, string SortDirection, string search)
        {
            int totalRows = 0;
            var orderExpresion = sortExpression + " " + SortDirection;
            var listExpenses = db.Expenses.ToList();
            totalRows = listExpenses.Count();
            if (string.IsNullOrEmpty(search))
                search = " ";

            //get the list with the Paging params
            List<Expenses> ExpensesList = db.Expenses.OrderBy(orderExpresion).Skip((currentPageNumber - 1) * pageSize).Take(pageSize).ToList().Where(d => d.Description.ToLower().Contains(search.ToLower()) || d.Amount.ToString().ToLower().Contains(search.ToLower()) || d.Date.ToString().ToLower().Contains(search.ToLower())).ToList();
            long result;
            int totalPages;

            Math.DivRem(totalRows, pageSize, out result);

            if (result > 0)
                totalPages = (int)((totalRows / pageSize)) + 1;
            else
                totalPages = (int)(totalRows / pageSize);

            var Expenses = new ExpensesViewModel
            {
                Expenses = ExpensesList,
                TotalRows = totalRows,
                TotalPages = totalPages,
                PageSize = pageSize,

            };

            var response = Request.CreateResponse<ExpensesViewModel>(HttpStatusCode.OK, Expenses);
            return response;
        }

        // GET: api/Expenses/5
        [ResponseType(typeof(Expenses))]
        public async Task<IHttpActionResult> GetExpenses(long id)
        {
            Expenses expenses = await db.Expenses.FindAsync(id);
            if (expenses == null)
            {
                return NotFound();
            }

            return Ok(expenses);
        }

        // PUT: api/Expenses/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutExpenses(long id, Expenses expenses)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != expenses.Id)
            {
                return BadRequest();
            }

            db.Entry(expenses).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExpensesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Expenses
        [ResponseType(typeof(Expenses))]
        public async Task<IHttpActionResult> PostExpenses(Expenses expenses)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Expenses.Add(expenses);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = expenses.Id }, expenses);
        }

        // DELETE: api/Expenses/5
        [ResponseType(typeof(Expenses))]
        public async Task<IHttpActionResult> DeleteExpenses(long id)
        {
            Expenses expenses = await db.Expenses.FindAsync(id);
            if (expenses == null)
            {
                return NotFound();
            }

            db.Expenses.Remove(expenses);
            await db.SaveChangesAsync();

            return Ok(expenses);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ExpensesExists(long id)
        {
            return db.Expenses.Count(e => e.Id == id) > 0;
        }
    }
}