// import { Link } from 'react-router-dom'
import './header.css'

function Header() {
    return (
        
        <div id="scroll-bar">
        <nav className="header-nav" id="section1">
       
            <img src="/logos/logo-sarah.png" alt="Logo Sarah" />
        
        <div className="links-container">
            {/* <Link to="/">Accueil</Link>
            <Link to="/About">À Propos</Link>
            <Link to="/About">Portfolio</Link>
            <Link to="/About">Contact</Link> */}
            <a href="#section1">Accueil</a>
            <a href="#section2">A propos</a>
            <a href="#section3">Portfolio</a>
            <a href="#section4">Contact</a>


        </div>
    </nav>
    </div>
    )
}

export default Header