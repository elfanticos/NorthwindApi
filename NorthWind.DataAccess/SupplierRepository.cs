﻿using Dapper;
using NorthWind.Models;
using NorthWind.Repositories;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace NorthWind.DataAccess
{
    public class SupplierRepository : Repository<Supplier>, ISupplierRepository
    {
        public SupplierRepository(string connectionString) : base(connectionString)
        {
        }

        public IEnumerable<Supplier> SupplierPagedList(int page, int rows)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@page", page);
            parameters.Add("@rows", rows);
            using (var connection = new SqlConnection(_connectionString))
            {
                return connection.Query<Supplier>(
                    "dbo.SupplierPagedList",
                    parameters,
                    commandType: System.Data.CommandType.StoredProcedure);
            };
        }
    }
}
