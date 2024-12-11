import {useState} from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
//import AxiosClient from '../AxiosClient/AxiosClient';
import { v4 as uuidv4 } from 'uuid';

const Register = ()=> {
    const generatePassword = () => {
        return uuidv4().split('-')[0];; // Genera un UUID único
      };
    //state de registro
    const [registrarU,setregistrar] = useState({
        identification:"",
        name:"",
        email:"",
        cellPhone:"",
        adress:"",
        typeUser: "",
        password: generatePassword()
    });
    const {name,identification,email,cellPhone,adress,typeUser} = registrarU;

    const handleChange = e =>{
        console.log(e.target.value);
        
        setregistrar({
            ...registrarU,
            [e.target.name]:e.target.value
        });
    }
      
    const handleSubmitForm = e =>{
        e.preventDefault();
        if([name,identification,email,cellPhone,adress].includes('')){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son obligatorios',
              });
            return;
        }
       register_user();
        //reseteamos el form
        setregistrar({
          identification:"",
          name:"",
          email:"",
          cellPhone:"",
          adress:"",
          password:"default_password"
        });
    }

    const register_user = async () => {
        try{
        // const {data} = await AxiosClient.post('/register',registrarU);
        console.log(data);
        Swal.fire({
            icon: 'success',
            text: 'Producto Registrado con exitoso',
          });
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div>
             <div className='container'>
           <div className="row justify-content-center mt-5">
                <div className="col-auto">
                    <h2 className="title">Registrarse</h2>
                </div>
           </div>
                    <form
                        onSubmit={handleSubmitForm}
                    >
                         <div className="row justify-content-center ">
                            <div className="col-md-7 m-4">
                                <div className="input-group mb-3">
                                <div className="input-group-prepend mr-4">
                                    <button className="btn btn-outline-secondary" type="button">Usuario</button>
                                </div>
                                <select className="custom-select" id="inputGroupSelect03" name="typeUser" value={typeUser} onChange={handleChange}>
                                    <option selected>Seleccione una Opcion</option>
                                    <option value="Admistrador">Administrador</option>
                                    <option value="Cliente">Cliente</option>
                                    <option value="Reaccion">Reaccion</option>
                                </select>
                                </div>
                                <div className="input-group mb-3">
                                <div className="input-group-prepend mr-4">
                                    <button className="btn btn-outline-secondary" type="button">Tipo Identificaion</button>
                                </div>
                                <select className="custom-select" id="inputGroupSelect03" name="typeUser" value={typeUser} onChange={handleChange}>
                                    <option selected>Seleccione una Opcion</option>
                                    <option value="Admistrador">Cedula Ciudadania</option>
                                    <option value="Cliente">Tarjeta de Identidad</option>
                                    <option value="Pasaporte">Pasaporte</option>
                                    <option value="Reaccion">Pasaporte</option>
                                </select>
                                </div>
                                <input
                                    name="identification"
                                    className="form-control mb-3 "
                                    type="Text"
                                    placeholder="Identificacion"
                                    value={identification}
                                    onChange={handleChange}
                                />                    
                                <input
                                    name="name"
                                    className="form-control mt-4 "
                                    type="text"
                                    placeholder="Nombre"
                                    value={name}
                                    onChange={handleChange}
                                />
                                <input
                                    name="name"
                                    className="form-control mt-4 "
                                    type="text"
                                    placeholder="Apellido"
                                    value={name}
                                    onChange={handleChange}
                                />
                                <input
                                    name="email"
                                    className="form-control mt-4"
                                    type="email"
                                    placeholder="Email" 
                                    value={email}
                                    onChange={handleChange}
                                />
                                <input
                                        name="adress"
                                        className="form-control"
                                        type="text"
                                        placeholder="Direccion Residencial"
                                        value={adress}
                                        onChange={handleChange}
                                />
                                <input
                                        name="adress"
                                        className="form-control"
                                        type="text"
                                        placeholder="Direccion Laboral"
                                        value={adress}
                                        onChange={handleChange}
                                />
                                <input
                                        name="adress"
                                        className="form-control"
                                        type="text"
                                        placeholder="Cargo"
                                        value={adress}
                                        onChange={handleChange}
                                />
                                <input
                                    name="cellPhone"
                                    className="form-control "
                                    type="number"
                                    placeholder="Telefono"
                                    value={cellPhone}
                                    onChange={handleChange}
                                />
                                <input
                                    name="FechaNac"
                                    className="form-control mb-3 "
                                    type="date"
                                    placeholder="Identificacion"
                                    value={identification}
                                    onChange={handleChange}
                                />
                                <input
                                    name="Foto automovil"
                                    className="form-control mb-3 "
                                    type="file"
                                    placeholder="Identificacion"
                                    value={identification}
                                    onChange={handleChange}
                                    accept="image/*"
                                />
                                <input
                                    name="Foto user"
                                    className="form-control mb-3 "
                                    type="file"
                                    placeholder="Foto usuario"
                                    value={identification}
                                    onChange={handleChange}
                                    accept="image/*"
                                />
                                <div className="input-group mb-3">
                                <div className="input-group-prepend mr-4">
                                    <button className="btn btn-outline-secondary" type="button">Nacionalidad</button>
                                </div>
                                <select className="custom-select" id="inputGroupSelect03" name="typeUser" value={typeUser} onChange={handleChange}>
                                    <option selected>Seleccione una Opcion</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Cliente">Tarjeta de Identidad</option>
                                    <option value="Pasaporte">Pasaporte</option>
                                    <option value="Reaccion">Pasaporte</option>
                                </select>
                                </div>
                                <div className="input-group mb-3">
                                <div className="input-group-prepend mr-4">
                                    <button className="btn btn-outline-secondary" type="button">Estado civil</button>
                                </div>
                                <select className="custom-select" id="inputGroupSelect03" name="typeUser" value={typeUser} onChange={handleChange}>
                                    <option selected>Seleccione una Opcion</option>
                                    <option value="Soltero">Soltero feliz</option>
                                    <option value="Cliente">Tarjeta de Identidad</option>
                                    <option value="Pasaporte">Pasaporte</option>
                                    <option value="Reaccion">Pasaporte</option>
                                </select>
                                </div>
                            </div>       
                                <div className="col-md-7 clearfix">
                                    <input
                                    type="submit"
                                    className="btn btn-primary btn-lg btn-block  "
                                    value="Registrarse"
                                    />
                                    <Link to="/" className=" m-lg-5 btn btn-success btn-lg btn-block ">Volver</Link>
                                </div>
                                
                        </div>
                    </form>
                </div>
        </div>
    )
}

export default Register
