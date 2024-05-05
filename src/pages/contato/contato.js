import React, { useState } from "react";
import './styles.css'
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Email from "../../assets/png-transparent-icon-email-email-miscellaneous-angle-text.png";
import Tel from "../../assets/telephone.png"
import Insta from "../../assets/insta.contato.png"
import Face from "../../assets/face.contato.png"



function Contato() {
   
   
    return(
        <>
        <Header/>
        <h1 className="title-contact">Contato</h1>
        <div className="box1-contato">
            <div className="box2-contato">
                <div className="forms">
                    <form action="/enviar" method="post">
                    <label for="nome"></label>
                    <input type="text" id='nome' name="nome" placeholder="Nome Completo" required/>

                    <label for="email"></label>
                    <input type="email" id="email" name="email" placeholder="Email" required/>

                    <label for="number"></label>
                    <input type="tel" id="telefone" name="telefone" placeholder="Telefone" required/>

                    <label for="textarea"></label>
                    <textarea  id="textarea" name="textarea" placeholder="Digite sua mensagem" required/>
                    

                    <button type="submit" value="Enviar" className="button button-contato">Enviar</button>
                    </form> 
                    <div className="contato-box">
                    <h1>Fale comigo</h1>
                    <h2>Email:</h2>
                    <h3><img className="email-logo" src={Email}/>batman@batman.com</h3>

                    <h2>Telefone:</h2>
                    <h3><img className="tel-logo" src={Tel}/>0800 123 4567</h3>

                    <h2>Redes Sociais:</h2>
                    <h3><img className="insta-logo" src={Insta}/>Instagram</h3>
                    <h3><img className="face-logo" src={Face}/>Facebook</h3>
                </div>
                </div>
                
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Contato