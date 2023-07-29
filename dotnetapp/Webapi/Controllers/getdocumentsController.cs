using Microsoft.AspNetCore.Mvc;

namespace Webapi.Controllers
{
    
    [ApiController]
    public class getdocumentsController : ControllerBase
    {
        BusinessLayer1 dal = new BusinessLayer1();
        [HttpGet]
        [Route("user/getDocuments")]
        public List<LoanApplicantModel> getDocuments()
        { 
            return(dal.getDocuments());
        }
    }
}