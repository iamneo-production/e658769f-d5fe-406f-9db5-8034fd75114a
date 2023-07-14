using Microsoft.AspNetCore.Mvc;

namespace Webapi.Controllers
{
    
    [ApiController]
    public class loandetailsController : ControllerBase
    {
        BusinessLayer1 dal = new BusinessLayer1();
        [HttpGet]
        [Route("user/viewLoan")]
        public List<LoanApplicantModel> loandetails()
        { 
            return(dal.loandetails());
        }
    }
}