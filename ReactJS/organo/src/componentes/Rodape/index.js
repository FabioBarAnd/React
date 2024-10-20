import './Rodape.css'

const Rodape = () => {
    return(
        <footer className='footer'>
            <div className='redesSociais'>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="./imagens/fb.png" alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src="./imagens/tw.png" alt="Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src="./imagens/ig.png" alt="Instagram" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className='logo'>
                <img src='./imagens/logo.png' alt='Logo Organo' />
            </div>
            <div className='texto'>
                <p>Desenvolvido por Fabio & Alura</p>
            </div>
        </footer>
    )
}

export default Rodape;