namespace Webapi
{
    internal class BusinessLayer
    {
        DataAccessLayer dal = new DataAccessLayer();
        
         public string addLoan(LoanApplicantModel user)
        {
            return (dal.addLoan(user));
        }
         
        
    }

}