import copoLaranja from "../../assets/images/laranja G.png"
import copoVermelho from "../../assets/images/vermelho G.png"
import copoAmarelo from "../../assets/images/amarelo G.png"
import copoPlaranja from "../../assets/images/laranja P.png"
import copoPvermelho from "../../assets/images/vermelho P.png"
import copoPamarelo from "../../assets/images/amarelo P.png"
import Fundoverde from "../../assets/images/Ellipse verde.png"
import Fundoamarelo from "../../assets/images/Ellipse amarela.png"
import Fundovermelho from "../../assets/images/Ellipse vermelha.png"
import {useState} from "react"
import {Mainstyle} from "./style.js"

    export default function Home(){
       const [copoGrande, setCopoGrande] = useState(copoLaranja);
       const [fundo, setFundo] = useState(Fundoverde);

       const modificarStyle = (cor, imagem) => {
        setCopoGrande(cor);
        setFundo(imagem);
      };
    
    return(
        <Mainstyle>
            <section>
            <h2>Mais que café</h2> 
            <h2>
                isso é <span>STARBUCKS</span>
            </h2>
            <p>
            A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.
            </p>
            <button>SAIBA MAIS</button>
            <div>
                <img src={copoPlaranja}  alt="copo Laranja pequeno"  onClick={() => modificarStyle(copoLaranja,Fundoverde)} />
                <img src={copoPvermelho}  alt="copo vermelho pequeno" onClick={() => modificarStyle(copoVermelho, Fundovermelho)}/>
                <img src={copoPamarelo}  alt="copo amarelo pequeno" onClick={() => modificarStyle(copoAmarelo, Fundoamarelo)}/>
            </div>
            </section>
            <section>
                <img src={copoGrande} alt="copo laranja grande" />
                <img src={fundo} alt="" />
            </section>
        </Mainstyle>
       
    );
}