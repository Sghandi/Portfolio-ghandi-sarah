import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact-section" id="section4">
      <h2>Un projet ? contactez moi</h2>
      <div className="text-contact">
        <ul id="name-card">
          <li id="special-name">
            <b>GHANDI Sarah</b>
          </li>
          <li>Développeuse web</li>
        </ul>

        <div className="contact-image">
          <img src="./logos/mail.png" alt="Logo mail" />
          <img src="./logos/tel.png" alt="Logo téléphone" />
          <img src="./logos/position.png" alt="Logo position" />
        </div>

        <ul id="personal-info">
          <li>ghandi.sarah33@gmail.com</li>
          <li>0781202355</li>
          <li>Bordeaux, France</li>
        </ul>
      </div>
    </div>
  );
}
