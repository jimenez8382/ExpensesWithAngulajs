using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace ExpensesWithAngulajs.Hubs
{
    public class ExpensesHub : Hub
    {
        public void UpdateGrid(int expenseId)
        {
            Clients.All.gridUpdated(expenseId);
        }
    }
}