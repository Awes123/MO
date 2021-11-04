using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Category:BaseEntity
    {
        public string Type { get; set; }
        public string Name { get; set; }
        public string Status { get; set; }
        public string Submenu { get; set; }
        public string Banner { get; set; }
        public string Thumbnail { get; set; }
    }
}
