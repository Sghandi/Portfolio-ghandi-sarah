import React, { useState } from "react";
import "./portfolio.css";
import Modal from "./modal";

const images = [
  {
    src: "./images/booki.png",
    title: "Booki",
    category: "HTML, CSS",
    site: "./images/booki.webp",
    description:
      "En tant qu'alternante en développement web au sein de la start-up Booki j'étais chargée de développer la page d’accueil d’une agence de voyage d’hébergements et d’activités.",
    paragraph: [
      "Utilisation d’HTML & CSS",
      "Intégration à partir d’une maquette",
      "Gestion du responsive design",
    ],

    lien: "https://github.com/Sghandi/Booki",
  },

  {
    src: "./images/menuMaker.png",
    title: "Menu Maker",
    category: "Gestion de projet",
    description:
      "En tant que développeuse front-end au sein de l'agence Webgencia, ma mission était de mener, préparer et planifier le projet de développent d'un site. Qwenta, mon client, souhaitait développer \"Menu Maker\", un site permettant aux restaurateurs d’afficher et de mettre en page leurs menus facilement, en quelques clics. ",
    paragraph: [
      "Développement d'un système de veille informationnelle",
      "Détermination les spécifications techniques",
      "Organisation de la gestion de projet du développement du site",
    ],
    site: "./images/menu-maker.webp",
  },

  {
    src: "./images/nina.jpg",
    title: "Nina Carducci",
    category: "Debug, SEO, Optimisation",
    description:
      "En tant que développeuse web freelance jai été contactée par Nina Carducci, photographe professionnelle à Bordeaux, pour des services d’optimisations SEO.",
    paragraph: [
      "Optimisation globale du site en termes de performances et de SEO",
      "Référencement local en utilisant Schema.org",
      "Utilisation de métatags pour les réseaux sociaux",
      "Modifications liées à l’accessibilité du site",
      "Rédaction d’un rapport d’optimisation présentant toutes les actions et leurs impacts",
    ],
    site: "./images/mvg.png",
    lien: "https://github.com/Sghandi/Nina-Carducci",
    site: "./images/nina.webp",
  },
  
  {
    src: "./images/sophie-bluel.png",
    title: "Sophie Bluel",
    category: "Javascript",
    description:
      "Développeuse front-end pour l'agence ArchiWebos  je suis appelée en renfort dans une équipe pour développer le portfolio de l’architecte d’intérieure Sophie Bluel.",
    paragraph: [
      "Intégration à partir d’une maquette",
      "Conception de la page de connexion de l'administrateur du site (Sophie Bluel)",
      "Mise en place de multiples appels aux API",
    ],
    lien: "https://github.com/Sghandi/Portfolio-architecte-sophie-bluel",
    site: "./images/sophie.webp",
  },

  {
    src: "./images/kasa.jpg",
    title: "Kasa",
    category: "Javascript, React",
    description:
      "En tant que développeuse front-end en freelance j'étais chargée de développer la nouvelle plateforme web de Kasa, le leader de la location d’appartements entre particuliers en France.",
    paragraph: [
      "Développement de l’ensemble de l’application avec React",
      "Intégration à partir d’une maquette",
      "Gestion du Responsive design",
      'Respect des "Coding guidelines Kasa"',
    ],
    site: "./images/kasa.webp",
    lien: "https://github.com/Sghandi/Kasa-logements",
  },
  
  {
    src: "./images/mvg.png",
    title: "Mon Vieux Grimoire",
    category: "Node.js, Express.js, MongoDB",
    description:
      'Engagée par la chaîne de librairies "Le vieux grimoire", j\'ai été suis chargée de développer le backend d’un site de référencement et de notations de livres "Mon vieux grimoire". Le front-end a été réalisé par Kévin, un développeur front-end.',
    paragraph: [
      "Intégration à partir d’une maquette",
      "Utilisation de la base donnée MongoDb",
      "Utilisation de node.js et express.js",
      "Respect de documents : spécifications fonctionnelles, spécifications techniques de l'API.",
    ],
    lien: "https://github.com/Sghandi/Mon-Vieux-Grimoire",
    site: "./images/mvg.webp",
  },
];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="images-work" id="section3">
      <h2>Portfolio</h2>

      <div className="images-section">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.title}
            title={image.title}
            className="image-with-title"
            onClick={() => openModal(image)}
          />
        ))}
      </div>
      <Modal
        image={selectedImage}
        isOpen={isModalOpen}
        closeModal={closeModal}
      />
    </div>
  );
}
