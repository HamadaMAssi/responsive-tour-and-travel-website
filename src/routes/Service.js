import Navbar from "../components/navbar/Navbar.jsx"
import Hero from "../components/Hero/Hero";
import ServiceImg from "../assets/night.jpg"
import Footer from "../components/Footer/Footer.js";
import Trip from "../components/Trip/Trip.js";

const Service = () => {
    return (
      <>
        <Navbar />
        <Hero cName="hero-mid" heroImg={ServiceImg} title="Service" text="" url="" btnClass="hide" buttonText="" />
        <Trip />
        <Footer />
      </>
    )
  }
  
  export default Service