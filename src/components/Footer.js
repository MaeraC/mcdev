import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer id="contact">
          
                <ul className="contact">
                    <li><Link to="mailto:dev.mc.studio@gmail.com"><i className="fas fa-at"></i>dev.mc.studio@gmail.com</Link></li>
                    <li><i className="fas fa-phone"></i>07 58 06 63 98</li>
                    <li><i className="fas fa-home"></i>34000 Montpellier</li>
                </ul>

                <p>©️Copyright 2023 - MC Studio. Tous droits réservés.</p>
     
                <ul className="links">
                    <Link to="/mentions-legales">Mentions légales</Link><br></br>
                    <Link to="/politique-de-confidentialite">Politique de confidentialité</Link>
                </ul>
         
               </footer>
    )
}

export default Footer