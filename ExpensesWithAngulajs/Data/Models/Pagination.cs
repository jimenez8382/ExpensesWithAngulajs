namespace ExpensesWithAngulajs.Data.Models
{
    public class Pagination : PeriodRangue
    {
        public int TotalPages { get; set; }
        public int TotalRows { get; set; }
        public int PageSize { get; set; }
        public string SortExpression { get; set; }
        public string SortDirection { get; set; }
        public int CurrentPageNumber { get; set; }
        public Pagination()
        {
            TotalPages = 0;
            TotalRows = 0;
            PageSize = 0;
        }
    }

    public class PeriodRangue
    {
        public int MaxYear { get; set; }
        public int MinYear { get; set; }
        public PeriodRangue()
        {
        }
    }
}
