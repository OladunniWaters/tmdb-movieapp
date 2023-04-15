import Header from "./components/header/Header";
import Homepage from "./components/homepage/Homepage";
import Details from "./components/details/Details";
import Footer from "./components/footer/Footer";
import "./App.css";
import {BrowserRouter as HashRouter, Routes, Route} from "react-router-dom";
import  {useState} from 'react';
import { Provider } from 'react-redux';
import store  from './store/store';



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
      </Routes>
      <Footer />
    </HashRouter> 
    </Provider>
    </div>
  );
}
export default App;


