import React, { useRef } from 'react';
import './styles.css'
import { Link } from "react-router-dom";
import Logo from '../../assets/logobatman2.jpg'




function Header({}){




    return (
        <header>    
                  
                <ul className='header-list'> 
                <img className='logo-header' src={Logo} /> 
                <Link to={'/'}>
                    <li>Home</li>
                </Link>
                <Link to={'/contato'}>
                    <li>Contato</li>
                </Link>
                  <Link to='/fotos'>
                    <li>Fotos</li>
                 </Link>
                  <Link to='/comentarios'>
                    <li>Comentários</li>
                 </Link>
                </ul>
        </header>
    )
}




export default Header