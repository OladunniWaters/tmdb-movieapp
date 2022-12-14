import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Latest from "../Sections/Movies/Latest";
import Footer from "../Footer/Footer";
import "./Home.css"

function Home() {
  return (
    <div className="Home">
         <Header />
         <Hero />
         <Latest />
         <Footer />
    </div>
  );
}

export default Home;
