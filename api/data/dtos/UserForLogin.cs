using System.ComponentModel.DataAnnotations;

namespace csd.data.dtos
{
    public class UserForLogin
    {
             public string username { get; set; }
             
             public string password { get; set; }  
    }
}