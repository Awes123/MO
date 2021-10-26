using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Dtos
{
    public class LoginResDto
    {
        public string UserName { get; set; }
        public string Name { get; set; }
        public int Id { get; set; }
        public string Token { get; set; }
        public string Role { get; set; }
    }
}
