using System.Threading.Tasks;

namespace WebAPI.Interfaces
{
    public interface IUnitOfWork
    {
        ICityRepository CityRepository { get; }
        IUserRepository UserRepository { get; }
      ICategoryRepository CategoryRepository { get; } 
        Task<bool> SaveAsync();
        void Disposed();
    }
}
