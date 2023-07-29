import React, { useEffect } from "react";
import './HomePage.css'
import { Link, Outlet, useNavigate } from 'react-router-dom';

function HomePage() {


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

    return(
        <div className='body'><div><br/></div>
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
            <Outlet />
            </nav>
        </div>
    )
}
export default HomePage