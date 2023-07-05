import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer id="contact">
          
                <ul className="contact">
                    <li><i className="fas fa-at"></i> email@gmail.com</li>
                    <li><i className="fas fa-phone"></i> 01 01 01 01 01</li>
                    <li><i className="fas fa-home"></i> 34000 Montpellier</li>
                </ul>

                <p>©️Copyright 2023 - Maera Studio. Tous droits réservés.</p>
     
                <ul className="links">
                    <Link to="/mentions-legales">Mentions légales</Link><br></br>
                    <Link to="/politique-de-confidentialite">Politique de confidentialité</Link>
                </ul>
         
               </footer>
    )
}

export default Footer