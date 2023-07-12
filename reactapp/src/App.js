import Customerapplyloan from "./Components/Customerapplyloan";
import Signup from "./Components/Signup"
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/user/signup' element={<Signup />}></Route>
        <Route path='/user/addLoan' element={<Customerapplyloan />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;