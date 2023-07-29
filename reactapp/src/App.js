import Customerapplyloan from "./Components/Customerapplyloan1"
import Adminappliedloans from "./Components/Adminappliedloans";
import Loanstatus from "./Components/Customerloanstatus";
import Loandetails from "./Components/Adminapprovedloan";
import Profile from "./Components/Profile";
import Signup from "./Components/Signup"
import Login from "/Components/Login"
import HomePage from "./Components/HomePage";
import Admin from "./Components/AdminPage";
import "./Components/Customerapplyloan.css"
import "./Components/Login.css"
import "./Components/Profile.css"
import "./Components/Customerloanstatus.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/user/signup' element={<Signup />}></Route>
          <Route path='/user/addLoan' element={<Customerapplyloan/>}></Route>
          <Route path='/admin/getAllLoans' element={<Adminappliedloans />}></Route>
          <Route path='/user/login' element={<Login/>}></Route>
          <Route path='/user/getProfile' element={<Profile/>}></Route>
          <Route path='/user/viewLoan' element={<Loanstatus/>}></Route>
          <Route path='/user/loandetails' element={<Loandetails/>}></Route>
          <Route path='/home' element={<HomePage/>}></Route>
          <Route path='/Admin' element={<Admin/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

export default App;