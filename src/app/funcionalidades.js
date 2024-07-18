// src/app/funcionalidades.js
import Image from 'next/image';
import mockup from '../img/mockup-login.png'; 


const Funcionalidades = () => {
    return (
        <div class="content min-h-1000px" >
       
            <h2>Cómo funciona la App </h2>
            <h3>Genera reportes de forma instantánea.</h3>
            <p>Seguimiento de todo el ciclo de vida de una ot y ubicacion de tu personal en terreno.Seguimiento de todo el ciclo de vida de una ot y ubicacion de tu personal en terreno.</p>


            <div className="contFuncion">
                <div className="funcionalidades">
                        <div className="cajaContenido">
                            <h3>titulo</h3>
                            <p>Los parámetros registrados en una base de datos con acceso controlado por perfiles </p>
                        </div>
                        <div className="cajaContenido">
                            <h3>titulo</h3>
                            <p>Los parámetros registrados en una base de datos con acceso controlado por perfiles </p>
                        </div>
                        <div className="cajaContenido">
                            <h3>titulo</h3>
                            <p>Los parámetros registrados en una base de datos con acceso controlado por perfiles </p>
                        </div>
                </div>

                <div className="mockupLogo">
                    <div class="circle"></div>
                <Image src={mockup} alt="mockup  align-center" width={350} />
                
                </div>
            </div>



         </div>
    );
  };
  
  export default Funcionalidades;