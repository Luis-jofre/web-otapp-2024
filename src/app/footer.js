import './globals.css'; 
import Image from 'next/image';
import logo from '../img/logo.jpg'; 

const Footer = () => {

    return (
        <footer>
            <div className="footer">
                <div className="cont-footer">
                <div className="columnLarge">
                <div classNagoContainerme="logo-footer-container">
                    <Image src={logo} alt="Logo-footer"/>
                </div>
                </div>
                <div className="columnSmall">
                    <h2>Soporte</h2>
                    <ul>
                        <li>Preguntas frecuentes </li>
                        <li>Documentación </li>
                    </ul>
                </div>
                <div className="columnSmall">
                    <h2>Descarga en</h2>
                    <button>1</button>
                    <button>2</button>
                </div>
                </div>
            </div>
                 <div className="firm">Diseño by Propulsa</div>
      </footer>
         
     
      );
        
      };
      
      export default Footer;