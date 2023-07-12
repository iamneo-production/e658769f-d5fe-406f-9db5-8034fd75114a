namespace Webapi
{
    internal class BusinessLayer
    {
        DataAccessLayer dal = new DataAccessLayer();
        
         public string addLoan(LoanApplicantModel user)
        {
            return (dal.addLoan(user));
        }
         
        public string SaveUser(UserModel user)
        {
            return (dal.SaveUser(user));
        }
}
}