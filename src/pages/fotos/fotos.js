import React from "react";
import './styles.css'
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Background from "../../assets/batman.background.jpg"
import Photo1 from "../../assets/photos1.jpg"
import Photo2 from "../../assets/photos2.jpg"
import Photo3 from "../../assets/photos3.jpg"
import Photo4 from "../../assets/photos4.jpg"
import Photo5 from "../../assets/photos5.jpg"
import Photo6 from "../../assets/photos6.jpg"

function Fotos() {

    return(
        <>
        <Header />
        <div className="title-box">
        <h1 className="title-fotos">Fotos</h1>
        </div>

        <div className="box1">
            <div className="box2">
                <div className="fotos-box">
               <div className="fotos foto-1"></div>
               <div className="fotos foto-2"></div>
               <div className="fotos foto-3"></div>
               <div className="fotos foto-4"></div>
               <div className="fotos foto-5"></div>
               <div className="fotos foto-6"></div>
                </div>
            </div>
        </div>
       
       

        <Footer />
        </>
    )
}

export default Fotos