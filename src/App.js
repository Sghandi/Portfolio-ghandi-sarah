import './style/App.css';
// import {Routes, Route} from "react-router-dom"
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import About from './components/About/about';
import Portfolio from './components/Portfolio/portfolio';
import Contact from './components/Contact/contact';


function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes> */}
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
