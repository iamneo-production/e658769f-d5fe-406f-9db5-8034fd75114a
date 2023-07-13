using Microsoft.AspNetCore.Mvc;

namespace Webapi.Controllers
{
    
    [ApiController]
    public class loanController : ControllerBase
    {
        BusinessLayer1 dal = new BusinessLayer1();
        [HttpPost]
        [Route("user/addLoan")]
        public string addLoan([FromBody] LoanApplicantModel user)
        {
            
            return (dal.addLoan(user));
        }
    }
}