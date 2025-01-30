import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './componets/Register';
import Login  from './componets/Login';
import {AuthProvider} from './context/Auth';
import RouteProtected from './layouts/RouteProtected';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
          <Routes>
              <Route path="/register" element={<RouteProtected/>}>
                < Route index element={ <Register/>}/>
              </Route>
              <Route path="/" element={<Login/>}></Route>
              <Route path="/form" element={<Register/>}></Route>
           </Routes>
      </AuthProvider>
   </BrowserRouter>
  )
}

export default App
