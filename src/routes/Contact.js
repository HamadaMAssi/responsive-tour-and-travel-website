import Navbar from "../components/navbar/Navbar.jsx"
import Hero from "../components/Hero/Hero";
import ContactImg from "../assets/2.jpg"
import Footer from "../components/Footer/Footer.js";
import ContactForm from "../components/ContactForm/ContactForm.js";

const Contact = () => {
    return (
      <>
        <Navbar />
        <Hero cName="hero-mid" heroImg={ContactImg} title="Contact" text="" url="" btnClass="hide" buttonText="" />
        <ContactForm />
        <Footer />
      </>
    )
  }
  
  export default Contact