using csd.data.Models;

namespace csd.data.Interfaces
{
    public interface IEmail
    {
       void sendMail(ContactMessage cm);
    }
}
