import { useEffect, useRef } from 'react'

function Services() {
    const elementsRef = useRef([]);

    useEffect(() => {
        function handleScroll() {
            const scrolledFromTop = window.pageYOffset + window.innerHeight
    
            elementsRef.current.forEach((element) => {
                const distanceFromTop = element.offsetTop
        
                if (scrolledFromTop >= distanceFromTop + 50) {
                    
                    const delaiAnim = element.getAttribute("data-delai")
                    setTimeout(() => {
                        element.style.top = "0"
                        element.style.opacity = "1"
                    }, delaiAnim)
                }
            })
        }
    
        window.addEventListener('scroll', handleScroll)
    
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <section className="services" id="services">
            <div className="titles">
                    <h1>Mes Services</h1>
                    <h2>Des solutions web personnalisées</h2>
                <span></span>
            </div>

            <div className='intro'>MC Studio accompagne les entreprises, les start-up et les indépendants dans la création de leur site web. La solution idéale pour faire parler de vous et d'être visible sur le web est d'avoir un site web qui présentera votre activité à votre public cible. C'est pourquoi MC Studio offre son expertise en vous proposant les solutions adaptées à vos besoins.  </div>

            <div className="types">
                <div className="card appear" data-delai={100} ref={(el) => (elementsRef.current[0] = el)}> 
                    <div className="face face-text">
                        <i className='fas fa-pen'></i>
                        <p>J’utilise les dernières tendances du design pour créer une interface esthétiquement agréable et cohérente avec votre marque en m’appuyant sur votre identité visuelle, vos objectifs et vos valeurs pour concevoir un design sur mesure qui reflète parfaitement l'image de votre entreprise.</p>
                    </div>
                    <div className="face face-image design">
                        <h3>Web Design</h3>
                    </div>
                </div>
                <div className="card appear" data-delai={300} ref={(el) => (elementsRef.current[1] = el)}> 
                    <div className="face face-text">
                        <i className='fas fa-laptop'></i>
                        <p>Que vous ayez besoin d'un site vitrine pour présenter vos produits et services, d'un site e-commerce pour vendre en ligne, ou d'une application web personnalisée pour répondre à des besoins spécifiques, je suis là pour vous accompagner à chaque étape du processus en respectant les standards du web. </p>
                    </div>
                    <div className="face face-image creation">
                        <h3>Développement web</h3>
                    </div>
                </div>
                <div className="card appear" data-delai={500} ref={(el) => (elementsRef.current[2] = el)}> 
                    <div className="face face-text">
                        <i className='fas fa-rocket'></i>
                        <p>J'effectue une analyse approfondie et mets en place des stratégies de référencement afin de booster votre présence en ligne, d’améliorer la visibilité de votre site web sur les moteurs de recherche et générer un trafic organique qualifié.</p>
                    </div>
                    <div className="face face-image reference">
                        <h3>Référencement</h3>
                    </div>
                </div>
            </div>

        </section> 
    )
}

export default Services