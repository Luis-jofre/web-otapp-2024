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
            <iframe 
              width="560" height="315" 
              src="https://www.youtube.com/embed/Xsc360OeQVA?si=Ce1jTzFEbBsLIsgA" 
              title="YouTube video player" frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
          </div>
        </div>
      </div> 
    );
  };
  
  export default Banner;