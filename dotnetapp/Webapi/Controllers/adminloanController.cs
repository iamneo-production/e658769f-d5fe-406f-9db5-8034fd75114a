using Microsoft.AspNetCore.Mvc;

namespace Webapi.Controllers
{
    
    [ApiController]
    public class adminloanController : ControllerBase
    {
        BusinessLayer dal = new BusinessLayer();
        [HttpGet]
        [Route("admin/getAllLoans")]
        public List<LoanApplicantModel> getAllLoans()
        { 
            return(dal.getAllLoans());
        }
    }
}