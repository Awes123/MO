using System.Threading.Tasks;
using WebAPI.Dtos;
using WebAPI.Models;

namespace WebAPI.Interfaces
{
    public interface IUserRepository
    {
        Task<User> Authenticate(string userName, string password);
        void Register(RegisterDto register);
        Task<bool> UserAlreadyExists(string userName);
        Task<User> UserbyReferralCode(string referralCode);
    }
}
