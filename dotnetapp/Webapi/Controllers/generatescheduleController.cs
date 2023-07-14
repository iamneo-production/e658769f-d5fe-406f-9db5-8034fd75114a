using Microsoft.AspNetCore.Mvc;

namespace Webapi.Controllers
{
    
    [ApiController]
    public class generatescheduleController : ControllerBase
    {
        BusinessLayer1 dal = new BusinessLayer1();
        [HttpGet]
        [Route("admin/generateSchedule")]
        public List<LoanApplicantModel> generateSchedule()
        { 
            return(dal.generateSchedule());
        }
    }
}