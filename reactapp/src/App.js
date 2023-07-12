import Customerapplyloan from "./Components/Customerapplyloan";
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/user/addLoan' element={<Customerapplyloan />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;