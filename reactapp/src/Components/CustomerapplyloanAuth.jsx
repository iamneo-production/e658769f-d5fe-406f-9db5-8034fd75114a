function CustomerapplyloanAuth(values) {
    let error={}
    const email_pattern = /^[^\s@]{2,102}@[^\s@]{4,256}\.[^\s@]{2,}$/

    (!email_pattern.test(values.applicantEmail))?error.applicantEmail="Invalid email format":error.applicantEmail="";

    const mobilenumber_pattern = /^\d{10}$/

    (!mobilenumber_pattern.test(values.applicantMobile))? error.applicantMobile = "Invalid mobile number format":error.applicantMobile="";
  
    const aadhar_pattern = /^\d{12}$/
    (!aadhar_pattern.test(values.applicantAadhaar))?error.applicantAadhaar="Invalid aadhar number format":error.applicantAadhaar="";

    const pan_pattern = /^[A-Z]{5}\d{4}[A-Z]$/

    (!pan_pattern.test(values.applicantPan))?error.applicantPan="Invalid PAN number format":error.applicantPan="";

    const salary_pattern= /^\d*$/
    (!salary_pattern.test(values.applicantSalary))?error.applicantSalary="Invalid salary format":error.applicantSalary="";

    const amount_pattern= /^\d*$/
    (!amount_pattern.test(values.loanAmountRequired))?error.loanAmountRequired="Invalid amount format":error.loanAmountRequired="";

    const repay_pattern= /^\d*$/
    (!repay_pattern.test(values.loanRepaymentMonths)) ?error.loanRepaymentMonths="Invalid month format":error.loanRepaymentMonths="";
  
  
    (!values.applicantName)?error.applicantName="Name can't be empty":error.applicantName="";
  
    (!values.applicantAddress)?error.applicantAddress="Address can't be empty":error.applicantAddress="";

    return error;
  }
  export default CustomerapplyloanAuth;