import React from 'react'
// import './About.scss'
import Collapsible from './collapsible';
import Explication from './explication';
import './about.css';

export default function About() {
    return (
        <div className='pink-background'> 
        <Explication/>
        <h2>Compétences</h2>
        <Collapsible label="Front-end" >
            <ul>
                <li>HTML, CSS: Maîtrise des langages essentiels pour la création de sites web.</li>
                <li>Sass : Utilisation de Sass pour une gestion CSS avancée.</li>
                <li>Javascript: Ajout de fonctionnalitiés interactives.</li>
                <li>React: Développement d’interfaces modernes.</li>
                <li>Figma: Création et intégration de maquettes.</li>
            </ul>
        </Collapsible> 
        <Collapsible label="Back-end" >
            <ul>
                <li>MongoDB: Gestion de données avec MongoDB, une base de données non SQL.</li>
                <li>Express.js : Utillisation d’Express.js pour créer des API efficaces</li>
            </ul>
        </Collapsible> 
        <Collapsible label="Debug & Optimisation SEO" >
            <ul>
                <li>Référencement local: Utilisation de Schema.org pour améliorer le référencement local.</li>
                <li>Accessibilité: Vérification de l’accessibilité avec l’outil WAVE.</li>
                <li>Optimisation: Amélioration des performances en utilisant des rapports d’optimisation (Lighthouse).</li>
                <li>Rich Snippets: Utilisation de Google Rich Snippets pour améliorer la visibilité des résultats de recherche.</li>
            </ul>
        </Collapsible> 
        </div>
    )
}