// src/app/banner.js
const Banner = () => {
    return (
      <div className="banner">
        <div className="bannerContainer">
          <div className="bannerText">
            <h1>Gestiona tus ordenes de trabajo digitales</h1>
        
        <ul className="bannerlist">
          <li>Crea órdenes de trabajo</li>
          <li>Monitorea todo el ciclo de vida</li>
          <li>Comunícate con tu equipo en terreno</li>
          <li>Genera reportes para tus clientes.</li>
       </ul>  
       <div className="buttonContainer">
            <button className="button">Comenzar ahora</button>
            <button className="button-secondary">Ver Demo</button>
          </div>
       </div>
          <div className="bannerVideo">
            <video controls>
              <source src="/path-to-your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div> 
    );
  };
  
  export default Banner;