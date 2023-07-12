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
        SqlConnection con = new SqlConnection("User ID =sa;password=examlyMssql@123;server=localhost;Database=businessloan;trusted_connection=false;Persist Security Info =False;Encrypt=False");
        SqlCommand cmd = null;
        SqlDataAdapter adapter = null;
        SqlDataReader dr = null;
        internal string SaveUser(UserModel user)
        {
            cmd = new SqlCommand("select * from UserModel where Email = '" + user.Email + "'", con);
            con.Open();
            dr = cmd.ExecuteReader();

            if (dr.HasRows)
            {
                con.Close();
                return "false";
            }
            else
            {
                con.Close();
                cmd = new SqlCommand("insert into UserModel Values('" + user.Email + "','" + user.Password + "','" + user.username + "'," +
                    "'" + user.mobileNumber + "','"+user.userRole+"') ", con);
                    con.Open();
                int rowsaffected = cmd.ExecuteNonQuery();
                con.Close();
                if (rowsaffected > 0)
                {
                    return "true";
                }
                else
                {
                    return "false";
                }
            }
        }


        internal string addLoan(LoanApplicantModel user)
        {
                cmd = new SqlCommand("insert into LoanApplicantModel Values('" + user.loantype + "','" + user.applicantName + "','" + user.applicantAddress + "','" + user.applicantMobile + "','"+user.applicantEmail+"','" + user.applicantAadhaar + "','" + user.applicantPan + "','" + user.applicantSalary + "','" + user.loanAmountRequired + "','" + user.loanRepaymentMonths + "') ", con);
                con.Open();
                int rowsaffected = cmd.ExecuteNonQuery();
                con.Close();
                if (rowsaffected > 0)
                {
                    return "true";
                }
                else
                {
                    return "false";
                }  
        }
    }
}