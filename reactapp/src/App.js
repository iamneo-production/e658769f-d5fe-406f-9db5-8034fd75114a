
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Adminappliedloan from '/home/coder/project/workspace/reactapp/src/components/Adminappliedloan.jsx'
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
