import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Option from './Option';
import OptionCity from './OptionCity';
import countriesData from "./utils/countries/Countries.json";
import Deparments from "./utils/countries/Departmets.json"
import Citys from "./utils/countries/Citys.json"
import SectionalList from "./utils/sectionals.json"
import OptionSectional from './OptionSectional';
import AxiosClient from './AxiosClient/AxiosClient';


const Register = () => {
    const userLogin= "Administrador"
    //state de registro
    const [registrarU, setregistrar] = useState({
        identification: "",
        name: "",
        email: "",
        lastName: "",
        cellPhone: "",
        department: "",
        sectional: "",
        nationality: "",
        city: "",
        adress: "",
        typeUser: "",
        post: "",
        workdirection: "",
        datebirth: "",
        PhotoCar: "",
        PhotoUser: "",
        PhotoResident: ""
    });
    const [usersType, setUsersType] = useState([]);
    useEffect(() => {
        setOption();
      }, []);

      const setOption = () => {
        if (userLogin === "Administrador") {
          setUsersType(["Cliente", "Seccional"]);
        } else {
          setUsersType(["Cliente"]);
        }
      };
    const { city, nationality, sectional, name, identification, email, cellPhone, adress, lastName, typeUser, post, workdirection, datebirth, PhotoCar, PhotoUser, department, PhotoResident } = registrarU;

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
            lastName: "",
            email: "",
            cellPhone: "",
            adress: ""
        });
    }

    const register_user = async () => {
        try {
            const {data} = await AxiosClient.post('/register',registrarU);
            console.log(data);
            Swal.fire({
                icon: 'success',
                text: 'Usuario Registrado con exitoso',
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
                        <h2 className="title text-color fw-bold">Registrarse</h2>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmitForm}
                >
                    <div className="row justify-content-center ">
                        <div className="col-md-7 m-4">
                            <Option options={usersType} handleChange={handleChange} title={"Usuario"} value={typeUser} valueName={"typeUser"} />
                            <input
                                name="identification"
                                className="form-control mb-3 secundary-color "
                                type="Text"
                                placeholder="Identificacion"
                                value={identification}
                                onChange={handleChange}
                            />
                            {
                                typeUser === "Cliente" ? (
                                    <>
                                        <input
                                            name="name"
                                            className="form-control mt-4 secundary-color "
                                            type="text"
                                            placeholder="Nombre"
                                            value={name}
                                            onChange={handleChange}
                                        />
                                        <input
                                            name="lastName"
                                            className="form-control mt-4 secundary-color"
                                            type="text"
                                            placeholder="Apellido"
                                            value={lastName}
                                            onChange={handleChange}
                                        />
                                        <input
                                            name="email"
                                            className="form-control mt-4 secundary-color"
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={handleChange}
                                        />
                                        <input
                                            name="adress"
                                            className="form-control mt-4 secundary-color"
                                            type="text"
                                            placeholder="Direccion Residencial"
                                            value={adress}
                                            onChange={handleChange}
                                        />
                                        <input
                                            name="workdirection"
                                            className="form-control mt-4 secundary-color"
                                            type="text"
                                            placeholder="Direccion Laboral"
                                            value={workdirection}
                                            onChange={handleChange}
                                        />
                                        <input
                                            name="cellPhone"
                                            className="form-control mt-4 secundary-color"
                                            type="number"
                                            placeholder="Telefono"
                                            value={cellPhone}
                                            onChange={handleChange}
                                        />
                                        <input
                                            name="datebirth"
                                            className="form-control mb-3 mt-4 secundary-color"
                                            type="date"
                                            placeholder="Fecha de Nacimiento"
                                            value={datebirth}
                                            onChange={handleChange}
                                        />
                                        <input
                                            name="PhotoResident"
                                            className="form-control mb-3 mt-4 secundary-color"
                                            type="file"
                                            placeholder="Foto Residencial"
                                            value={PhotoResident}
                                            onChange={handleChange}
                                            accept="image/*"
                                        />
                                        <input
                                            name="PhotoCar"
                                            className="form-control mb-3 mt-4 secundary-color"
                                            type="file"
                                            placeholder="Foto Automovil"
                                            value={PhotoCar}
                                            onChange={handleChange}
                                            accept="image/*"
                                        />
                                        <input
                                            name="PhotoUser"
                                            className="form-control mb-3 mb-4 secundary-color"
                                            type="file"
                                            placeholder="Foto Usuario"
                                            value={PhotoUser}
                                            onChange={handleChange}
                                            accept="image/*"
                                        />
                                        <Option options={countriesData.countries} handleChange={handleChange} title="Nacionalidad" valueName="nationality" value={nationality} />
                                        <Option options={Deparments.departments} handleChange={handleChange} title="Departamento" valueName="department" value={department} />
                                        {department !== "" ? <OptionCity options={Citys} handleChange={handleChange} title="City" valueSearch={department} value={city} valueName="city" /> : null}
                                    </>
                                ) : typeUser === "Seccional" ? (
                                    <>
                                        <input
                                            name="name"
                                            className="form-control mt-4 secundary-color "
                                            type="text"
                                            placeholder="Nombre"
                                            value={name}
                                            onChange={handleChange}
                                        />
                                        <input
                                            name="lastName"
                                            className="form-control mt-4 secundary-color"
                                            type="text"
                                            placeholder="Apellido"
                                            value={lastName}
                                            onChange={handleChange}
                                        />
                                        <input
                                            name="email"
                                            className="form-control mt-4 secundary-color"
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={handleChange}
                                        />
                                        <input
                                            name="post"
                                            className="form-control mt-4 secundary-color"
                                            type="text"
                                            placeholder="Cargo"
                                            value={post}
                                            onChange={handleChange}
                                        />
                                        <input
                                            name="cellPhone"
                                            className="form-control mt-4 secundary-color mb-4"
                                            type="number"
                                            placeholder="Telefono"
                                            value={cellPhone}
                                            onChange={handleChange}
                                        />
                                        <Option options={Deparments.departments} handleChange={handleChange} title="Departamento" valueName="department" value={department} />
                                        {department !== "" ? <OptionCity options={Citys} handleChange={handleChange} title="City" valueSearch={department} value={city} valueName="city" /> : null}
                                        <OptionSectional options={SectionalList} handleChange={handleChange} title="Seccionales" valueName="department" value={department} />
                                    </>
                                ) : (
                                    null
                                )
                            }
                        </div>
                        <div className="col-md-7 clearfix">
                            <button
                                type="submit"
                                className="btn color-red text-white btn-lg btn-block  "
                            >
                                Registrar
                            </button>
                            <Link to="/" className=" m-lg-5 btn btn-success btn-lg btn-block ">Volver</Link>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
