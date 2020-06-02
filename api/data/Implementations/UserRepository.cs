using System.Linq;
using System.Threading.Tasks;
using csd.data.Interfaces;
using csd.helpers;
using Microsoft.EntityFrameworkCore;

namespace csd.data.Implementations
{
    public class UserRepository : IUser
    {
        private dataContext _context;

        public UserRepository(dataContext context)
        {
            _context = context;
        }

        public void Add<T>(T entity) where T : class
        {
           _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
           _context.Remove(entity);
        }

        public async Task<User> getUserDetails(int id)
        {
             return await _context.Users.FirstOrDefaultAsync(m => m.Id == id);
        }

        public async Task<PagedList<User>> GetUsers(UserParams p)
        {
            var messages = _context.Users.AsQueryable();
            messages = messages.Where(m => m.center_id == p.center_id);
            return await PagedList<User>.CreateAsync(messages, p.PageNumber, p.PageSize);
        }

        public async Task<bool> SaveAll()
        {
             return await _context.SaveChangesAsync() > 0;
        }

        public void Update<T>(T entity) where T : class
        {
            _context.Update(entity);
        }
    }
}