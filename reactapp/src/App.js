import Signup from "./components/Signup"
import Customerapplyloan from "./components/Customerapplyloan";
// import "./components/Signup/Signup.css"
// import './components/Login/Login.css'
// import './components/Profile/Profile.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import HomePage from "./components/HomePage/HomePage";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Loanstatus from "./components/Loanstatus/Loanstatus";
// import Profile from "./components/Profile/Profile";
// import AdminPage from "./components/AdminPage/Admin"
// import Appliedloans from "./components/Appliedloans/Appliedloans";
// import Loanid from "./components/Loanid/Loanid";
// import Loandetails from "./components/Loandetails/Loandetails"

// import './components/Loanid/Loanid.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Login />}></Route> */}
          {/* <Route path='/home' element={<HomePage />}></Route>
          <Route path='/admin' element={<AdminPage />}></Route>
          <Route path='/user/signup' element={<Signup />}></Route>
          <Route path='/user/viewLoan' element={<Loanstatus />}></Route>
          <Route path='/user/getProfile' element={<Profile />}></Route>
          <Route path='/user/login' element={<Login />}></Route> */}
          <Route path='/user/addLoan' element={<Customerapplyloan />}></Route>
          {/* <Route path='/admin/getAllLoans' element={<Appliedloans />}></Route>
          <Route path='/Loanid' element={<Loanid />}></Route>
          <Route path='/Loandetails' element={<Loandetails />}></Route> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;