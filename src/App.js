import Header from "./components/header/Header";
import Homepage from "./components/homepage/Homepage";
import Details from "./components/details/Details";
import DetailVideo from "./components/details/DetailVideo";
import Footer from "./components/footer/Footer";
import "./App.css";
import {BrowserRouter as HashRouter, Routes, Route} from "react-router-dom";
import  {useState} from 'react';
import { Provider } from 'react-redux';
import store  from './store/store';

//const apiKey = "40c5472500254014bc0441252e3b37ac"

function App() {
        const [theme, setTheme] = useState("dark")
    const changeTheme = () =>{
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }
  
  
  
  return (
    <div className="app" data-theme={theme} changeTheme={changeTheme}>
    <Provider store={store}>
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<Details />} />
         <Route path="/:id" element={<DetailVideo />} />
      </Routes>
      <Footer />
    </HashRouter> 
    </Provider>
    </div>
  );
}
export default App;


