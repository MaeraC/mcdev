import { useEffect, useRef } from 'react'

function Advantages() {
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
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="advantages" id="avantages">
            <div className="titles">
                <h1>Pourquoi choisir un freelance ?</h1>
                <h2>Les principaux avantages</h2>
                <span></span>
            </div>
            <div className="types">
                <div className="appear" data-delai={100} ref={(el) => (elementsRef.current[0] = el)}>
                    <h3>Communication directe</h3>
                    <p>Travailler avec un freelance offre une communication directe, une relation de proximité et une compréhension approfondie de vos besoins. Cela facilite une collaboration étroite et une prise de décision rapide.</p>
                </div>
                <div className="appear" data-delai={300} ref={(el) => (elementsRef.current[1] = el)}>
                    <h3>Focus et dévouement</h3>
                    <p>Un  freelance se concentre sur un projet à la fois, ce qui garantit un niveau d'engagement et de dévouement élevé. Il consacre tout son temps et son attention pour obtenir les meilleurs résultats possibles.</p>
                </div>
                <div className="appear" data-delai={500} ref={(el) => (elementsRef.current[2] = el)}>
                    <h3>Coûts réduits</h3>
                    <p>Collaborer avec un freelance est économiquement avantageux : tarifs compétitifs, frais réduits, pas de coûts liés à la gestion d'une équipe ou à une structure d'agence. Une solution rentable pour vos projets.</p>
                </div>
                <div className="appear" data-delai={700} ref={(el) => (elementsRef.current[3] = el)}>
                    <h3>Flexibilité</h3>
                    <p>Un freelance offre une grande flexibilité pour les ajustements et modifications tout au long du projet. Il s'adapte à vos besoins changeants et fournit des solutions sur mesure sans les contraintes d'une agence. </p>
                </div>
           </div>
        </section>
    )
}

export default Advantages