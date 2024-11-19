import copoLaranja from "../../assets/images/laranja G.png"
import copoVermelho from "../../assets/images/vermelho G.png"
import copoAmarelo from "../../assets/images/amarelo G.png"
import copoPlaranja from "../../assets/images/laranja P.png"
import copoPvermelho from "../../assets/images/vermelho P.png"
import copoPamarelo from "../../assets/images/amarelo P.png"
import {useState} from "react"


export default function Home(){
    let corVerde = "fundo-verde"
    let corVermelha = "fundo-vermelho"
    let corAmarela = "fundo-amarelo"

    const [corFundo, setCorFundo] = useState(corVerde);
    const [imagem, setImagem] = useState(copoLaranja);

    function clicarLaranja() {
            setCorFundo(corVerde)
            setImagem(copoLaranja)
    }

    function clicarVermelho() {
            setCorFundo(corVermelha)
            setImagem(copoVermelho)
            
        }

    function clicarAmarelo() {
            setCorFundo(corAmarela)
            setImagem(copoAmarelo)
            
        }
    return(
        <main>
            <h2>Mais que café isso é <span>STARBUCKS</span></h2>
            <p>
            A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.
            </p>
            <button>SAIBA MAIS</button>
            <section>
                <img src={copoPlaranja} onClick={clicarLaranja} alt="" />
                <img src={copoPvermelho} onClick={clicarVermelho} alt="" />
                <img src={copoPamarelo} onClick={clicarAmarelo} alt="" />
            </section>
            
        </main>
       
    )
}