import React, { useState } from "react";
import axios from 'axios';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import CustomerapplyloanAuth from "./CustomerapplyloanAuth";

function Customerapplyloan() {

    const [values, setValues] = useState({
        loantype:'',
        applicantAddress: '',
        applicantEmail: '',
        applicantMobile: '',
        applicantName: '',
        loanRepaymentMonths: '',
        applicantSalary: '',
        applicantAadhaar: '',
        applicantPan: '',
        loanAmountRequired: ''
    })
    const navigate = useNavigate()

   



    const [errors, setError] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        setError(CustomerapplyloanAuth(values));
        if (errors.applicantAddress === "" && errors.applicantEmail === "" && errors.applicantMobile === "" && errors.applicantName === "" && errors.loanRepaymentMonths=== "" && errors.applicantSalary==="" && errors.applicantAadhaar==="" && errors.applicantPan==="" && errors.loanAmountRequired==="") {
            console.log("if success");
            axios.post('https://8080-cededafaccbaceaedccbedbccfbaabccd.project.examly.io/user/addLoan', values)
                .then(res => {
                    navigate("/Loanid");
                })
                .catch(err => console.log(err));
        }
    }
    return (
        <>
            <div className='body'><div><br /></div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light mx-auto ApplyloanHead">
                    <div class="container-fluid">
                        <a class="navbar-brand">Bussines Loan</a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link to="/user/addLoan" className="nav-link" id='applyLoan'>Apply Loan</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/user/viewLoan" className="nav-link" id='loanStatus'>Loan Status</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/user/getProfile" className="nav-link" id='profile'>Profile</Link>
                            </li>
                        </ul>
                        <Link to="/user/login">
                                <a className="logout" id='logout'>Logout</a>
                            </Link>  
                    </div> 
                    </div>
                    <Outlet />
                </nav>
            </div>
            <br />
            <div className='d-flex justify-content-center align-items-center vh-90 ApplyloanPage'>
                <div className='p-1 rounded w-25 ApplyloanForm'>
                    <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                            <input type="text" id="loantype" placeholder='Enter Loantype' name='loantype'
                                onChange={handleInput} className='form-control rounded-0' autoComplete='off' required/>
                            {errors.loantype && <span className='text-danger'>{errors.loantype}</span>}
                        </div>
                        <div className='mb-3'>
                            <input type="text" id="enterName" placeholder='Enter Applicant Name' name='applicantName'
                                onChange={handleInput} className='form-control rounded-0' autoComplete='off' required/>
                            {errors.applicantName && <span className='text-danger'>{errors.applicantName}</span>}
                        </div>
                        <div className='mb-3'>
                            <input type="text" id="enterAddress" placeholder='Enter Applicant Address' name='applicantAddress'
                                onChange={handleInput} className='form-control rounded-0' autoComplete='off' required/>
                            {errors.applicantAddress && <span className='text-danger'>{errors.applicantAddress}</span>}
                        </div>
                        <div className='mb-3'>
                            <input type="text" id="enterMobile" placeholder='Enter Mobilenumber' name='applicantMobile'
                                onChange={handleInput} className='form-control rounded-0' autoComplete='off' required/>
                            {errors.applicantMobile && <span className='text-danger'>{errors.applicantMobile}</span>}
                        </div>
                        <div className='mb-3'>
                            <input type="email" id="enterEmail" placeholder='Enter Email' name='applicantEmail'
                                onChange={handleInput} className='form-control rounded-0' autoComplete='off' required/>
                            {errors.applicantEmail && <span className='text-danger'>{errors.applicantEmail}</span>}
                        </div>
                        <div className='mb-3'>
                            <input type="text" id="enterAadharNo" placeholder='Enter Applicant Aadhar Number' name='applicantAadhaar'
                                onChange={handleInput} className='form-control rounded-0' autoComplete='off' required/>
                            {errors.applicantAadhaar && <span className='text-danger'>{errors.applicantAadhaar}</span>}
                        </div>
                        <div className='mb-3'>
                            <input type="text" id="enterPanNo" placeholder='Enter Applicant Pan Number' name='applicantPan'
                                onChange={handleInput} className='form-control rounded-0' autoComplete='off' required/>
                            {errors.applicantPan && <span className='text-danger'>{errors.applicantPan}</span>}
                        </div>
                        <div className='mb-3'>
                            <input type="text" id="enterSalary" placeholder='Enter salary' name='applicantSalary'
                                onChange={handleInput} className='form-control rounded-0' autoComplete='off' required/>
                            {errors.applicantSalary && <span className='text-danger'>{errors.applicantSalary}</span>}
                        </div>
                        <div className='mb-3'>
                            <input type="text" id="enterAmount" placeholder='Enter Amount Required' name='loanAmountRequired'
                                onChange={handleInput} className='form-control rounded-0' autoComplete='off' required/>
                            {errors.loanAmountRequired && <span className='text-danger'>{errors.loanAmountRequired}</span>}
                        </div>


                        <div className='mb-3'>
                            <input type="text" id="enterMonths" placeholder='Enter Months Required' name='loanRepaymentMonths'
                                onChange={handleInput} className='form-control rounded-0' autoComplete='off' required/>
                            {errors.loanRepaymentMonths && <span className='text-danger'>{errors.loanRepaymentMonths}</span>}
                        </div>

                        <div class="col-12 mb-3">
                            <label for="file" class="form-label">Select Document</label>
                            <input type="file" id="image" name="image" className='form-control rounded-0' onChange={handleInput}/> 
                        </div>

                        <div>
                            <div className='col'>
                                <button type='submit' id="submitButton" className='btn btn-success w-100 rounded-0'> Submit</button>
                            </div>
                            <Outlet />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Customerapplyloan