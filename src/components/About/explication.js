import React from 'react'
import './explication.css'

export default function Explication() {
    return (
        <div className="Banner-ex" id="section2">
            <h2>À propos</h2>

            <ul>
                <li>Après avoir suivie une formation de 8 mois en développement web chez Openclassrooms, j'ai acquis des compétences variées en front-end, backend, gestion de projets, optimisation SEO et en débogage. Je m'intéresse également au design.</li>
                <br/>
                <li>J'ai eu l’occasion de créer des sites web responsives en utilisant plusieurs outils tel que HTML, CSS, JavaScript ou encore React.</li>
                <br/>
                <li>Vous avez une idée de projet ? N'hésitez pas à <a href="#section4">me contacter</a> pour en discuter ensemble !</li>
                {/* <img src="/logos/fleche-violette2.png" alt="Logo Sarah" id="section-fleche2" /> */}
           
            </ul>   
        </div>
    )
}