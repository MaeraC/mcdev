import React, { useEffect, useRef, useState } from 'react'

function isItemInView(item) {
    const rect = item.getBoundingClientRect()

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
}

function Process() {
  const itemsRef = useRef(null)
  // eslint-disable-next-line
  const [timelineProgress, setTimelineProgress] = useState(0)

  useEffect(() => {
    const items = itemsRef.current.querySelectorAll("li");

    function callbackFunc() {
       let maxProgress = 0
            
        for (let i = 0; i < items.length; i++) {
            if (isItemInView(items[i])) {
                const progress = i / (items.length - 1)

                if (progress > maxProgress) {
                    maxProgress = progress
                }

                items[i].classList.add('show');
                
            }
           
        }
        setTimelineProgress(maxProgress)
    }

    window.addEventListener("load", callbackFunc)
    window.addEventListener("resize", callbackFunc)
    window.addEventListener("scroll", callbackFunc)

    return () => {
      window.removeEventListener("load", callbackFunc)
      window.removeEventListener("resize", callbackFunc)
      window.removeEventListener("scroll", callbackFunc)
    }
  }, [])

  return (
    <section className="process" id="deroulement">
         <div className="titles">
                <h1>Déroulement du projet</h1>
                <h2>Un processus étape par étape</h2>
                <span></span>
            </div>
      <ul ref={itemsRef}>
        <li>
          <div className='box-shadow' >
            <h3>Analyse des besoins</h3>
            <span></span>
            <p>Nous commencerons par une discussion approfondie pour comprendre vos besoins, vos objectifs et votre vision pour le projet. Je serai à l'écoute de vos idées et de vos exigences spécifiques afin de m'assurer que nous sommes sur la même longueur d'onde.</p>
          </div>
        </li>
        <li>
          <div className='box-shadow' >
            <h3>Planification du projet</h3>
            <span></span>
            <p>Sur la base de l'analyse des besoins, je créerai une proposition détaillée qui inclura une planification du projet, des échéances et un aperçu des fonctionnalités. Ensemble, nous validerons cette proposition pour nous assurer que nous sommes alignés sur les objectifs et le calendrier du projet.</p>
          </div>
        </li>
        <li>
          <div className='box-shadow' >
            <h3>Développement</h3>
            <span></span>
            <p>Je passerai ensuite à la phase de développement. Je m'appuierai sur mes compétences techniques et mon expertise pour concevoir le design en un site web fonctionnel et réactif, en utilisant les meilleures pratiques de développement.</p>
          </div>
        </li>
        <li>
          <div className='box-shadow' >
            <h3>Tests et révisions</h3>
            <span></span>
            <p>Avant de vous livrer le projet final, je procéderai à des tests approfondis pour m'assurer que tout fonctionne correctement et répond à vos attentes. Nous pourrons également effectuer des révisions si nécessaire pour peaufiner les détails et optimiser l'expérience utilisateur.</p>
          </div>
        </li>
        <li>
          <div className='box-shadow' >
            <h3>Livraison</h3>
            <span></span>
            <p>Une fois que le projet est prêt, je vous livrerai les fichiers et les ressources nécessaires pour mettre votre site en ligne. Félicitations ! Vous êtes l'heureux propriétaire de votre site.</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Process;
