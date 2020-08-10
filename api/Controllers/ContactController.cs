using csd.data.Interfaces;
using csd.data.Models;
using Microsoft.AspNetCore.Mvc;

namespace csd.Controllers
{
    [ApiController]
    public class ContactController : ControllerBase
    {
        private IEmail _mail;
        public ContactController(IEmail mail)
        {
            _mail = mail;
        }

        [HttpPost("api/receiveMessage")]
        public IActionResult rm(ContactMessage contactMessage)
        {
            _mail.sendMailAsync(contactMessage);
            return Ok();
        }


    }
}