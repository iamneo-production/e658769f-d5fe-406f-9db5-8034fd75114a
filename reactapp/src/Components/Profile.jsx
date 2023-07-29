import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Profile() {
  const [data, setData] = useState([]);
  const [emi, setEmi] = useState(0);
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


  useEffect(() => {
    const email = localStorage.getItem("email");
    console.log("Stored email:", email); // Add this line to check the stored email value

    // Function to fetch user profile data

    const fetchUserProfile = async () => {
      try {
        const res = await axios.get(`http://localhost:8081/getProfile/${email}`);
        console.log("Server response:", res.data); // Add this line to check the server response

        if (res.data.Status === "Success") {
          setData(res.data.Result);
          const enterAmount = res.data.Result[0]?.enterAmount;
          const months = res.data.Result[0]?.months;
          const interestRate = res.data.Result[0]?.interestRate || 0.05; // Assuming a default interest rate of 5%
          const salary = res.data.Result[0]?.salary;
          const emiValue = calculateEMI(enterAmount, interestRate, months, salary);
          setEmi(emiValue);
        } else {
          alert("Error");
        }
      } catch (err) {
        console.log(err);
      }
    };

    // Call the fetchUserProfile function initially and whenever the email value changes
    fetchUserProfile();
  }, []);

  function calculateEMI(enterAmount, interestRate, months, salary) {
    const monthlyInterestRate = (interestRate / 100) / 12;
    const monthly = months * 12;
    const emi =
      (enterAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, monthly)) /
      (Math.pow(1 + monthlyInterestRate, monthly) - 1);
    return emi.toFixed(2);
  }

  return (
    <>
      <div className='body'>
        <div><br /></div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mx-auto LoanidHead">
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
                                <a className="logout" id='logout' onClick={HandleLogout}>Logout</a>
                            </Link>  
                    </div> 
                    </div>
          <Outlet />
        </nav>
      </div>
      <div className="profile-container">
        <div className='d-flex justify-content-center align-items-center vh-90'>
          <h3>Profile Information</h3>
        </div>
        {data.map((item) => (
          <form className="profile-form" key={item.loanid}>
            <div className="profile-row">
              <div className="profile-column">
                <div id="name" className="profile-value">Name: {item.enterName} </div>
              </div>
              <div className="profile-column">
                <div id="address" className="profile-value">Address: {item.enterAddress}</div>
              </div>
            </div>
            <div className="profile-row">
              <div className="profile-column">
                <div  id="mobileNo" className="profile-value">Phone No: {item.mobileNumber}</div>
              </div>
              <div className="profile-column">
                <div id="loanId" className="profile-value">Loan Id: {item.loanid}</div>
              </div>
            </div>
            <div className="profile-row">
              <div className="profile-column">
                <div id="email" className="profile-value">Email: {item.email}</div>
              </div>
              <div className="profile-column">
                <div id="montlyemi" className="profile-value">Monthly EMI: {emi}</div>
              </div>
            </div>
          </form>
        ))}
      </div>
    </>
  )
}

export default Profile;