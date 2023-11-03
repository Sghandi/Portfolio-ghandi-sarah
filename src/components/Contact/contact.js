import React from 'react'
import './contact.css'

export default function Contact() {
    return (
        <div className="contact-section" id="section4">
            <h2>Un projet ? contactez moi</h2>
            <div className="text-contact">
            <ul>
                <li><b>GHANDI Sarah</b></li>
                <li>Développeuse web</li>
            </ul>  
            <ul>
                <li> <img src="./logos/mail.png" alt="Logo mail" /> ghandi.sarah33@gmail.com</li>
                <li> <img src="./logos/tel.png" alt="Logo téléphone"/>0781202355</li>
                <li><img src="./logos/position.png" alt="Logo position" /> Bordeaux, France</li>
            </ul> 
            </div>
        </div>
    )
}