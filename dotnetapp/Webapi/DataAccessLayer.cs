using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;


namespace Webapi
{
    internal class DataAccessLayer
    {
        
        
        public List<LoanApplicantModel> getAllLoans()
        {
            List<LoanApplicantModel> loans = new List<LoanApplicantModel>();

            using (SqlConnection con = new SqlConnection("User ID =sa;password=examlyMssql@123;server=localhost;Database=businessloan;trusted_connection=false;Persist Security Info =False;Encrypt=False"))
            {
                con.Open();

                string query = "SELECT * FROM LoanApplicantModel";
                using (SqlCommand cmd = new SqlCommand(query, con))
                {
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            LoanApplicantModel loan = new LoanApplicantModel
                            {
                                loanId = (int)reader["loanId"],
                                applicantName = reader["applicantName"].ToString(),
                                
                            };

                            loans.Add(loan);
                        }
                    }
                }
            }

            return loans;
        }
        

    }
}