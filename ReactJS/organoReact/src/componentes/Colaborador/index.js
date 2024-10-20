import { IoIosCloseCircle } from "react-icons/io";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import './Colaborador.css'

const Colaborador = ({colaborador, nome, cargo, imagem, cor, aoDeletar, aoFavoritar}) => {
    function favoritar() {
        aoFavoritar(colaborador.id);
    }

    return(
        <div className='colaborador'>
            <IoIosCloseCircle 
                size={25} 
                className='deletar' 
                onClick={() => aoDeletar(colaborador.id)}
            />
            <div className='cabecalho' style={{backgroundColor: cor}}>
                <img src={imagem} alt={nome}/>  
            </div>
            <div className='rodape'>
                <h4 style={{color: cor}}>{nome} </h4>
                <h5>{cargo}</h5>
                <div className="favoritar">
                    {colaborador.favorito 
                        ? <FaHeart size={25} onClick={favoritar} color='#ff0000'/> 
                        : <FaRegHeart size={25} onClick={favoritar}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Colaborador;