// That's a lot of component i must say, wished i could restructure this to be more organized
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Counter from './components/Counter.jsx'
import Collaborate from './components/Collaborate.jsx'
import Users from './components/Users.jsx'
import HowWork from './components/HowWork.jsx'
import Benefit from './components/Benefit.jsx'
import Reviews from './components/Reviews.jsx'
import Pricing from './components/Pricing.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackStartButton from './components/BackStartButton.jsx'

/*
  Refactored and Reviewed by Prince Marco R. Guerrero :D :D :D 
*/

function App() {
  return (
    <> 

      <main className="main" id="top" scroll-to-top="scroll-to-top">
        <div className="content">
          <Navbar/>
          <div data-bs-target="#navbar" data-bs-spy="scroll" tabIndex="0">
              {/* <Other components/> */}
              {/* Ohh i get it, it's like C# OOP but on React, HOLY Crap Lois! 
              I remember the time I'm in ReactJS script and start reacting on everybody */}
              <Hero/>
              <Counter/>
              <Users/>
              <Collaborate/>
              <HowWork/>
              <Benefit/>
              <Reviews/>
              <Pricing/>
              <FAQ/>
              <Contact/>
          </div>
          <BackStartButton/>
          <Footer/>
        </div>
      </main>

    </>
  )
}

export default App
