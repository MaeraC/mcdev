import image from "../assets/profil.jpg"

function Presentation() {
    return (
        <section className="presentation"id="apropos">
                <div className="titles">
                    <h1>À propos de moi</h1>
                    <h2>Développeuse et conceptrice web</h2>
                    <span></span>
                </div>
                <div className="texts">
                    <div className="text1">
                        <p>Bonjour, je suis Maera Contaret, passionnée par la création de solutions numériques innovantes. Pour moi, le développement n'est pas seulement un métier, c'est une véritable passion qui m'anime au quotidien. J'adore relever de nouveaux défis et explorer les possibilités infinies offertes par la technologie. </p>
                        <p>Depuis mes débuts dans le monde du développement, j'ai été fasciné par la manière dont le code peut donner vie à des idées et transformer des concepts abstraits en applications tangibles. Chaque ligne de code que j'écris est une occasion d'exprimer ma créativité et de résoudre des problèmes de manière ingénieuse. </p>
                    </div>
                    <div className="text2">
                        <div className="img"><img src={image} alt=""  /></div>
                        <div className="text">
                            <p>Mon objectif est de créer des expériences utilisateur exceptionnelles et intuitives. Je crois fermement que la technologie doit être au service des utilisateurs et les aider à atteindre leurs objectifs de manière fluide et agréable. Chaque projet est une opportunité pour moi de repousser les limites et de créer quelque chose de vraiment spécial. </p>
                            <p>En travaillant avec moi, vous pouvez vous attendre à une collaboration étroite, une communication transparente et une attention méticuleuse aux détails. Je suis là pour vous guider à travers chaque étape du processus de développement, en vous tenant informé et en répondant à toutes vos questions. </p>
                            <p>Alors, si vous recherchez une développeuse passionnée et engagée, n'hésitez pas à me contacter pour discuter de votre projet !</p>
                        </div>
                    </div>
                </div>
            
        </section>
    )
}

export default Presentation