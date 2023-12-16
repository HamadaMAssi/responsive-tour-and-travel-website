import Navbar from "../components/navbar/Navbar.jsx"
import Hero from "../components/Hero/Hero";
import AboutImg from "../assets/night.jpg"
import Footer from "../components/Footer/Footer.js"; 
import AboutUs from "../components/AboutUs/AboutUs.js";


const About = () => {
    return (
      <>
        <Navbar />
        <Hero cName="hero-mid" heroImg={AboutImg} title="About" text="" url="" btnClass="hide" buttonText="" />
        <AboutUs />
        <Footer />
      </>
    )
  }
  
  export default About