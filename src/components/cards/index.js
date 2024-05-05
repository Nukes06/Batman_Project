import React from "react";
import './styles.css'
import { Link } from "react-router-dom";

function Cards() {
    function robertPattinson() {
        window.open('https://www.google.com/search?q=robert+pattionson&client=opera-gx&hs=XDk&sca_esv=252ba909ba40fffd&ei=b4T3ZevKBrDd5OUPhvy4oAQ&udm=&ved=0ahUKEwirvqGEwfyEAxWwLrkGHQY-DkQQ4dUDCBA&uact=5&oq=robert+pattionson&gs_lp=Egxnd3Mtd2l6LXNlcnAiEXJvYmVydCBwYXR0aW9uc29uMhAQLhiABBiKBRhDGLEDGIMBMg0QLhiABBiKBRhDGLEDMgoQABiABBiKBRhDMgcQABiABBgKMgcQABiABBgKMgcQABiABBgKMgcQLhiABBgKMgoQLhhDGIAEGIoFMgcQABiABBgKMgcQABiABBgKMh8QLhiABBiKBRhDGLEDGIMBGJcFGNwEGN4EGN8E2AEDSOEkUIIGWLkhcAJ4AZABAZgB-gGgAfYWqgEGMC4xOS4xuAEDyAEA-AEBmAIVoAKeF6gCE8ICExAAGIAEGIoFGEMY6gIYtALYAQHCAhMQLhiABBiKBRhDGOoCGLQC2AEBwgIgEC4YgAQYigUY5QIY5QIY6gIYtAIYigMYtwMY1APYAQHCAiAQABiABBiKBRjlAhjlAhjqAhi0AhiKAxi3AxjUA9gBAcICFhAAGAMYjwEY5QIY6gIYtAIYjAPYAQLCAhYQLhgDGI8BGOUCGOoCGLQCGIwD2AECwgIKEC4YgAQYigUYQ8ICCxAuGIAEGLEDGIMBwgIIEAAYgAQYsQPCAgsQABiABBixAxiDAcICCBAuGIAEGLEDwgIZEC4YgAQYigUYQxiXBRjcBBjeBBjfBNgBA8ICERAuGIAEGIoFGLEDGIMBGNQCwgILEC4YgwEYsQMYgATCAgUQABiABMICBRAuGIAEwgIaEC4YgwEYsQMYgAQYlwUY3AQY3gQY3wTYAQPCAgkQLhiABBgTGArCAgcQABiABBgTwgINEC4YgAQYExjHARivAcICCRAAGIAEGBMYCsICGBAuGIAEGBMYChiXBRjcBBjeBBjfBNgBA5gDDboGBAgBGAe6BgYIAhABGAq6BgYIAxABGBSSBwYyLjE4LjGgB7T-BA&sclient=gws-wiz-serp', 'blank'
    )}

    function zoeKravitz() {
        window.open('https://www.google.com/search?client=opera-gx&q=zoe+kravitz&sourceid=opera&ie=UTF-8&oe=UTF-8', )
    }

    function jeffreyWright() {
        window.open('https://www.google.com/search?gs_ssp=eJzj4tTP1TcwtYxPTzNg9OLLSk1LK0qtVCgvykzPKAEAby8I0g&client=opera-gx&q=jeffrey+wright&sourceid=opera&ie=UTF-8&oe=UTF-8', 'blank')
    }

    return(
        <div className="actor-cards-container">
            <div className="cards-content">
                <div className="card banner-1" onClick={() => robertPattinson()}>Robert Pattinson - Batman</div>
                <div className="card banner-2" onClick={() => zoeKravitz()}>Zoe Kravitz - Mulher Gato</div>
                <div className="card banner-3" onClick={() => jeffreyWright()}>Jeffrey Wright - Gordon</div>
            </div>
            
        </div>
    )
}

export default Cards