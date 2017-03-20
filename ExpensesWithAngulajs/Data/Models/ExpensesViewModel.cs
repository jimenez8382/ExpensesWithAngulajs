using System.Collections.Generic;

namespace ExpensesWithAngulajs.Data.Models
{
    public class ExpensesViewModel : Pagination
    {
        public List<Expenses> Expenses { get; set; }
    }
}
