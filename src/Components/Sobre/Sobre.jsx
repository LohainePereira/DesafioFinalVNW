import loja from "../../assets/images/loja.png"
import { Section, Div, Button } from "./style.js"

export default function Sobre(){
    return (
        <Section>
        <img src={loja} alt="" />
       
        <Div>
            <h3>PREPARAÇÃO</h3>
            <h2>Níveis de torra</h2>
            <p>
            Qual a torra que você prefere? Aqui no Starbucks® possuimos Torra Clara, Torra Média ou
            Torra Escura? Estas sãos as torras que fazem parte dos níveis de
            torra Starbucks®
            </p>
            <Button on Click={() => alert("Mais informações em breve!")}>SAIBA MAIS</Button>
        </Div>
        </Section>
    );
}