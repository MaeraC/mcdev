import { Link } from 'react-router-dom'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

function DevisForm() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [entreprise, setEntreprise] = useState('')
    const [tel, setTel] = useState('')
    const [typeSite, setTypeSite] = useState('')
    const [typeSiteAutre, setTypeSiteAutre] = useState('')
    const [project, setProject] = useState('')
    const [projectAutre, setProjectAutre] = useState('')
    const [budget, setBudget] = useState('')
    const [details, setDetails] = useState('')
    const [politic, setPolitic] = useState('')
    const [step, setStep] = useState(1)

    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [entrepriseError, setEntrepriseError] = useState(false)
    const [telError, setTelError] = useState(false)
    const [typeSiteError, setTypeSiteError] = useState(false)
    const [projectError, setProjectError] = useState(false)
    const [budgetError, setBudgetError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const [politicError, setPoliticError] = useState(false)

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value)
        if (value.trim() !== '') {
        setNameError(false)
        } else {
        setNameError(true)
        }
    }
    const handleEntrepriseChange = (e) => {
        const value = e.target.value
        setEntreprise(value)
        if (value.trim() !== '') {
        setEntrepriseError(false)
        } else {
        setEntrepriseError(true)
        }
    }
    const handleNameNext = () => {
        if (name.trim() !== '' && entreprise.trim() !== '') {
        setNameError(false);
        setStep(2)
        } else {
        setNameError(true)
        setEntrepriseError(true)
        }
    }

    const handleEmailChange = (e) => {
        const value = e.target.value
        setEmail(value)
        if (value.trim() !== '') {
        setEmailError(false)
        } else {
        setEmailError(true)
        }
    }
    const handleTelChange = (e) => {
        const value = e.target.value
        setTel(value)
        if (value.trim() !== '') {
        setTelError(false)
        } else {
            setTelError(true)
        }
    }
    const handleEmailNext = () => {
        if (email.trim() !== '' && tel.trim() !== '') {
        setEmailError(false)
        setStep(3)
        } else {
        setEmailError(true)
        setTelError(true)
        }
    }

    const handleTypeSiteChange = (e) => {
        const value = e.target.value
        setTypeSite(value);
        if (value.trim() !== '') {
        setTypeSiteError(false)
        } else {
        setTypeSiteError(true)
        }
    }
    const handleTypeSiteAutreChange = (e) => {
        const value = e.target.value
        setTypeSiteAutre(value)
    }
    const handleTypeSiteNext = () => {
        if (typeSite === 'autre' && typeSiteAutre.trim() === '') {
        setTypeSiteError(true)
        } else {
        setTypeSiteError(false)
        setStep(4)
        }
    }

    const handleProjectChange = (e) => {
        const value = e.target.value
        setProject(value)
        if (value.trim() !== '') {
        setProjectError(false)
        } else {
        setProjectError(true)
        }
    }
    const handleProjectAutreChange = (e) => {
        const value = e.target.value
        setProjectAutre(value)
    }
    const handleProjectNext = () => {
        if (project === 'autre' && projectAutre.trim() === '') {
        setProjectError(true)
        
        } else {
        setProjectError(false)
        setStep(5)
        }
    }

    const handleBudgetChange = (e) => {
        const value = e.target.value
        setBudget(value)
        if (value.trim() !== '') {
        setBudgetError(false)
        } else {
        setBudgetError(true)
        }
    }
    const handleBudgetNext = () => {
        if (budget.trim() !== '') {
        setBudgetError(false)
        setStep(6)
        } else {
        setBudgetError(true)
        }
    }

    const handleDetailsChange = (e) => {
        const value = e.target.value
        setDetails(value)
        if (value.trim() !== '') {
        setDetailsError(false)
        } else {
        setDetailsError(true)
        }
    }
    const handleDetailsNext = () => {
        if (details.trim() !== '') {
        setDetailsError(false)
        setStep(7)
        } else {
        setDetailsError(true)
        }
    }

    const handlePoliticChange = (e) => {
        const value = e.target.value
        setPolitic(value)
        if (value.trim() !== '') {
        setPoliticError(false)
        } else {
        setPoliticError(true)
        }
    }
    const handlePoliticNext = () => {
        if (politic.trim() !== '') {
        setPoliticError(false)
        sendDataToEmail()
        setStep(8)
        } else {
        setPoliticError(true)
        }
    }

    const sendDataToEmail = () => {
        const templateParams = {
          from_name: name,
          message : name + " souhaite un devis pour son nouveau projet pour son entreprise : " + entreprise + ". \n"
          + "Email : " + email + "\n" 
          + "Téléphone : " + tel + "\n"
          + "Type de site : " + typeSite + "\n"
          + "Autre type de site : " + typeSiteAutre + '\n'
          + "Projet : " + project + '\n'
          + "Autre projet : " + projectAutre + '\n'
          + "Budget : " + budget + '\n'
          + "Détails supplémentaires : " + details,
          to_name: "MC Studio"
        };
      
        emailjs.send('mc.studio', 'template_mfg9cl4', templateParams, '755kBu-R7PW4I1R0u')
          .then((response) => {
            console.log('E-mail envoyé avec succès !', response);
            setStep(8);
          }, (error) => {
            console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
          });
    }

    return (
        <section className="devis-modal" id="devis">
            <header className="titles">
                <h1>Votre devis sur mesure</h1>
                <h2>Parlons de votre projet</h2>
                <span></span>
            </header>
            <form className="form-devis">
                {step === 1 && (
                <div className="name-container input-section">
                    <input type="text" placeholder="Votre nom" value={name} onChange={handleNameChange} /><br></br>
                    {nameError && <span className="error">Veuillez saisir votre nom</span>}
                    <input type="text" placeholder="Votre entreprise ou organisme" value={entreprise} onChange={handleEntrepriseChange} /><br></br>
                    {entrepriseError && <span className="error">Veuillez saisir votre entreprise ou organisme</span>}
                    <span className="next-btn name" onClick={handleNameNext}>Suivant</span>
                </div>
                )}
                {step === 2 && (
                <div className="email-container input-section folded">
                    <input type="email" placeholder="Votre e-mail" value={email} onChange={handleEmailChange} /><br></br>
                    {emailError && <span className="error">Veuillez saisir une adresse e-mail valide</span>}
                    <input type="tel" placeholder="Votre téléphone" value={tel} onChange={handleTelChange} /><br></br>
                    {telError && <span className="error">Veuillez entrer votre numéro de téléphone</span>}
                    <span className="next-btn name" onClick={handleEmailNext}>Suivant</span>
                </div>
                )}
                {step === 3 && (
                <div className="type-site-container input-section folded">
                    <p>Quel type de site souhaitez-vous ?</p>
                    <ul>
                    <li>
                        <input type="radio" name="radio-vitrine" className="input-radio" value="vitrine" onChange={handleTypeSiteChange} />
                        <label htmlFor="radio-vitrine">Site vitrine</label>
                    </li>
                    <li>
                        <input type="radio" name="radio-boutique" className="input-radio" value="boutique" onChange={handleTypeSiteChange} />
                        <label htmlFor="radio-boutique">Boutique en ligne</label>
                    </li>
                    <li>
                        <input type="radio" name="radio-portfolio" className="input-radio" value="portfolio" onChange={handleTypeSiteChange} />
                        <label htmlFor="radio-portfolio">Portfolio</label>
                    </li>
                    <li>
                        <input type="radio" name="radio-autre" className="input-radio" value="autre" onChange={handleTypeSiteChange} />
                        <input type="text" placeholder="Autre" className="other-radio"  value={typeSiteAutre} onChange={handleTypeSiteAutreChange} />
                    </li>
                    </ul>

                    {typeSiteError && <span className="error">Veuillez sélectionner un type de site</span>}

                    <span className="next-btn name" onClick={handleTypeSiteNext}>Suivant</span>
                </div>
                )}
                {step === 4 && (
                <div className="project-container input-section folded">
                    <p>Quel est votre projet ?</p>
                    <ul>
                    <li>
                        <input type="radio" name="radio-creation" className="input-radio" value="creation" onChange={handleProjectChange} />
                        <label htmlFor="radio-creation">Création de site</label>
                    </li>
                    <li>
                        <input type="radio" name="radio-refonte" className="input-radio" value="refonte" onChange={handleProjectChange} />
                        <label htmlFor="radio-refonte">Refonte de site</label>
                    </li>
                    <li>
                        <input type="radio" name="radio-referencement" className="input-radio" value="referencement" onChange={handleProjectChange} />
                        <label htmlFor="radio-referencement">Référencement</label>
                    </li>
                    <li>
                        <input type="radio" name="radio-autre" className="input-radio" value="autre" onChange={handleProjectChange} />
                        <input type="text" placeholder="Autre" className="other-radio" value={projectAutre} onChange={handleProjectAutreChange} />
                    </li>
                    </ul>
                    {projectError && <span className="error">Veuillez sélectionner un projet</span>}
                    <span className="next-btn name" onClick={handleProjectNext}>Suivant</span>
                </div>
                )}
                {step === 5 && (
                <div className="budget-container input-section folded">
                    <div>
                    <label htmlFor="budget">Quel est votre budget pour ce projet ?</label><br></br>
                    <select name="budget" onChange={handleBudgetChange}>
                        <option value="select-choice">Sélectionner votre choix</option>
                        <option value="500-1000">500€ - 1000€</option>
                        <option value="1000-2000">1000€ - 2000€</option>
                        <option value="2000-5000">2000€ - 5000€</option>
                        <option value="5000">+ 5000€</option>
                    </select>
                    </div>
                    {budgetError && <span className="error">Veuillez sélectionner un budget</span>}
                    <span className="next-btn" onClick={handleBudgetNext}>Suivant</span>
                </div>
                )}
                {step === 6 && (
                <div className="details-container input-section folded">
                    <div>
                    <label htmlFor="details">Détails supplémentaires (descriptif, attentes, délais...)</label><br></br>
                    <textarea placeholder="Soyez le plus précis possible" value={details} onChange={handleDetailsChange}></textarea><br></br>
                    </div>
                    {detailsError && <span className="error">Veuillez fournir des détails supplémentaires</span>}
                    <span className="next-btn" onClick={handleDetailsNext}>Confirmer</span>
                </div>
                )}
                {step === 7 && (
                <div className="politic-container input-section">
                    <div>
                    <input type="checkbox" required onChange={handlePoliticChange} />
                    <label htmlFor="politic">En soumettant ce formulaire, j'accepte que mes données personnelles soient utilisées pour me recontacter. Aucun autre traitement ne sera effectué avec mes informations. Pour connaître et exercer vos droits, veuillez consulter la <Link to="/politique-de-confidentialite">Politique de confidentialité</Link>.</label>
                    </div>
                    {politicError && <span className="error">Veuillez accepter les conditions de confidentialité</span>}
                    <span className="next-btn" onClick={handlePoliticNext}>Confirmer</span>
                </div>
                )}
                {step === 8 && (
                <div className="end-container input-section">
                    <p>Merci pour ces informations,<br></br> vous obtiendrez votre devis dans moins de 24h !</p>
                </div>
                )}
            </form>
        </section>
    )
}

export default DevisForm

