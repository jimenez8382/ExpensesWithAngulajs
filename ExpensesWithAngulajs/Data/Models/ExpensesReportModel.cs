using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpensesWithAngulajs.Data.Models
{
   public class ExpensesReportModel : Pagination
    {
        public double TotalExpeses { get; set; }
        public List<Expenses> Expenses { get; set; }
    }
}
