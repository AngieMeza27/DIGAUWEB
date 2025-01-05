const Option = ({ options, handleChange, title, typeUser})=> {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend mr-4">
                <button className="btn btn-outline-secondary" type="button">{ title }</button>
            </div>
            <select className="custom-select" id="inputGroupSelect03" name="typeUser" value={typeUser} onChange={handleChange}>
                <option value="" disabled selected>
                    Seleccione una Opción
                </option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )

}


export default Option