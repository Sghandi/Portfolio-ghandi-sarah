import React from 'react'
import './footer.css';

export default function Footer() {
    return (
        <div className='simple-footer'>
            <img src="/logos/logo-sarah.png" alt="Logo Sarah" />
            <p>© 2023 - Ghandi Sarah</p>
            <div className='reso'>
            <img src="./logos/github.png" alt="Logo Github" />
            <img src="./logos/linkedin.png" alt="Logo Linkedin" />
            </div>
        </div>
    )
}