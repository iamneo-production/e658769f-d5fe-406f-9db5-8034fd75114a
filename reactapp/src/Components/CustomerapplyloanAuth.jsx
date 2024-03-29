function CustomerapplyloanAuth(values) {
    let error={}
    const email_pattern = /^[^\s@]{2,102}@[^\s@]{4,256}\.[^\s@]{2,}$/
    const mobilenumber_pattern = /^\d{10}$/
    const aadhar_pattern = /^\d{12}$/
    const pan_pattern = /^[A-Z]{5}\d{4}[A-Z]$/
    const salary_pattern= /^\d*$/
    const amount_pattern= /^\d*$/
    const repay_pattern= /^\d*$/
  
    if (!values.applicantMobile) {
        error.applicantMobile= "Mobile number can't be empty";
    } else if (!mobilenumber_pattern.test(values.applicantMobile)) {
        error.applicantMobile = "Invalid mobile number format";
    } else {
        error.applicantMobile="";
    }
  
    if(!values.applicantName) {
        error.applicantName="Name can't be empty";
    } else {
        error.applicantName="";
    }
  
    if(!values.applicantEmail) {
        error.applicantEmail="Email can't be empty";
    } else if(!email_pattern.test(values.applicantEmail)) {
        error.applicantEmail="Invalid email format";
    } else {
        error.applicantEmail="";
    }
  
    if(!values.applicantAadhaar) {
        error.applicantAadhaar="Aadhar number can't be empty";
    } else if(!aadhar_pattern.test(values.applicantAadhaar)) {
        error.applicantAadhaar="Invalid aadhar number format";
    } else {
        error.applicantAadhaar="";
    }
  
    if(!values.applicantPan) {
        error.applicantPan="PAN number can't be empty";
    } else if(!pan_pattern.test(values.applicantPan)) {
        error.applicantPan="Invalid PAN number format";
    } else {
        error.applicantPan="";
    }
  
    if (!values.applicantAddress) {
        error.applicantAddress="Address can't be empty";
    } else {
        error.applicantAddress="";
    }
  
    if (!values.applicantSalary) {
        error.applicantSalary="Salary can't be empty";
    } else if(!salary_pattern.test(values.applicantSalary)) {
        error.applicantSalary="Invalid salary format";
    } 
    else {
        error.applicantSalary="";
    }
  
    if (!values.loanAmountRequired) {
        error.loanAmountRequired="Amount can't be empty";
    } else if(!amount_pattern.test(values.loanAmountRequired)) {
        error.loanAmountRequired="Invalid amount format";
    }
    else {
        error.loanAmountRequired="";
    }
  
    if (!values.loanRepaymentMonths) {
        error.loanRepaymentMonths="Number of months can't be empty";
    } else if(!repay_pattern.test(values.loanRepaymentMonths)) {
        error.loanRepaymentMonths="Invalid month format";
    }
    else {
        error.loanRepaymentMonths="";
    }
    return error;
  }
  export default CustomerapplyloanAuth;