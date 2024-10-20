import Colaborador from '../Colaborador';
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = ({time, cor, nome, colaboradores, aoDeletar, mudarCor, aoFavoritar}) => {
    const corDeFundo = {backgroundColor: hexToRgba(cor, '0.4')}; 

    return(
        (colaboradores.length) > 0 && <section className='time' style={corDeFundo}> 
            <input type='color' className='input-cor' value={cor} onChange={evento => {
                mudarCor(evento.target.value, time.id);
            }} />
            <h3 style={{borderColor: cor}}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador => {
                    return (<Colaborador 
                        key={colaborador.nome} 
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        cor={cor}
                        imagem={colaborador.imagem} 
                        aoDeletar={aoDeletar} 
                        aoFavoritar={aoFavoritar}
                        colaborador={colaborador}
                    />)
                })}
            </div>
        </section>
    )
}

export default Time;

//Comentário sobre linha 9: se 0 "props.colaboradores.length > 0", ou seja, algum campo de time estiver vazio, esse campo não aparecerá