import "./App.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contact/contact";
import Modal from "./components/Portfolio/modal";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Modal />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
