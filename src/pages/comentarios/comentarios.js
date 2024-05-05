import React from "react";
import './styles.css'
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer"
import User from "../../assets/user.png"
import Rate from "../../assets/user-rate.png"
function Comentarios() {
 

    return(
        <>
        <Header/>
        <h1 className="title-contact">Comentários</h1>
        <div className="box1-comentarios">
            <div className="box2-comentarios">
                <div className="coment-box">
                    <div className="coment">
                        <div className="coment-header">
                        <div className="coment-user"><img className="comentarios-logo" src={User}/>user_2006</div>
                        <div className="coment-rate"><img className="comentarios-logo" src={Rate}/>
                        <img className="comentarios-logo" src={Rate}/>
                        <img className="comentarios-logo" src={Rate}/>
                        <img className="comentarios-logo" src={Rate}/>
                        <img className="comentarios-logo" src={Rate}/></div>
                        </div>
                        
                        <div className="coment-text">Um dos melhores filmes de super-herói que eu 
                        já assisti, na minha opinião tudo estava incrível nele. A fotografia e 
                        trilha sonora foram impecáveis, conseguiram trazer uma música antiga do 
                        "Nirvana" e encaixou perfeitamente, perdi o número de vezes que do nada 
                        comecei a cantar "something in the way hmmmmm". O roteiro não tem nada de 
                        muito novo, mas todo esse mistério acaba te entretendo até o fim. 
                        Além disso souberam interpretar perfeitamente Gotham com todo esse tema 
                        da escuridão, que achei simplesmente perfeito.</div>
                    </div>


                    <div className="coment">
                        <div className="coment-header">

                    <div className="coment-user"><img className="comentarios-logo" src={User}/>user_2006</div>
                        <div className="coment-rate">
                        <img className="comentarios-logo" src={Rate}/>
                        <img className="comentarios-logo" src={Rate}/>
                        </div>
                    </div>
                        <div className="coment-text">Achei um bom filme policial, porém não acho 
                        que seja um filme digno do Batman e tampouco de super-herói.. Primeiro por
                         um Batman bem depressivo (O morcego ficar de cabeça baixa achando que 
                         tinha sido descoberto ? Como se tivesse levado bronca ?! Wtf), porém da 
                         a entender que nesse filme o Batman já existe há um bom tempo, o que na 
                         história do morcego essa parte de dúvida já teria ficado pra trás. 
                         Valoriza o lado detetive do Morcego e isso é muito bom, porém achei um 
                         Batman meio "burro" pois não sabia um básico de espanhol 
                         (Bruce Wayne é fluente em alguns idiomas e dentre eles o espanhol).</div>
                        </div>


                    <div className="coment">
                    <div className="coment-header">

                    <div className="coment-user"><img className="comentarios-logo" src={User}/>user_2006</div>
                        <div className="coment-rate">
                        <img className="comentarios-logo" src={Rate}/>
                        <img className="comentarios-logo" src={Rate}/>
                        <img className="comentarios-logo" src={Rate}/>
                        </div>
                        
                    </div>
                        <div className="coment-text">Bom filme, cenas marcantes como as dos passos
                         do Batman. O roteiro não supera o Cavaleiro das trevas, na verdade, não 
                         supera nem o Begins. Filme começa com uma proposta de um Batman ainda mais
                          realista e humano comparado ao do Nolan e acaba se perdendo no decorrer 
                          da trama. A cena de perseguição ao pinguim é simplesmente desnecessária, 
                          e a prisão do charada... Sem sentido.</div>
                    </div>


                    <div className="coment">
                    <div className="coment-header">

                    <div className="coment-user"><img className="comentarios-logo" src={User}/>user_2006</div>
                        <div className="coment-rate">
                        <img className="comentarios-logo" src={Rate}/>
                        <img className="comentarios-logo" src={Rate}/>
                        <img className="comentarios-logo" src={Rate}/>
                        <img className="comentarios-logo" src={Rate}/>
                        <img className="comentarios-logo" src={Rate}/>
                        </div>
                    </div>
                        <div className="coment-text">De longe o filme mais técnico da DC até agora.
                         Fotografia e música impecáveis. O roteiro não é muito inovador mas tem um 
                         enredo misterioso e cativante. O filme tem a mesma vibe até o final, 
                         gostei do fato do Batman estar com o traje 99% do filme, 
                         as cenas vão de 0 a 100 muito rápido, 
                         quando você vê tem música, tiros, luzes, explosões... 
                         tudo ao mesmo tempo. As cenas de luta são muito boas.</div>
                    </div>


                    <div className="coment">
                        <div className="coment-header">

                    <div className="coment-user"><img className="comentarios-logo" src={User}/>user_2006</div>
                        <div className="coment-rate">
                        <img className="comentarios-logo" src={Rate}/>
                        <img className="comentarios-logo" src={Rate}/>
                        <img className="comentarios-logo" src={Rate}/>
                        <img className="comentarios-logo" src={Rate}/>
                        <img className="comentarios-logo" src={Rate}/>
                        </div>
                        </div>
                        <div className="coment-text">Em outubro de 1989, aos 14 anos, no extinto 
                        Baltimore em Porto Alegre, tive minha primeira experiência cinematográfica 
                        com um certo justiceiro mascarado que costumava se vestir de morcego e sair
                         à noite para assustar e combater criminosos. O filme era dirigido por 
                         Tim Burton e protagonizado por um jovem Michael Keaton, que convencia no 
                         papel de Bruce Wayne mas mal conseguia demonstrar falas, expressões ou 
                         olhares ao vestir uma pesada roupa de borracha.</div>
                    </div>


                    <div className="coment">
                        <div className="coment-header">

                    <div className="coment-user"><img className="comentarios-logo" src={User}/>user_2006</div>
                        <div className="coment-rate">
                        <img className="comentarios-logo" src={Rate}/>
                        </div>
                        </div>
                        <div className="coment-text">O pior filme do Batman. Assisti meia hora do 
                        filme e já fui para o meio pra ver se despertava algum interesse... 
                        Ridículo o que fizeram com o Batman. Quem é fã, está acostumado a ver o 
                        Batman sendo temido pelos vilões. Nesse filme parece uma criança mimada, 
                        depressiva, sem expressão e totalmente apagado pelo seu ego.</div>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
        </>
    )
}

export default Comentarios