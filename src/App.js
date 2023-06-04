import Header from "./components/header/Header";
import Homepage from "./components/homepage/Homepage";
import Details from "./components/details/Details";
import Footer from "./components/footer/Footer";
import "./App.css";
import {BrowserRouter as HashRouter, Routes, Route} from "react-router-dom";
import  { useState, useEffect  } from 'react';
import ReactGA from 'react-ga';



function App() {
    const [theme, setTheme] = useState("dark")
    const changeTheme = () =>{
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }
  
    useEffect(() => {
ReactGA.initialize('381278357');
ReactGA.pageview(window.location.pathname + window.location.search)
},[]);

  
  return (
    <div className="app" data-theme={theme} changeTheme={changeTheme}>
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} /> 
        <Route path="/:id" element={<Details />} />
      </Routes>
      <Footer />
    </HashRouter> 
    </div>
  );
}
export default App;


