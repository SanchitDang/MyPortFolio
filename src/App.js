import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Pract from "./components/Pract";

function App() {
  return (
    <>
    
    <BrowserRouter basename="/MyPortFolio">
        <Routes>
          <Route path="/" element={<Home/>}/>    
          <Route path="/Projects" element={<Projects/>}/>   
          <Route path="/About" element={<About/>}/>
          <Route path="/Achievements" element={<Achievements/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Pract" element={<Pract/>}/>
        </Routes>
    </BrowserRouter>
    
    </>
)}

export default App;
