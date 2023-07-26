import { Link } from "react-router-dom"

function Landingpage() {

    return (
        <section className='landing-page'>
            <div className='text'>
                <h1 className="title">Création de sites web</h1>
                <h2 className="title2">Conception graphique - Développement - Référencement</h2>
                <h3 className="title3">Votre site web sur mesure conçu avec passion et expertise.</h3>
                <Link to="https://calendly.com/mc-studio-dev/discutons-de-votre-projet-web" target="_blank" className="button" >Prendre rendez-vous</Link>
            </div>
        </section>
    )
}

export default Landingpage