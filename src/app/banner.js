// src/app/banner.js
"use client";
import React, { useEffect, useState } from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa'; 
import './globals.css';

const Banner = () => {
  const texts = [
    'Crea órdenes de trabajo personalizadas',
    'Monitorea todo el ciclo de vida de tu OT',
    'Comunícate con tu equipo en terreno',
    'Genera reportes para tus clientes.'
  ];

  const [currentText, setCurrentText] = useState(texts[0]);
  const [fadeClass, setFadeClass] = useState('fade-in');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass('fade-out'); // Inicia el fade out

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setCurrentText(texts[(currentIndex + 1) % texts.length]);
        setFadeClass('fade-in'); // Inicia el fade in
      }, 1000); // Tiempo para el fade out
    }, 4000); // Intervalo entre cambios de texto

    return () => clearInterval(interval);
  }, [currentIndex, texts]);

    return (
      <div className="banner">
        <div className="bannerContainer">
          <div className="bannerText">
            <h1>Crea ordenes de trabajo digitales</h1>
        
            <ul className="bannerlist">
            <li className={`bannerTextDisplay ${fadeClass}`}>
              {currentText}
            </li>
          </ul>
           <div className="buttonContainer">
                <button className="button">Comenzar ahora</button>
                <button className="button-secondary">Ver Demo</button>
              </div>
          </div>
            <div className="bannerVideo">
              <iframe 
                width="100%" height="100%" 
                src="https://www.youtube.com/embed/Xsc360OeQVA?si=Ce1jTzFEbBsLIsgA" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
              </iframe>
                <div className="downloadsApp">
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
      </div> 
    );
  };

  export default Banner;