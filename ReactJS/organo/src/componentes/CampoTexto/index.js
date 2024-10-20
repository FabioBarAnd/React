import './CampoTexto.css'

const CampoTexto = (props) => { //props vem de propriedade
    //const placeholderModificado = `${props.placeholder} blablabla`; //concatenar texto dentro do props

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto;