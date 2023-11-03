import React from 'react';
// import './BannerStyle.scss'
import './banner.css'

export default function Banner() {
    return (
        <div className="Banner-home" id="section1">
            
            <img src="/logos/pc-sarah.png" alt="Logo Sarah" />
            <h1><span className='ombre'>COUCOU, C'EST <span className='color-change'>SARAH</span> <br/> JE SUIS DÉVELOPPEUSE <br/>WEB !</span><br/><a href="#section3"><button>Voir mon Portfolio  ❯❯ </button></a></h1>
            {/* <img src="/logos/fleche-bleue.png" alt="Logo Sarah" id="section-fleche" /> */}
        </div>
    )
}