import React, { useEffect, useState } from 'react';

import { Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Adminapprovedloan.css';

function Loandetails() {
  const [loanId, setLoanId] = useState('');
  const [Loandetails, setLoandetails] = useState('');
  const [loanData, setLoanData] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
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

  const handleTrack = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:8081/Loandetails/${loanId}`)
      .then((res) => {
        if (res.data.Status === 'Success') {

          const loan = res.data.Result[0];
          setLoandetails(loan.approvalStatus);
          setLoanData(loan);
        } else {
          setLoandetails('Not found');
          setLoanData(null);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoandetails('Error');
        setLoanData(null);
      });
  };
  useEffect(() => {
    fetchLoandetails();
  }, []);

  const fetchLoandetails = () => {
    axios
      .get('http://localhost:8081/Loandetails')
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
                  <Link to="/admin/getAllLoans" className="nav-link" id='adminAppliedLoans'>Applied Loans</Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin/Loandetails" className="nav-link" id='AdminLoanDetails'>Loan Details</Link>
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
            Search
          </button>
        </form>
      </div>
      {loanData && (
        <div className="text-center mt-5">
          <div className="grid-container">
            <div className="grid-item">
              <div className="image-container">
                <table id={loanData.approvalStatus==="approved"? "adminDetailsGrid1":"adminDetailsGrid2"}>
                  <tbody>
                    <tr>
                      <td>Name:</td>
                      <td>{loanData.applicantName}</td>
                      <td>Address:</td>
                      <td>{loanData.applicantAddress}</td>
                      <td>Email:</td>
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
                          <button className={`btn ${Loandetails === 'rejected' ? 'btn-danger' : 'btn-success'}`}>
                            {Loandetails === 'approved' ? 'Approved' : 'Rejected'}
                          </button>
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
      {Loandetails === 'Not found' && (
        <div className="text-center text-danger mt-5">
          <h4>No loan application found with the entered ID.</h4>
        </div>
      )}
      {Loandetails === 'Error' && (
        <div className="text-center text-danger mt-5">
          <h4>No loan application found with the entered ID.</h4>
        </div>
      )}
      <div className='grid-container'>
        <div className='grid-item'>
          {data.map((item) => (
            <div className='image-container' key={item.loanId}>
              <table>
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <td>{item.applicantName}</td>
                    <td>Address:</td>
                    <td>{item.applicantAddress}</td>
                    <td>Email:</td>
                    <td>{item.applicantEmail}</td>
                  </tr>
                  <tr>
                    <td>Phone No:</td>
                    <td>{item.applicantMobile}</td>
                    <td>Aadhar Number:</td>
                    <td>{item.applicantAadhaar}</td>
                    <td>Pan Number:</td>
                    <td>{item.applicantPan}</td>
                  </tr>
                  <tr>
                    <td>Amount:</td>
                    <td>{item.loanAmountRequired}</td>
                    <td>Loan ID:</td>
                    <td>{item.loanId}</td>
                    <td></td>
                    <td>{item.approvalStatus}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
export default Loandetails;