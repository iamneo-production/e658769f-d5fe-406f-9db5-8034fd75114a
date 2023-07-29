import Login from "./Login/Login";
import Signup from "./Signup/Signup"

import "./Signup/Signup.css"
import './Login/Login.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
         
          <Route path='/login' element={<Login />}></Route>
          <Route path='/Signup' element={<Signup />}></Route>
          

      </Routes>
    </BrowserRouter>
  );
}

export default App;
