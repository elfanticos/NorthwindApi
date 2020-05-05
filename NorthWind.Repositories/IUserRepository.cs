using NorthWind.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace NorthWind.Repositories
{
    public interface IUserRepository: IRepository<User>
    {
        User validateUser(string email, string password);
    }
}
