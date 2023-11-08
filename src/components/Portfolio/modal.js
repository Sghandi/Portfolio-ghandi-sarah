import React from "react";
import "./modal.css";

export default function Modal({ image, isOpen, closeModal }) {
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div onClick={closeModal} className="overlay"></div>
          <div className="modal-content">
            <h2>{image.title}</h2>
            <button id="category-design">{image.category}</button>
            <img id="image-site" src={image.site} />
            <h3>Scénario</h3>
            <p>{image.description}</p>
            <h3>Missions</h3>
            <ul>
              {image.paragraph.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <a href={image.lien} target="_blank" rel="noopener noreferrer">
              Voir le code sur GitHub
            </a>
            <button className="close-modal" onClick={closeModal}>
              <img src="./logos/close.png" alt="Logo fermé" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
