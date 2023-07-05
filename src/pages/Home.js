import Landingpage from "../components/LandingPage"
import Services from "./Services"
import Portfolio from "./Portfolio"
import Advantages from "./Advantages"
import Devis from "./Devis"
import Process from "./Process"
import DevisForm from './DevisForm'

function Home() {
  return (
      <div className="scroller" dir="ltr">
        <Landingpage />
        <Services />
        <Advantages />
        <Process />
        <Devis />
        <Portfolio />
        <DevisForm />
      </div>
  )
}

export default Home
