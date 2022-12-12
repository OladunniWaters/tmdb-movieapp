import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import SectionsCont from "../Sections/SectionsCont";
//import Footer from "../Footer/Footer";
import "./Home.css"

function Home() {
  return (
    <div className="Home">
         <Header />
         <Hero />
         <SectionsCont />
        
    </div>
  );
}

export default Home;
