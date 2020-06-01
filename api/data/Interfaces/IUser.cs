using System.Threading.Tasks;
using Cardiohelp.helpers;

namespace Cardiohelp.data.Interfaces
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