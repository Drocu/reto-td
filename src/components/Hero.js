import React from "react";
import "./Hero.css";

const Hero = ({imageSrc}) => {
    return ( 
        <div className="hero">
            <img src={imageSrc} alt="Travel" className="hero__image"/>
            <h1 className="hero__title">Travel in Perú.</h1>
        </div>
     );
}
 
export default Hero;