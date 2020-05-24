using System;
using System.Collections.Generic;
using System.Text;

namespace NorthWind.Models
{
    public class CustomerList: Customer
    {
       public int TotalRecords { get; set; }
    }
}
