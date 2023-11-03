import React from 'react'
// import './About.scss'
import Collapsible from './collapsible';
import Explication from './explication';
import './about.css';

export default function About() {
    return (
        <div> 
        <Explication/>
        <div className='pink-background'>
        <h2>Compétences</h2>
        <Collapsible label="Front-end"  >
            {/* imageSrc="./logos/front.png" */}
            <ul>
                <li><b>HTML, CSS:</b> Maîtrise des langages essentiels pour la création de sites web.</li>
                <li><b>Sass :</b> Utilisation de Sass pour une gestion CSS avancée.</li>
                <li><b>Javascript:</b> Ajout de fonctionnalitiés interactives.</li>
                <li><b>React:</b> Développement d’interfaces modernes.</li>
                <li><b>Figma:</b> Création et intégration de maquettes.</li>
            </ul>
        </Collapsible> 
        <Collapsible label="Back-end" >
            {/* imageSrc="./logos/back.png" */}
            <ul>
                <li><b>MongoDB:</b> Gestion de données avec MongoDB, une base de données non SQL.</li>
                <li><b>Express.js :</b> Utillisation d’Express.js pour créer des API efficaces.</li>
            </ul>
        </Collapsible> 
        <Collapsible label="Debug & Optimisation SEO"  >
            {/* imageSrc="./logos/seo.png" */}
            <ul>
                <li><b>Référencement local:</b> Utilisation de Schema.org pour améliorer le référencement local.</li>
                <li><b>Accessibilité:</b> Vérification de l’accessibilité avec l’outil WAVE.</li>
                <li><b>Optimisation:</b> Amélioration des performances en utilisant des rapports d’optimisation (Lighthouse).</li>
                <li><b>Rich Snippets:</b> Utilisation de Google Rich Snippets pour améliorer la visibilité des résultats de recherche.</li>
            </ul>
        </Collapsible> 
        </div>
        </div>
    )
}