using System.Threading.Tasks;
using csd.data.dtos;
using csd.data.Interfaces;

namespace csd.data.Implementations
{
    public class Mail : IMail
    {


        public Task<EmailMessageDTO> GetEmailFormModel(string id)
        {
            throw new System.NotImplementedException();
        }

        public async Task<string> sendEmailAsync(EmailMessageDTO model)
        {
            var result = "";
            await Task.Run(()=>{

                result = "gelukt";
           
            });
            return result;
        }


    }
}