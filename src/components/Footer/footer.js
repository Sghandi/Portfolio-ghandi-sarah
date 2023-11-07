import React from 'react'
import './footer.css';

export default function Footer() {
    return (
        <div className='simple-footer'>
            <a href="#section1" id="image-link2">
         <img src="./logos/logo-sarah.png" alt="Logo Sarah" />
        </a>
            <p>© Ghandi Sarah 2023 | Tous droits réservés.</p>
            <div className='reso'>
            <a href="https://github.com/Sghandi" target="_blank" rel="noopener noreferrer">
            <img src="./logos/github2.png" alt="Logo Github" />
            </a>
            <a href="https://www.linkedin.com/in/sarah-g-6047a3257/" target="_blank" rel="noopener noreferrer">
            <img src="./logos/linkedin2.png" alt="Logo Linkedin" />
            </a>
            </div>
        </div>
    )
}