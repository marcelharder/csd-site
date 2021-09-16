using System.Threading.Tasks;
using csd.data.dtos;

namespace csd.data.Interfaces
{
    public interface IMail
    {
        Task<string> sendEmailAsync(EmailMessageDTO model);
        Task<EmailMessageDTO > GetEmailFormModel(string id);
    }
}