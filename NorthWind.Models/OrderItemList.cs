using System;
using System.Collections.Generic;
using System.Text;

namespace NorthWind.Models
{
    public class OrderItemList
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public decimal UnitPreci { get; set; }
        public int Quantity { get; set; }
    }
}
