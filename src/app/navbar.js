// src/app/navbar.js
import Link from 'next/link';
import Image from 'next/image';
import logo from '../img/logo.jpg'; 
import './globals.css'; 
import { GiWhiteBook } from 'react-icons/gi';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logoYnav">
        <div className="logoContainer">
          <Image src={logo} alt="Logo" width={50} height={50} />
        </div>
        <div className="navLinks">
          <Link href="/" className="navLink">Inicio</Link>
          <Link href="/funcionalidades" className="navLink">Funcionalidades</Link>
          <Link href="/sobre-otapp" className="navLink">Sobre OTApp</Link>
        </div>
      </div>
      <div className="buttonContainer">
        <Link href="/demo">
          <button className="demoButton">Agenda una demo</button>
        </Link>
        <Link href="/login">
             <div class="navLink">Login</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;