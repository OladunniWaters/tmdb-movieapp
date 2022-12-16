import Homepage from "./components/Homepage";
import Details from "./components/Details";
import "./App.css";
import {BrowserRouter as HashRouter, Routes, Route} from "react-router-dom";

//const apiKey = "40c5472500254014bc0441252e3b37ac"

function App() {
  return (
    <div className="App">
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/:id" element={<Details/>} />
      </Routes>
    </HashRouter> 
    </div>
  );
}
export default App;


