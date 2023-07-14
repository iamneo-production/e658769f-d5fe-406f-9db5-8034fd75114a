import React, { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
//import './Loanstatus.css';

function Loanstatus() {
  const [loanId, setLoanId] = useState('');
  const [loanStatus, setLoanStatus] = useState('');
  const [loanData, setLoanData] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleTrack = (e) => {
    e.preventDefault();

    axios
      .get(`http://localhost:8081/user/viewLoan/${loanId}`)
      .then((res) => {
        if (res.data.Status === 'Success') {
          const loan = res.data.Result[0];
          setLoanStatus(loan.approvalStatus);
          setLoanData(loan);
        } else {
          setLoanStatus('Not found');
          setLoanData(null);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoanStatus('Error');
        setLoanData(null);
      });
  };
  const navigate = useNavigate()

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('authenticatedUser');
    if (isAuthenticated !== 'true') {
      navigate('/user/login');
    }
  }, []);

  function HandleLogout() {
    navigate('/user/login');
    localStorage.removeItem('authenticatedUser');
    localStorage.removeItem('authenticatedAdmin');
  }

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <React.Fragment>
      <div className='body'><div><br /></div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mx-auto">
          <div className="container-fluid">
            <a className="navbar-brand">Bussines Loan</a>
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
                                <a className="logout" id='logout' onClick={HandleLogout}>Logout</a>
                            </Link>  
                    </div> 
          </div>

        </nav>
      </div>
      <div>
        <p className="text-center fw-bold fs-5 mt-5">Track Your Loan Application</p>
        <form className="d-flex flex-column" onSubmit={handleTrack}>
          <input
            id="enterLoanId"
            type="text"
            placeholder="Enter Your Loan Id"
            className="m-5 text-center mx-auto fw-bold border-1 inpstyle"
            value={loanId}
            onChange={(e) => setLoanId(e.target.value)}
          />
          <button
            type="submit"
            id="trackButton"
            className="btn border bg-danger mx-auto text-white fw-bold trackbtn"
          >
            Track
          </button>
        </form>
      </div>


      {loanData && (
        <div className="text-center mt-5">
          <div className="grid-container">
            <div className="grid-item">
              <div className="image-container">
                <table id={loanData.approvalStatus==="approved"? "statusGrid1":"statusGrid2"}>
                  <tbody>
                    <tr>
                      <td>Applicant name:</td>
                      <td>{loanData.applicantName}</td>
                      <td>Applicant Address:</td>
                      <td>{loanData.applicantAddress}</td>
                      <td>Applicant Email:</td>
                      <td>{loanData.applicantEmail}</td>
                    </tr>
                    <tr>
                      <td>Phone No:</td>
                      <td>{loanData.applicantMobile}</td>
                      <td>Aadhar Number:</td>
                      <td>{loanData.applicantAadhaar}</td>
                      <td>Pan Number:</td>
                      <td>{loanData.applicantPan}</td>
                    </tr>
                    <tr>
                      <td>Amount:</td>
                      <td>{loanData.loanAmountRequired}</td>
                      <td>Loan ID:</td>
                      <td>{loanData.loanId}</td>
                      <td colSpan="2">
                        {loanData.approvalStatus === '' ? (
                          <button className="btn btn-warning" disabled>Pending</button>
                        ) : (

                          <><button
                            className={`approve-btn ${loanStatus === 'rejected' ? 'hidden' : ''}`}
                            hidden={loanStatus === 'rejected'}
                          >
                            Approved
                          </button>
                            <button
                              className={`reject-btn ${loanStatus === 'approved' ? 'hidden' : ''}`}
                              hidden={loanStatus === 'approved'}
                            >
                              Rejected
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
      {loanStatus === 'Not found' && (
        <div className="text-center text-danger mt-5">
          <h4>No loan application found with the entered ID.</h4>
        </div>
      )}
      {loanStatus === 'Error' && (
        <div className="text-center text-danger mt-5">
          <h4>No loan application found with the entered ID.</h4>
        </div>
      )}
    </React.Fragment>
  );
}

export default Loanstatus;