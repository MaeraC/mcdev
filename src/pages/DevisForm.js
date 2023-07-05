import { Link } from 'react-router-dom'
import { useState } from 'react'

function DevisForm() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [typeSite, setTypeSite] = useState('')
    const [project, setProject] = useState('')
    const [budget, setBudget] = useState('')
    const [details, setDetails] = useState('')
    const [politic, setPolitic] = useState('')
    const [step, setStep] = useState(1)

    const handleNameChange = (e) => {
        const value = e.target.value
        setName(value)
    }
    const handleNameNext = () => {
        setStep(2)
    }

    const handleEmailChange = (e) => {
        const value = e.target.value
        setEmail(value)
    }
    const handleEmailNext = () => {
        setStep(3)
    }

    const handleTypeSiteChange = (e) => {
        const value = e.target.value
        setTypeSite(value)
    }
    const handleTypeSiteNext = () => {
        if (typeSite) {
            setStep(4)
        }
        
    }

    const handleProjectChange = (e) => {
        const value = e.target.value
        setProject(value)
    }
    const handleProjectNext = () => {
        if (project) {
            setStep(5)
        }
        
    }

    const handleBudgetChange = (e) => {
        const value = e.target.value
        setBudget(value)
    }
    const handleBudgetNext = () => {
        if (budget) {
          setStep(6);
        }
    }

    const handleDetailsChange = (e) => {
        const value = e.target.value
        setDetails(value)
    }
    const handleDetailsNext = () => {
        setStep(7)
    }

    const handlePoliticChange = (e) => {
        const value = e.target.value
        setPolitic(value)
    }
    const handlePoliticNext = () => {
        setStep(8)
    }

    return (
        <section className="devis-modal" id="devis">
            <header className='titles'>
                <h1>Votre devis sur mesure</h1>
                <h2>Parlons de votre projet</h2>
                <span></span>
            </header>
            <form className='form-devis'>
                {step === 1 && (
                    <div className='name-container input-section'>
                        <input type="text" placeholder="Votre nom"/><br></br>
                        <input type="text" placeholder="Votre entreprise ou organisme" onChange={handleNameChange}/><br></br>
                        <span className='next-btn name' onClick={handleNameNext}>Suivant</span>
                    </div>
                )}
                {step === 2 && (
                    <div className='email-container input-section folded'>
                        <input type="email" placeholder="Votre e-mail" /><br></br>
                        <input type="tel" placeholder="Votre téléphone" onChange={handleEmailChange} /><br></br>
                        <span className='next-btn name' onClick={handleEmailNext}>Suivant</span>
                    </div>
                )}
                {step === 3 && (
                    <div className='type-site-container input-section folded'>
                       <p>Quel type de site souhaitez-vous ?</p>
                        <ul>
                            <li>
                                <input type="radio" name="radio-vitrine" className="input-radio" onChange={handleTypeSiteChange} />
                                <label for="radio-vitrine">Site vitrine</label>
                            </li>
                            <li>
                                <input type="radio" name="radio-boutique" className="input-radio" onChange={handleTypeSiteChange}  />
                                <label for="radio-boutique">Boutique en ligne</label>
                            </li>
                            <li>
                                <input type="radio" name="radio-portfolio" className="input-radio" onChange={handleTypeSiteChange}  />
                                <label for="radio-portfolio">Portfolio</label>
                            </li>
                            <li>
                                <input type="radio" name="radio-autre" className="input-radio" onChange={handleTypeSiteChange} />
                                <input type="text" placeholder="Autre" className=' other-radio' onChange={handleTypeSiteChange} />
                            </li>
                        </ul>

                        <span className='next-btn name' onClick={handleTypeSiteNext}>Suivant</span>
                    </div>
                )}
                {step === 4 && (
                    <div className='project-container input-section folded'>
                        <p>Quel est votre projet ?</p>
                        <ul>
                            <li>
                                <input type="radio" name="radio-creation" className="input-radio" onChange={handleProjectChange} />
                                <label for="radio-creation">Création de site</label>
                            </li>
                            <li>
                                <input type="radio" name="radio-refonte" className="input-radio" onChange={handleProjectChange}  />
                                <label for="radio-refonte">Refonte de site</label>
                            </li>
                            <li>
                                <input type="radio" name="radio-referencement" className="input-radio" onChange={handleProjectChange}  />
                                <label for="radio-referencement">Référencement</label>
                            </li>
                            <li>
                                <input type="radio" name="radio-autre" className="input-radio" onChange={handleProjectChange} />
                                <input type="text" placeholder="Autre" className=' other-radio' onChange={handleProjectChange} />    
                            </li>
                        </ul>
                        <span className='next-btn name' onClick={handleProjectNext}>Suivant</span>
                    </div>
                )}
                {step === 5 && (
                    <div className='budget-container input-section folded'>
                        <div>
                            <label for="budget">Quel votre budget pour ce projet ?</label><br></br>
                            <select name="budget" onChange={handleBudgetChange}>
                                <option value="select-choice">Sélectionner votre choix</option>
                                <option value="500-1000" >500€ - 1000€</option>
                                <option value="1000-2000">1000€ - 2000€</option>
                                <option value="2000-5000">2000€ - 5000€</option>
                                <option value="5000">+ 5000€</option>
                            </select>   
                        </div>
                        <span className='next-btn' onClick={handleBudgetNext}>Suivant</span>
                    </div>
                )}
                {step === 6 && (
                    <div className='details-container input-section folded'>
                        <div>
                            <label for="details">Détails supplémentaires (descriptif, attentes, délais...)</label><br></br>
                            <textarea placeholder='Soyez le plus précis possible' onChange={handleDetailsChange}></textarea><br></br>
                        </div>
                        <span className='next-btn' onClick={handleDetailsNext}>Confirmer</span>
                    </div>
                )}
                {step === 7 && (
                    <div className='politic-container input-section'>
                        <div>
                            <input type="checkbox" required onChange={handlePoliticChange} />
                            <label for="politic">En soumettant ce formulaire, j'accepte que mes données personnelles soient utilisées pour me recontacter. Aucun autre traitement ne sera effectué avec mes informations. Pour connaître et exercer vos droits, veuillez consultez la <Link to='/politique-de-confidentialite'>Politique de confidentialité</Link>.</label>
                        </div>
                        <span className='next-btn' onClick={handlePoliticNext}>Confirmer</span>
                    </div>
                )}
                {step === 8 && (
                    <div className='end-container input-section'>
                        <p>Merci pour ces informations, <br></br> vous obtiendrez votre devis dans moins de 24h !</p>
                    </div>
                )}
            </form>
        </section>
    )
}

export default DevisForm