using NorthWind.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace NorthWind.Repositories
{
    public interface ICustomerRepository: IRepository<Customer>
    {
        IEnumerable<Customer> CutormerPagedList(int page, int rows);
    }
}
