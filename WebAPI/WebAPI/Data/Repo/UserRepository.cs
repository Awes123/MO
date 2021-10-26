using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Threading.Tasks;
using WebAPI.Dtos;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Data.Repo
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext dc;

        public UserRepository(DataContext dc)
        {
            this.dc = dc;
        }
        public async Task<User> Authenticate(string userName, string passwordText)
        {
            var user = await dc.Users.FirstOrDefaultAsync(e => e.Email == userName);
            if (user == null)
                return null;
            if (!MatchPasswordHash(passwordText, user.Password, user.PasswordKey))
                return null;
            return user;
        }
        private bool MatchPasswordHash(string passwordText, byte[] password, byte[] passwordKey)
        {
            using (var hmac = new HMACSHA512(passwordKey))
            {
                var passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(passwordText));
                for (int i = 0; i < passwordHash.Length; i++)
                {
                    if (passwordHash[i] != password[i])
                        return false;
                }
                return true;
            }
        }

        public void Register(RegisterDto register)
        {
            byte[] passwordHash, passwordKey;
            using (var hmac = new HMACSHA512())
            {
                passwordKey = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(register.password));
            }
            User user = new User();
            user.Email = register.email;
            user.FirstName = register.firstName;
            user.LastName = register.lastName;
            user.Mobile = register.mobile;
            user.Role = register.role;
            user.Password = passwordHash;
            user.PasswordKey = passwordKey;
            user.ReferralCode = register.ReferralCode;
            user.MyReferralCode = register.MyReferralCode;
            dc.Users.Add(user);
        }

        public async Task<bool> UserAlreadyExists(string userName)
        {
            return await dc.Users.AnyAsync(x => x.Email == userName);
        }
        public async Task<User> UserbyReferralCode(string referralCode)
        {
            return await dc.Users.FirstOrDefaultAsync(x => x.MyReferralCode == referralCode);
        }
    }
}
