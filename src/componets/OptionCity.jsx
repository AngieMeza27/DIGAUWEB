const OptionCity = ({ options, handleChange, title, valueSearch, value, valueName})=> {
    console.log("Valor busqueda: ",valueSearch);
    
    const filteredOptions = options.find(
        (item) => item.departamento === valueSearch
    )?.ciudades || []; 
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button className="btn btn-outline-secondary me-5 w-80" type="button">{ title }</button>
            </div>
            <select className="custom-select secundary-color" id="inputGroupSelect03" name={valueName} value={value} onChange={handleChange}>
                <option value="" disabled selected>
                    Seleccione una Opción
                </option>
                {filteredOptions.map((city, index) => (
                    <option key={index} value={city}>
                        {city}
                    </option>
                ))}
            </select>
        </div>
    )

}
export default OptionCity