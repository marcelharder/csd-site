using System.Threading.Tasks;
using Cardiohelp.data;
using Cardiohelp.data.code;
using Cardiohelp.data.dtos;
using Cardiohelp.data.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Cardiohelp.Controllers
{
    [ApiController]
    [Authorize]
    public class UserController : ControllerBase
    {
        private IUser _user;
        private SpecialMaps _special;
        public UserController(IUser user, SpecialMaps special)
        {
            _user = user;
            _special = special;
        }

        [Route("api/getUser/{id}")]
        public async Task<UserForReturnDto> GetAsync(int id)
        {
            var help = await _user.getUserDetails(id);
            return _special.mapToUserForReturn(help);
        }

        [HttpPut]
         [Route("api/updateUser/{id}")]
        public async Task<IActionResult> PutAsync(UserForUpdateDto td)
        {
            var user_before = await _user.getUserDetails(td.Id);
            _user.Update(_special.mapToUser(td, user_before));
            if (await _user.SaveAll()) { return Ok("updated ..."); } else { return BadRequest(); }
        }








    }
}