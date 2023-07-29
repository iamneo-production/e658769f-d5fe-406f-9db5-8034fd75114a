using Microsoft.AspNetCore.Mvc;

namespace Webapi.Controllers
{
    
    [ApiController]
    public class adminloanController : ControllerBase
    {
        BusinessLayer1 dal = new BusinessLayer1();
        [HttpGet]
        [Route("admin/getAllLoans")]
        public List<LoanApplicantModel> getAllLoans()
        { 
            return(dal.getAllLoans());
        }
    }
}