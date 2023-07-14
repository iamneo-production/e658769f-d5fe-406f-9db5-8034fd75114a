namespace Webapi
{
    internal class BusinessLayer1
    {
        DataAccessLayer1 dal = new DataAccessLayer1();
        public string SaveUser(User_Model user)
        {
            return (dal.SaveUser(user));
        }
        public List<LoanApplicantModel> getAllLoans()
        {
            return dal.getAllLoans();
        }
        public string addLoan(LoanApplicantModel user)
        {
            return (dal.addLoan(user));
        }
        public List<User_Model> isUserPresent()
        {
            return dal.isUserPresent();
        }
        public List<LoanApplicantModel> getProfile()
        {
            return dal.getProfile();
        }
        public List<LoanApplicantModel> viewLoan()
        {
            return dal.viewLoan();
        }
        public List<LoanApplicantModel> loandetails()
        {
            return dal.loandetails();
        }
        public List<LoanApplicantModel> generateSchedule()
        {
            return dal.generateSchedule();
        }
    }

}