using NorthWind.Repositories;
using NorthWind.UnitOfWork;
using System;

namespace NorthWind.DataAccess
{
    public class NorthWindUnitOfWork : IUnitOfWork
    {
        public NorthWindUnitOfWork(string connectionString)
        {
            Customer = new CustomerRepository(connectionString);
            User = new UserRepository(connectionString);
            Supplier = new SupplierRepository(connectionString);
        }

        public ICustomerRepository Customer { get; private set; }
        public IUserRepository User { get; private set; }
        public ISupplierRepository Supplier { get; private set; }
    }
}
