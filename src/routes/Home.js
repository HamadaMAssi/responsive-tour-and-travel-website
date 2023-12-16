import Navbar from "../components/navbar/Navbar.jsx"
import Hero from "../components/Hero/Hero";
import HomeImg from "../assets/12.jpg"
import Destination from "../components/Destination/Destination.js";
import Trip from "../components/Trip/Trip.js";
import Footer from "../components/Footer/Footer.js";

function Home ()  {
  return (
    <>
      <Navbar />
      <Hero cName="hero" heroImg={HomeImg} title="Your Journey Your Story" text="Choose Your Favorite Destination." url="/" btnClass="show" buttonText="Travel Plan" />
      <Destination />
      <Trip />
      <Footer />
    </>
  )
}

export default Home;
