using Microsoft.AspNetCore.Mvc;

namespace Webapi.Controllers
{
    
    [ApiController]
    public class loginController : ControllerBase
    {
        BusinessLayer1 dal = new BusinessLayer1();
        [HttpGet]
        [Route("user/login")]
        public List<User_Model> isUserPresent()
        { 
            return(dal.isUserPresent());
        }
    }
}