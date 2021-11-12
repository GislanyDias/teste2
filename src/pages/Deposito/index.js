import logo from '../../images/logo-ori.png';
import Footer from "../../components/Footer";
import {Link, useHistory} from "react-router-dom";
import ico from "../../images/ico-user.png";


const Deposito = () => {



    const onSubmit = async(e) => {
        e.preventDefault();
        const Cliente ={
            deposito: e.target.elements.valorDep.value,
    
        }
    }
        

    return(
        <>
            <div className="cabecalho"></div>
            <div className ="line-vertical"></div>
            <img src={logo} className="logo-home2"/>

            <form onSubmit={onSubmit}>
                <section>
                    <h1>DEPÓSITO</h1>
                    <p>PARA REALIZAR UM DEPÓSITO, DIGITE O VALOR QUE DESEJA DEPOSITAR. </p>
                    
                    <div className="div-info-usu">
                        <h5>VALOR</h5>
                        <input type="number" name="valorDep" required></input>
                    </div>

                    <ul className = "div-actions">
                        <li> <Link to ="/Usuario"> <button type="button ">VOLTAR</button> </Link> </li>
                        <li> <button type="submit"> REALIZAR DEPÓSITO</button> </li>
                    </ul>
                </section>
            </form>

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

export default Deposito;