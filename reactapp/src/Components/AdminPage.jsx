import React, { useEffect } from "react";
import './Admin.css'
import { Link, Outlet, useNavigate } from 'react-router-dom';

function Admin() {



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



    return(
        <div className='body'><div><br/></div>
           <nav class="navbar navbar-expand-lg navbar-light bg-light mx-auto">
            <div class="container-fluid">
                <a class="navbar-brand">Bussines Loan</a>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                                <Link to="/admin/getAllLoans" class="nav-link" id='adminAppliedLoans'>Applied Loans</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Loandetails" class="nav-link" id='AdminLoanDetails'>Loan Details</Link>
                            </li>
                        </ul>
                        <Link to="/login">
                                <a className="logout" id='logout' onClick={HandleLogout}>Logout</a>
                            </Link>   
                    </div>                
            </div>
            <Outlet />
            </nav>
        </div>
    )
}
export default Admin