
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Adminappliedloan from './Components/Adminappliedloan.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route path='/getAllLoans' element={<Adminappliedloan />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
