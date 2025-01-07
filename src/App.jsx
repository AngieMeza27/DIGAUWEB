import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './componets/Register';
import Login  from './componets/Login';

function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route path="/register" element={<Register/>}></Route>
              <Route path="/" element={<Login/>}></Route>
           </Routes>
   </BrowserRouter>
  )
}

export default App
