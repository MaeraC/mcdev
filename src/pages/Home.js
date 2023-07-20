import Landingpage from "../components/LandingPage"
import Services from "./Services"
import Portfolio from "./Portfolio"
import Advantages from "./Advantages"
import Devis from "./Devis"
import Process from "./Process"
import DevisForm from './DevisForm'
import Presentation from "./Presentation"

function Home() {
  return (
      <>
        <Landingpage />
        <Services />
        <Advantages />
        <Process />
        <Devis />
        <Presentation />
        <Portfolio />
        <DevisForm />
      </>
  )
}

export default Home
