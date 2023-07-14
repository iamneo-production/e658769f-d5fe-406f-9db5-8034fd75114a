using Microsoft.AspNetCore.Mvc;

namespace Webapi.Controllers
{
    
    [ApiController]
    public class viewprofileController : ControllerBase
    {
        BusinessLayer1 dal = new BusinessLayer1();
        [HttpGet]
        [Route("user/getProfile")]
        public List<LoanApplicantModel> getProfile()
        { 
            return(dal.getProfile());
        }
    }
}