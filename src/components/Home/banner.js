import React from 'react';
// import './BannerStyle.scss'
import './banner.css'

export default function Banner() {
    return (
        <div className="Banner-home">
            <img src="/logos/pc-sarah.png" alt="Logo Sarah" />
            <h1>COUCOU, C'EST <span className='color-change'>SARAH</span> <br/> JE SUIS DEVELOPPEUSE <br/>WEB !</h1>
        </div>
    )
}