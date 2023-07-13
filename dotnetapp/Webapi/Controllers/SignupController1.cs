using Microsoft.AspNetCore.Mvc;

namespace Webapi.Controllers
{
    
    [ApiController]
    public class SignupController1 : ControllerBase
    {
        [HttpPost]
        [Route("user/signup")]
        public IActionResult SaveUser([FromBody] User_Model user)
        {
            BusinessLayer1 dal = new BusinessLayer1();
            return Created("",dal.SaveUser(user));
        }
    }
}