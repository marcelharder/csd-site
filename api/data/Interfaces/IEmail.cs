using System.Threading.Tasks;
using csd.data.Models;

namespace csd.data.Interfaces
{
    public interface IEmail
    {
       Task sendMailAsync(ContactMessage cm);
    }
}
