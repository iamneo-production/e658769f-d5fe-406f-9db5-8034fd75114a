import Customerapplyloan from "./Components/Customerapplyloan1"
import Adminappliedloans from "./Components/Adminappliedloans";
import Profile from "./Components/Profile";
import Signup from "./Components/Signup"
import Login from "/Components/Login"
import "./Components/Customerapplyloan1"
import "./Components/Login"
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
