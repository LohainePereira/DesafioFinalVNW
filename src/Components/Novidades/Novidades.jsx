import grao from "../../assets/images/Café colorido.png"
import { Section, Div, Div2, Button} from "./style.js"



export default function Novidades(){
    return(
        <Section>
            <Div2>
        <h3>PREPARAÇÃO</h3>
            <h2>Níveis de torra</h2>
            <p>
            Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou
            Torra Escura? Estas sãos as torras que fazem parte dos níveis de
            torra Starbucks®
            </p>
            <Button>SAIBA MAIS</Button>
            </Div2>
        <Div>  
            <img src={ grao } alt="" />
        </Div>
        </Section>
    );
}
    