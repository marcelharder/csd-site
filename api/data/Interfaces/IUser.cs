using System.Threading.Tasks;
using csd.helpers;

namespace csd.data.Interfaces
{
    public interface IUser
    {
        Task<User> getUserDetails(int id);
        Task<PagedList<User>> GetUsers(UserParams p);
        Task<bool> SaveAll();
        
        void Delete<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Add<T>(T entity) where T : class;
    }
}