import { useState } from "react";
import {useNavigate} from "react-router-dom"
import Swal from "sweetalert2/dist/sweetalert2.all.js";
import axios from 'axios';
//import useAuth from "../../hooks/useAuth";
const Login = () => {
  //State de usuario
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  
  let navigate = useNavigate();

  const { email, password } = user;
  //state de autenticacion
  //const {setAuthUser} = useAuth();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son obligatorios",
      });
      return;
    }

    userExisted()
  };
  const userExisted = async ()=>{
    try{
      const url = import.meta.env.VITE_APP_RUTA;
      const response = await axios.post(`${url}/login`,user,{header:{"Content-Type":"application/json"}});
      localStorage.setItem('token',response.data.token);
      setAuthUser(response.data.user); 
     if(response.data.user.codigo  && response.data.user.rol === "Estudiante" || response.data.user.rol === "estudiante")
     {
       navigate("/dashboard");
     }else if(response.data.user.codigo  && response.data.user.rol === "Administrador" || response.data.user.rol === "administrador" ){
       navigate("/dashboard-admin");
     }
      
    }catch(error){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El usuario o la contraseña no existen',
          });
        console.log(error);
    }
}
  return (
      <>
      <div className="row justify-content-center mt-5">
        <div className="col-1">
          <img
            src="public/icon.png"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-4">
          <h5 className="text-center text-color fw-bold pt-2">
            Lorem ipsum dolor, sit amet
          </h5>
          <p className="text-center text-secundary fw-bold ">
            Lorem ipsum dolor, sit amet
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="row justify-content-center ">
              <div className="col-md-6 m-3">
                <label className="text-color">Correo</label>
                <input
                  name="email"
                  className="form-control secundary-color"
                  type="text"
                  placeholder="example@email.com"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6  m-3">
                <label className="text-color">Contraseña</label>
                <input
                  name="password"
                  className="form-control secundary-color"
                  type="password"
                  placeholder="**************"
                  maxLength="10"
                  onChange={handleChange}
                  value={password}
                />
                <span className="password-icon">
                  <i className="bi bi-eye"></i>
                </span>
              </div>
              <div className=" form-group col-md-6">
                <button
                  type="submit"
                  className="btn color-red text-white btn-lg btn-block btn-tam "
                >
                  Iniciar Sesion
                </button>
              </div>
            </div>
          </form>
        </div>
        </div>
        <footer className="col-auto mt-5">
          <p className="text-color text-center mt-5">
            {" "}
            &copy; 2024 Digau
          </p>
        </footer>
    </>
  );
};

export default Login;