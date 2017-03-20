using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ExpensesWithAngulajs.Data;
using ExpensesWithAngulajs.Data.Models;
using System.Linq.Dynamic;
namespace ExpensesWithAngulajs.Api
{
    public class ReportController : ApiController
    {
        private ExpensesDbContext db = new ExpensesDbContext();
        // GET: api/Report
        public HttpResponseMessage GetExpenses(int FiscalYear)
        {
            string date = "04/01/";
            var dtEnd = new DateTime();
            var dtInitial = new DateTime();
            if (FiscalYear > 0)
            {
                date = "04/01/" + FiscalYear.ToString(); // the fiscal year Start on April 1 of the given year
                dtInitial = Convert.ToDateTime(date);
                dtEnd = Convert.ToDateTime(date).AddYears(1);
            }
            var listExpenses = db.Expenses.ToList();
            List<Expenses> ExpensesList = listExpenses.Where(x => x.Date >= dtInitial).Where(x => x.Date < dtEnd).ToList();
            var Expenses = new ExpensesReportModel
            {
                Expenses = ExpensesList,
                MaxYear = listExpenses.Max(y => y.Date).Date.Year,
                MinYear = listExpenses.Min(y => y.Date).Date.Year - 1,
                TotalExpeses = ExpensesList.Sum(s => s.Amount)
            };
            var response = Request.CreateResponse<ExpensesReportModel>(HttpStatusCode.OK, Expenses);
            return response;
        }
    }
}
