import { FaRegArrowAltCircleRight } from 'react-icons/fa';

const Propuestadevalor = () => {

    return (
       <div className=" bg-slate-50 ">
        <div class="content">
       
        <h2>Otapp es una aplicación web mobilé </h2>
        <h3>que permite crear y gestionar Ordenes de trabajo para cualquier tipo de empresa</h3>
        {/* <p>Estas son su principales funcionalidades</p> */}
           <div class="contentValor">
             <div className="propuestaValor">
             <FaRegArrowAltCircleRight style={{ marginRight: '10px', fontSize: '2rem', color:'#0DB3CF' }} />
               <h3>Formularios personalizados</h3>

               <p>2 este es el primer modulo de propuesta de valor, aquí se hablará del principal beneficio de la aplicación2 este es el primer modulo de propuesta de valor, aquí se hablará del principal beneficio de la aplicación</p>
             </div>

             <div className="propuestaValor">
             <FaRegArrowAltCircleRight style={{ marginRight: '10px', fontSize: '2rem', color:'#0DB3CF' }} />
               <h3>Reportes instantáneos</h3>

               <p>2 este es el primer modulo de propuesta de valor, aquí se hablará del principal beneficio de la aplicación2 este es el primer modulo de propuesta de valor, aquí se hablará del principal beneficio de la aplicación</p>
             </div>

             <div className="propuestaValor">
             <FaRegArrowAltCircleRight style={{ marginRight: '10px', fontSize: '2rem', color:'#0DB3CF' }} />
               <h3>Trazabilidad de la OT</h3>

               <p>2 este es el primer modulo de propuesta de valor, aquí se hablará del principal beneficio de la aplicación2 este es el primer modulo de propuesta de valor, aquí se hablará del principal beneficio de la aplicación</p>
             </div>
         </div>
         </div>
       </div>
            
          
     
      );
        
      };
      
      export default Propuestadevalor;