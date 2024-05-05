import React from "react";
import './styles.css'
import Instagram from '../../assets/Instagram_icon.png.webp'
import Facebook from '../../assets/download.png'
import Youtube from '../../assets/images.png'
import Twitter from '../../assets/twitter3.png'
import Logo from '../../assets/logobatman2.jpg'
    function Footer() {
        return(
            <div id="footer-container">
                <div className="footer-content">
             
            <div id="social-media-container">
            <img className='logo-footer' src={Logo} /> 
                <p className="title"> Redes sociais</p>
                 <div id="social-media">
                 <img className="instagram" src={Instagram} /> 
                 <img className="facebook" src={Facebook} /> 
                 <img className="youtube" src={Youtube} /> 
                 <img className="twitter" src={Twitter} /> 
                 </div>
             </div>
             <p className="author-name">
                Todos os direitos reservados ©</p>
             <p className="author-name">  Desenvolvido por: Nícolas Triunfo </p>
                </div>
           </div>
            )
    }

export default Footer