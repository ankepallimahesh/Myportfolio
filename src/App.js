import './App.css';
import Navbar1 from './components/navbar';
import Home from './pages/home';
import Resume from './pages/resume';
import Project from './pages/project';
import Community1 from './pages/joincommunity';
import Contact from './pages/contactus';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Community from './pages/joincommunity';
import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/community" element={<Community1/>}/>
      </Routes>

      </Router>
      
    </div>
  );
}

export default App;
