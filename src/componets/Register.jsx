import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Option from './utils/Option';
import countriesData from "./utils/countries/Countries.json";
//import AxiosClient from '../AxiosClient/AxiosClient';


const Register = () => {
    //state de registro
    const [registrarU, setregistrar] = useState({
        identification: "",
        name: "",
        email: "",
        lastName: "",
        cellPhone: "",
        adress: "",
        typeUser: "",
        post: "",
        workdirection: "",
        datebirth: "",
        PhotoCar:"",
        PhotoUser: ""
    });
    const { name, identification, email, cellPhone, adress, lastName,typeUser, post,  workdirection,datebirth, PhotoCar, PhotoUser } = registrarU;

    const handleChange = e => {
        console.log(e.target.value);

        setregistrar({
            ...registrarU,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmitForm = e => {
        e.preventDefault();
        if ([name, identification, email, cellPhone, adress].includes('')) {
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
            identification: "",
            name: "",
            lastName:"",
            email: "",
            cellPhone: "",
            adress: ""
        });
    }

    const register_user = async () => {
        try {
            // const {data} = await AxiosClient.post('/register',registrarU);
            console.log(data);
            Swal.fire({
                icon: 'success',
                text: 'Producto Registrado con exitoso',
            });
        } catch (error) {
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
                            <Option options={["Administrador", "Cliente", "Reacción"]} handleChange = {handleChange} title = {"Usuario"} type = {typeUser} />
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
                                value={lastName}
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
                                className="form-control mt-4"
                                type="text"
                                placeholder="Direccion Residencial"
                                value={adress}
                                onChange={handleChange}
                            />
                            <input
                                name="workdirection"
                                className="form-control mt-4"
                                type="text"
                                placeholder="Direccion Laboral"
                                value={workdirection}
                                onChange={handleChange}
                            />
                            <input
                                name="post"
                                className="form-control mt-4"
                                type="text"
                                placeholder="Cargo"
                                value={post}
                                onChange={handleChange}
                            />
                            <input
                                name="cellPhone"
                                className="form-control mt-4"
                                type="number"
                                placeholder="Telefono"
                                value={cellPhone}
                                onChange={handleChange}
                            />
                            <input
                                name="datebirth"
                                className="form-control mb-3 mt-4"
                                type="date"
                                placeholder="Fecha de Nacimiento"
                                value={datebirth}
                                onChange={handleChange}
                            />
                            <input
                                name="PhotoCar"
                                className="form-control mb-3 mt-4"
                                type="file"
                                placeholder="Foto Automovil"
                                value={PhotoCar}
                                onChange={handleChange}
                                accept="image/*"
                            />
                            <input
                                name="PhotoUser"
                                className="form-control mb-3 mb-4 "
                                type="file"
                                placeholder="Foto Usuario"
                                value={PhotoUser}
                                onChange={handleChange}
                                accept="image/*"
                            />
                            <Option options={countriesData.countries} handleChange = {handleChange} title = {"Pais"} />
                            <Option options={["Administrador", "Cliente", "Reacción"]} handleChange = {handleChange} title = {"Ciudad"} />
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
