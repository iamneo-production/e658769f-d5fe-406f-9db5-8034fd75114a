using Microsoft.AspNetCore.Mvc;

namespace Webapi.Controllers
{
    
    [ApiController]
    public class viewloanController : ControllerBase
    {
        BusinessLayer1 dal = new BusinessLayer1();
        [HttpGet]
        [Route("user/viewLoan")]
        public List<LoanApplicantModel> viewLoan()
        { 
            return(dal.viewLoan());
        }
    }
}