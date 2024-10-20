import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) => {
    const corDeFundo = {backgroundColor: props.corSecundaria}; 
    return(
        (props.colaboradores.length) > 0 && <section className='time' style={corDeFundo}> 
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )
}

export default Time;

//Comentário sobre linha 7: se 0 "props.colaboradores.length > 0", ou seja, algum campo de time estiver vazio, esse campo não aparecerá