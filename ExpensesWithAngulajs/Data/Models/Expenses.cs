using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ExpensesWithAngulajs.Data.Models
{
    public class Expenses
    {
        public long Id { get; set; }
        [Required]
        [Display(Name = "Date")]
        public DateTime Date { get; set; }
        [Required]
        [Display(Name = "Amount")]
        [Range(1, int.MaxValue, ErrorMessage = "Please enter a value bigger than {1}")]
        public double Amount { get; set; }
        [Required]
        [Display(Name = "Description")]
        public string Description { get; set; }
    }
}
