import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import AboutUs from './pages/AboutUs';
import HomeCare from './pages/HomeCare';
import Resources from './pages/Resources';
import Careers from './pages/Careers';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about-us" element={<AboutUs />}/>
        <Route exact path="/home-care" element={<HomeCare />}/>
        <Route exact path="/resources" element={<Resources />}/>
        <Route exact path="/careers" element={<Careers />}/>

      </Routes>
    </Router>
  )
};

export default App;
