import { Link } from "react-router-dom"
import logo from "../../assets/images/logo 2.png"
import { Header1, Ul } from "./style.js"

export default function Header() {
    return (

    <Header1>
        <img src={logo} alt="logomarca" />
        <nav>
            <Ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/novidades">Novidades</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
            </Ul>
        </nav>
    </Header1>
    )
}