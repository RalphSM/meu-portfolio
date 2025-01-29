import AboutMe from "./sections/AboutMe/AboutMe"
import NavBar from "./sections/NavBar/NavBar"
import Hero from "./sections/Hero/Hero"
import Skills from "./sections/Skills/Skills"
import Projects from "./sections/Projects/Projects"
import Footer from "./sections/Footer/Footer"

const Home = () => {

    return (
      <>
        <NavBar/>
        <Hero/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Footer/>
      </>
    )
  }
  
  export default Home
  