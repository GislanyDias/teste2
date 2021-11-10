import logo from '../../images/logo-ori.png';
import Footer from "../../components/Footer";
import {Link} from "react-router-dom";
import ico from "../../images/ico-user.png";

const Saque = () =>{
    return(
        <> 
            <div className="cabecalho"></div>
            <div className ="line-vertical"></div>
            <img src={logo} className="logo-home2"/>
    
            <section>
                <h1>SAQUE</h1>
                <p>PARA REALIZAR UM SAQUE, DIGITE O VALOR QUE DESEJA RETIRAR E A SUA SENHA. </p>
                
                <div className="div-info-usu">
                    <h5>VALOR</h5>
                    <input type="number"></input>
                </div>

                <div className="div-info-usu">
                    <h5>SENHA</h5>
                    <input type ="password"></input>
                </div>

                <ul className = "div-actions">
                    <li> <Link to ="/Usuario"> <button type="button ">VOLTAR</button> </Link> </li>
                    <li> <button type = "button"> REALIZAR SAQUE</button> </li>
                </ul>

            </section>

            <aside>
                <img src={ico} className="ico-user"></img>
                <Link to="/MudarSenha"><button type = "button">Mudar senha</button></Link>
                <Link to ="/ExcluirConta"><button type = "button">Excluir conta</button></Link>
                <button type = "button">Sair</button>
                
            </aside>
            <br className="br-section"></br>

            <Footer />
        
        </>

    );
};

export default Saque;