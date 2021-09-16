
using System.Threading.Tasks;
using csd.data.dtos;
using csd.data.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace csd.Controllers{
    
    [Route("api/[controller]")]
    [ApiController]
    public class CommController : ControllerBase
    {
        private IMail _mail;
        public CommController(IMail mail)
        {
           _mail = mail; 
        }
       [HttpPost("sendEmail")]
       public async Task<IActionResult> sendMessage(EmailMessageDTO message) {
         var test = await _mail.sendEmailAsync(message);
         return Ok(test);
       }
    }
}
