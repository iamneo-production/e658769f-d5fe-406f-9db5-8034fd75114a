import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
//import './Adminappliedloans.css';

function Adminappliedloans() {
  const [data, setData] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('authenticatedAdmin');
    if (isAuthenticated !== 'true') {
      navigate('/user/login');
    }
  }, []);

  function HandleLogout() {
    navigate('/user/login');
    localStorage.removeItem('authenticatedUser');
    localStorage.removeItem('authenticatedAdmin');
  }

  useEffect(() => {
    fetchAdminAdminappliedloans();
  }, []);

  const fetchAdminAdminappliedloans = () => {
    axios
      .get('http://localhost:8081/admin/getAllLoans')
      .then((res) => {
        if (res.data.Status === 'Success') {
          console.log(res.data.Result);
          setData(res.data.Result);
        } else {
          alert('Error');
        }
      })
      .catch((err) => console.log(err));
  };

  const handleApprove = (loanId) => {
    axios
      .post('http://localhost:8081/admin/getAllLoans/approve', { loanId })
      .then((res) => {
        if (res.data.Status === 'Success') {
          // Update the approval status in the client-side state or re-fetch the loan data
          fetchAdminAdminappliedloans();
          // Display a success message or perform any other necessary actions
        } else {
          // Handle the error case
        }
      })
      .catch((err) => console.log(err));
  };

  const handleReject = (loanId) => {
    axios
      .post('http://localhost:8081/admin/getAllLoans/reject', { loanId })
      .then((res) => {
        if (res.data.Status === 'Success') {
          // Update the approval status in the client-side state or re-fetch the loan data
          fetchAdminAdminappliedloans();
          // Display a success message or perform any other necessary actions
        } else {
          // Handle the error case
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='body'>
      <div>
        <br />
      </div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light mx-auto'>
        <div className='container-fluid'>
          <a className='navbar-brand'>Business Loan</a>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mx-auto'>
              <li className='nav-item'>
                <Link to='/admin/getAllLoans' className='nav-link' id='AdminAdminappliedloans'>
                  Applied Loans
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/Loandetails' className='nav-link' id='loandetails'>
                  Loan Details
                </Link>
              </li>
            </ul>
            <Link to="/user/login">
                <a className="logout" id='logout' onClick={HandleLogout}>Logout</a>
              </Link>
          </div>
        </div>
      </nav>

      <div className='grid-container'>
        <div className='grid-item'>
          {data.map((item) => ( 
            <div className='image-container' key={item.loanid}>
              <table id={item.approvalStatus==="approved"? "adminLoanGrid1":"adminLoanGrid2"}>
                <tbody>
                  <tr>
                    <td>Applicant name:</td>
                    <td>{item.enterName}</td>
                    <td>Applicant Address:</td>
                    <td>{item.enterAddress}</td>
                    <td>Applicant Email:</td>
                    <td>{item.email}</td>
                  </tr>
                  <tr>
                    <td>Applicant phone no:</td>
                    <td>{item.mobileNumber}</td>
                    <td>Applicant Addhaar:</td>
                    <td>{item.enterAadharNo}</td>
                    <td>Applicant PAN no:</td>
                    <td>{item.enterPanNo}</td>
                  </tr>
                  <tr>
                    <td>Loan amount:</td>
                    <td>{item.enterAmount}</td>
                    <td>Applicant Loan ID:</td>
                    <td>{item.loanid}</td>
                    <td colSpan='2'>
                      {item.approvalStatus === 'approved' ? (
                        <span className='status approved'>Approved</span>
                      ) : item.approvalStatus === 'rejected' ? (
                        <span className='status rejected'>Rejected</span>
                      ) : (
                        <>
                          <button id="adminApproveLoan"
                            className={`approve-btn ${item.approvalStatus === 'rejected' ? 'disabled' : ''}`}
                            onClick={() => handleApprove(item.loanid)}
                            disabled={item.approvalStatus === 'rejected'}
                          >
                            Approve
                          </button>
                          <button id="adminRejectLoan"
                            className={`reject-btn ${item.approvalStatus === 'approved' ? 'disabled' : ''}`}
                            onClick={() => handleReject(item.loanid)}
                            disabled={item.approvalStatus === 'approved'}
                          >
                            Reject
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Adminappliedloans;