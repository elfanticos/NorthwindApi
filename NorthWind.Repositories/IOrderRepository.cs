using NorthWind.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace NorthWind.Repositories
{
    public interface IOrderRepository: IRepository<Order>
    {
        IEnumerable<OrderList> getPaginatedOrder(int page, int rows);

    }
}
