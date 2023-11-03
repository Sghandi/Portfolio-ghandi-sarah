import React from 'react'
import './footer.css';

export default function Footer() {
    return (
        <div className='simple-footer'>
            {/* <div className="divImage"> */}
            {/* <img src="/logos/logo-sarah.png" alt="Logo Sarah" /> */}
            <a href="#section1" id="image-link2">
         <img src="/logos/logo-sarah.png" alt="Logo Sarah" />
        </a>
            {/* </div> */}
            <p>© Ghandi Sarah 2023 | Tous droits réservés.</p>
            <div className='reso'>
            <a href="https://github.com/Sghandi">
            <img src="./logos/github.png" alt="Logo Github" />
            </a>
            <a href="https://www.linkedin.com/in/sarah-g-6047a3257/">
            <img src="./logos/linkedin.png" alt="Logo Linkedin" />
            </a>
            </div>
        </div>
    )
}