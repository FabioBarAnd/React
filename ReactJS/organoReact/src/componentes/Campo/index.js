import './Campo.css'

const Campo = ({type = 'text', obrigatorio, label, placeholder, valor, aoAlterado}) => { //props vem de propriedade
    //const placeholderModificado = `${props.placeholder} blablabla`; //concatenar texto dentro do props

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value);
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input 
                type={type} 
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholder}
            />
        </div>
    )
}

export default Campo;