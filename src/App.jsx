import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './componets/Register';

function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route path="/" element={<Register/>}></Route>
           </Routes>
   </BrowserRouter>
  )
}

export default App
