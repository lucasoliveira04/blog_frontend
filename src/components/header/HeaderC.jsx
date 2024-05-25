import React from 'react';
import "../../public/homeUser/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Github from "../../public/image/github.png";
import Gmail from "../../public/image/gmail.png";
import Linkedin from "../../public/image/linkedin.png";
import Instagram from "../../public/image/instagram.png";

const Imgs = ({ name, link, width, height, onClick }) => {
    return (
        <img src={link} alt={name} width={width} height={height} className="me-2" style={{ cursor: "pointer" }} onClick={onClick} />
    );
};

export const HeaderC = () => {
    const width = 50;
    const height = 50;

    const images = [
        { link: Github, name: "github", width, height, url: "https://github.com/lucasoliveira04" },
        { link: Gmail, name: "gmail", width, height, url: "mailto:camposdlucasoli@gmail.com" },
        { link: Linkedin, name: "linkedin", width, height, url: "https://www.linkedin.com/in/lucas-oliveira-08334a264/" },
        { link: Instagram, name: "instagram", width, height, url: "https://www.instagram.com/lucasoliveira.04_/" },
    ];

    const handleClick = (url) => {
        window.open(url, "_blank");
    };

    const name = "Lucas Oliveira";

    return (
        <header className="header d-flex align-items-center justify-content-around bg-black" style={{ height: "10vh" }}>
            <h1 className="name-animation fw-bold" style={{ cursor: "pointer", fontSize: "5rem", fontFamily: 'Roboto, sans-serif', fontWeight: "900", color: "white" }}>
                {name.split('').map((letter, index) => (
                    <span key={index} className="letter">{letter}</span>
                ))}
            </h1>
            <span className="span d-flex">
                {images.map((image, index) => (
                    <Imgs key={index} name={image.name} link={image.link} width={image.width} height={image.height} onClick={() => handleClick(image.url)} />
                ))}
            </span>
        </header>
    )
};
