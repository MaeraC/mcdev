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
                <h2>Votre projet qui se déroule étape par étape</h2>
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
            <h3>Planification et conception</h3>
            <span></span>
            <p>Sur la base de l'analyse des besoins, je créerai une proposition détaillée qui inclura une planification du projet, des échéances et un aperçu des fonctionnalités. Ensemble, nous validerons cette proposition pour nous assurer que nous sommes alignés sur les objectifs et le calendrier du projet.</p>
          </div>
        </li>
        <li>
          <div className='box-shadow' >
            <h3>Conception visuelle</h3>
            <span></span>
            <p>Je procéderai ensuite à la création d'une maquette visuelle de votre projet, en vous présentant des designs et des prototypes interactifs. Nous pourrons discuter des ajustements et des modifications nécessaires pour nous assurer que le design correspond parfaitement à votre vision.</p>
          </div>
        </li>
        <li>
          <div className='box-shadow' >
            <h3>Développement</h3>
            <span></span>
            <p>Une fois que la conception visuelle est validée, je passerai à la phase de développement. Je m'appuierai sur mes compétences techniques et mon expertise pour transformer le design en un site web fonctionnel et réactif, en utilisant les meilleures pratiques de développement.</p>
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
            <p>Une fois que le projet est prêt, je vous livrerai les fichiers et les ressources nécessaires pour mettre votre site en ligne. Félicitations ! Vous êtes l'heureux propriétaire de votre site. Ma collaboration ne s'arrête pas à la livraison du projet. Je suis là pour vous offrir un support continu et répondre à vos questions ou demandes d'assistance technique.</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Process;
