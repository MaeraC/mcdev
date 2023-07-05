import { Link } from 'react-router-dom'

function Devis() {
    return(
        <section className="devis">
            <div>
                <p>Besoin d'un site web professionnel sur mesure ?<br></br> Obtenez dès maintenant un devis personnalisé pour concrétiser votre projet en ligne !</p>
                <Link to="#devis" className="button" reloadDocument>Obtenir un devis</Link>
            </div>
        </section>
    )
}

export default Devis