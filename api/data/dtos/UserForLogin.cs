using System.ComponentModel.DataAnnotations;

namespace Cardiohelp.data.dtos
{
    public class UserForLogin
    {
             public string username { get; set; }
             
             public string password { get; set; }  
    }
}