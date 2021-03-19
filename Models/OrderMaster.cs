using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BestFoodsOrderingSystem.Models
{
    public class OrderMaster
    {
        [Key]
        public long OrderMasterId { get; set; }

        [Column(TypeName="nvarchar(75)")]
        public string OrderNumber { get; set; }

        public int CustomerId { get; set; }
        public Customer Customer { get; set; } // gets foregin key

        [Column(TypeName = "nvarchar(10)")]
        public string PaymentMethod { get; set; }

        public decimal OrderTotal { get; set; }

        public List<OrderDetail> OrderDetailList { get; set; }
    }
}
