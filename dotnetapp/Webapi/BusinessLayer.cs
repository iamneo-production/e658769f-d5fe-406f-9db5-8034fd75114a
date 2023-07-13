namespace Webapi
{
    internal class BusinessLayer
    {
        DataAccessLayer dal = new DataAccessLayer();
        public List<LoanApplicantModel> getAllLoans()
        {
            return dal.getAllLoans();
        }
        
    }

}