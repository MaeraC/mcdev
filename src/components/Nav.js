import { Link } from "react-router-dom"
import Logo from "./Logo"
import closeBurger from "../assets/close.png"
import { useState, useEffect } from "react"

function Nav() {
    const [showMenu, setShowMenu] = useState(true)
    const [showMenuBurger , setMenuBurger] = useState(false)

    function openMenuBurger() {
        setMenuBurger(true)
    }

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth <= 1080) {
            setShowMenu(false)
        } 
    }

    window.addEventListener("resize", handleResize)
    handleResize()
 
    return () => {
      window.removeEventListener("resize", handleResize)
    }
    }, [])

    return (
        <nav className="nav">
            <Logo />
            <ul>
                {showMenu && (
                    <>
                    <li className="link"><Link to="/#services" reloadDocument>Services</Link></li>
                    <li className="link"><Link to="/#avantages" reloadDocument>Avantages</Link></li>
                    <li className="link"><Link to="/#deroulement" reloadDocument>Déroulement</Link></li>
                    <li className="link"><Link to="/#realisations" reloadDocument>Réalisations</Link></li>
                    
                    <li className="link"><Link to="/#contact" reloadDocument>Contact</Link></li>
                    <li className="link"><Link to="/a-propos">À propos</Link></li>
                    </>
                )}
                <li><Link to="/#devis" className="button" reloadDocument>Obtenir un devis</Link></li>
                
                {!showMenu && (
                    <button className='open-burger button' onClick={openMenuBurger}>Menu</button>
                )}

                {showMenuBurger && (
                    <li className="menu2">
                        <li className="link"><Link to="/#services" reloadDocument>Services</Link></li>
                        <li className="link"><Link to="/#avantages" reloadDocument>Avantages</Link></li>
                        <li className="link"><Link to="/#deroulement" reloadDocument>Déroulement</Link></li>
                        <li className="link"><Link to="/#realisations" reloadDocument>Réalisations</Link></li>
                        <li className="link"><Link to="/#contact" reloadDocument>Contact</Link></li>
                        <li className="link"><Link to="/a-propos">À propos de moi</Link></li>
                        
                        <img className="close-menu" onClick={() => setMenuBurger(false)} src={closeBurger} alt="fermer le menu" />
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Nav