
using Microsoft.EntityFrameworkCore;
namespace Cardiohelp.data
{

    public class dataContext : DbContext
    {
        public dataContext(DbContextOptions<dataContext> options) : base(options) { }

               public DbSet<User> Users { get; set; }

    }
}