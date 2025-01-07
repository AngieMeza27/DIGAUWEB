const Option = ({ options, handleChange, title, value, valueName})=> {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button className="btn btn-outline-secondary me-5 w-80" type="button">{ title }</button>
            </div>
            <select className="custom-select secundary-color" id="inputGroupSelect03" name={valueName} value={value} onChange={handleChange}>
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