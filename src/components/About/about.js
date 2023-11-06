import React from 'react'
import Collapsible from './collapsible';
import Explication from './explication';
import './about.css';

export default function About() {
    return (
        <div> 
        <Explication/>
        <div className='pink-background'>
        <h2>Compétences</h2>
        <div className='collapse-section'>
        <Collapsible label="Front-end"  >
            <ul>
                <li><b>HTML, CSS:</b> Maîtrise des langages essentiels pour la création de sites web.</li>
                <li><b>Sass :</b> Utilisation de Sass pour une gestion CSS avancée.</li>
                <li><b>Javascript:</b> Ajout de fonctionnalitiés interactives.</li>
                <li><b>React:</b> Développement d’interfaces modernes.</li>
                <li><b>Figma:</b> Création et intégration de maquettes.</li>
            </ul>
        </Collapsible> 
        <Collapsible label="Back-end" >
            <ul>
                <li><b>MongoDB:</b> Gestion et Stockage de données de manière sécurisée avec MongoDB</li>
                <li><b>Express.js :</b> Utillisation d’Express.js pour créer des API efficaces.</li>
                <li><b>CRUD :</b>Mise en oeuvre d'opérations CRUD de manière sécurisée</li>

            </ul>
        </Collapsible> 
        <Collapsible label="Debug & Optimisation SEO"  >
            <ul>
                <li><b>Référencement local:</b> Utilisation de Schema.org pour améliorer le référencement local.</li>
                <li><b>Accessibilité:</b> Vérification de l’accessibilité avec l’outil WAVE.</li>
                <li><b>Optimisation:</b> Amélioration des performances en utilisant des rapports d’optimisation (Lighthouse).</li>
                <li><b>Rich Snippets:</b> Utilisation de Google Rich Snippets pour améliorer la visibilité des résultats de recherche.</li>
                <li><b>Débug :</b>Débugger un site web grâce aux Chrome DevTools</li>
                <li>Rédaction de cahier de charge</li>
            </ul>
        </Collapsible> 
        <Collapsible label="Gestion de projet et outils de développeurs" >
            <ul>
                <li>Suivre le déroulement d'un projet grâce à un outil de gestion de projet</li>
                <li>Rédiger les spécifications techniques d'un projet web à partir de besoins fonctionnels</li>
                <li>Découper une fonctionnalitié en tâches pour préparer le développement</li>
                <li>Présenter une solution technique</li>
                <li>Mettre en place une méthode de veille technologique</li>
                <li>Versioner un projet sur Git et Github</li>
                <li>Installer un environnement de développement front-end</li>
            </ul>
        </Collapsible> 
        </div>
        </div>
        </div>
    )
}