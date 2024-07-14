import './globals.css'; 
import Image from 'next/image';
import FirmPropulsa from '../img/firm-propulsa.webp'; 
import logoOtappBlanco from '../img/logo-otapp-blanco.svg';
import { FaApple, FaGooglePlay, FaWhatsapp, FaLinkedinIn, FaInstagram, FaFacebook } from 'react-icons/fa'; 

const Footer = () => {

    return (
        <footer>
            <div className="footer">
                <div className="cont-footer">
                <div className="columnLarge">
                <div classNago="logo-footer-container">
                    <Image src={logoOtappBlanco}  className="Logo-footer" alt="Logo-footer"/>
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
                    <h2>Síguenos</h2>
                    <div className="social">
                            <a href='https://api.whatsapp.com/send/?phone=56938825343&text=%C2%A1Hola%21&type=phone_number&app_absent=0'>
                            <FaWhatsapp style={{ marginRight: '10px', fontSize: '1.5rem' }} />
                            </a>
                            <a href='https://www.linkedin.com/company/81847489/admin/dashboard/'>
                            <FaLinkedinIn style={{ marginRight: '10px', fontSize: '1.5rem' }} />
                            </a>
                            <a href='https://www.instagram.com/otapp.cl/'>
                            <FaInstagram style={{ marginRight: '10px', fontSize: '1.5rem' }} />
                            </a>
                            <a href='#'>
                            <FaFacebook style={{ marginRight: '10px', fontSize: '1.5rem' }} />
                            </a>
                      
                    </div>
                </div>

                <div className="columnSmall">
                    <h2>Descarga en</h2>
                    <a href='https://apps.apple.com/us/app/otapp/id6445826287'>
                        <button> 
                            <FaApple style={{ marginRight: '10px', fontSize: '2rem' }} />
                            <div class="text-button">
                            <h4>Descargala en</h4> 
                            <h3>App Store</h3>
                            </div>
                        </button>
                    </a>

                    <a href='https://play.google.com/apps/internaltest/4701154468789251585'>
                    <button>
                    <FaGooglePlay style={{ marginRight: '10px', fontSize: '2rem' }} />
                        <div class="text-button">
                        <h4>Descargala en</h4> 
                        <h3>Google Play</h3>
                        </div>
                    </button>
                    </a>
                </div>
            </div>
        </div>
                 <div className="firm">Diseño by Propulsa   <Image src={FirmPropulsa} /></div>
      </footer>
         
     
      );
        
      };
      
      export default Footer;