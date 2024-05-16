import "../../public/homeUser/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Github from "../../public/image/github.png";
import Gmail from "../../public/image/gmail.png";
import Linkedin from "../../public/image/linkedin.png";
import Instagram from "../../public/image/instagram.png";

const Imgs = ({ name, Link, width, height }) => {
    return (
        <img src={Link} alt={name} width={width} height={height} className="me-2" style={{cursor: "pointer"}} />
    );
};

export const HeaderC = () => {
    const width = 50;
    const height = 50;

    const images = [
        { Link: Github, name: "github", width, height },
        { Link: Gmail, name: "gmail", width, height },
        { Link: Linkedin, name: "linkedin", width, height },
        { Link: Instagram, name: "twitter", width, height },
    ];
    return (
        <header className="header d-flex align-items-center justify-content-around bg-black" style={{height: "10vh"}}>
            <h1 className="fw-bold" style={{cursor: "pointer", fontSize: "5rem", fontFamily: 'Roboto, sans-serif', fontWeight: "900", color: "white"}}>Lucas Oliveira</h1>
            <span className="span d-flex">
                {images.map((image, index) => (
                    <Imgs key={index} name={image.name} Link={image.Link} width={image.width} height={image.height} />
                ))}
            </span>
        </header>
    )
}
