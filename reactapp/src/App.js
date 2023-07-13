import Signup from "./Components/Signup"
import Adminappliedloans from "./Adminappliedloans";
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/user/signup' element={<Signup />}></Route>
          <Route path='/admin/getAllLoans' element={<Adminappliedloans />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;