﻿using NorthWind.Models;
using System.Collections.Generic;

namespace NorthWind.Repositories
{
    public interface ISupplierRepository: IRepository<Supplier>
    {
        IEnumerable<Supplier> SupplierPagedList(int page, int rows);
    }
}
