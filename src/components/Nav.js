import { Link } from "react-router-dom"
import Logo from "./Logo"


function Nav() {
    return (
        <nav className="nav">
            <Logo />
            <ul>
                <li className="link"><Link to="#services" reloadDocument>Services</Link></li>
                <li className="link"><Link to="#avantages" reloadDocument>Avantages</Link></li>
                <li className="link"><Link to="#deroulement" reloadDocument>Déroulement</Link></li>
                <li className="link"><Link to="#realisations" reloadDocument>Réalisations</Link></li>
                <li className="link"><Link to="#contact" reloadDocument>Contact</Link></li>
                <li><Link to="#devis" className="button" reloadDocument>Obtenir un devis</Link></li>
            </ul>
        </nav>
    )
}

export default Nav