import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Projects from './components/Projects'
import WorkExperience from './components/WorkExperience'
import Achievements from './components/Achievements'

function App() {
  return (
    <>
    
    <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Achievements" element={<Achievements/>}/>
          <Route path="/WorkExperience" element={<WorkExperience/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
    </BrowserRouter>
    
    </>
)}

export default App;


// npm run build
// firebase deploy