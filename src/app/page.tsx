import Image from "next/image";
import './globals.css'; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
      
      <div class="content">
      <h2>Titulo</h2>
        <div class="contentValor">
            <div className="propuestaValor">1 este es el primer modulo de propuesta de valor, aquí se hablará del principal beneficio de la aplicación</div>
            <div className="propuestaValor">2 este es el primer modulo de propuesta de valor, aquí se hablará del principal beneficio de la aplicación</div>
            <div className="propuestaValor">3 este es el primer modulo de propuesta de valor, aquí se hablará del principal beneficio de la aplicación</div>
        </div>
      </div>
      </div>
    </main>
  );
}
