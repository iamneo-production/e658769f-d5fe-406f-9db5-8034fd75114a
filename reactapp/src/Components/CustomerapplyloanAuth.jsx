function CustomerapplyloanAuth(values) {
    let error={}
    const email_pattern = /^[^\s@]{2,102}@[^\s@]{4,256}\.[^\s@]{2,}$/

    if(!email_pattern.test(values.applicantEmail)) {
        error.applicantEmail="Invalid email format";
    } else {
        error.applicantEmail="";
    }

    const mobilenumber_pattern = /^\d{10}$/

    if (!mobilenumber_pattern.test(values.applicantMobile)) {
        error.applicantMobile = "Invalid mobile number format";
    } else {
        error.applicantMobile="";
    }
  
    const aadhar_pattern = /^\d{12}$/

    if(!aadhar_pattern.test(values.applicantAadhaar)) {
        error.applicantAadhaar="Invalid aadhar number format";
    } else {
        error.applicantAadhaar="";
    }

    const pan_pattern = /^[A-Z]{5}\d{4}[A-Z]$/

    if(!pan_pattern.test(values.applicantPan)) {
        error.applicantPan="Invalid PAN number format";
    } else {
        error.applicantPan="";
    }

    const salary_pattern= /^\d*$/
    if(!salary_pattern.test(values.applicantSalary)) {
        error.applicantSalary="Invalid salary format";
    } 
    else {
        error.applicantSalary="";
    }

    const amount_pattern= /^\d*$/
    if(!amount_pattern.test(values.loanAmountRequired)) {
        error.loanAmountRequired="Invalid amount format";
    }
    else {
        error.loanAmountRequired="";
    }

    const repay_pattern= /^\d*$/
    if(!repay_pattern.test(values.loanRepaymentMonths)) {
        error.loanRepaymentMonths="Invalid month format";
    }
    else {
        error.loanRepaymentMonths="";
    }
  
  
    if(!values.applicantName) {
        error.applicantName="Name can't be empty";
    } else {
        error.applicantName="";
    }
  
    if (!values.applicantAddress) {
        error.applicantAddress="Address can't be empty";
    } else {
        error.applicantAddress="";
    }

    return error;
  }
  export default CustomerapplyloanAuth;