/* eslint-disable react/prop-types */
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from "react";

import GithubDesktopPythonHomeImg from "../../public/image/github_repositorio_viewer/ImgS.png";
import GithubDesktopPythonPesquisarUsernameImg from "../../public/image/github_repositorio_viewer/pesquisandousername.png";
import loginImg from "../../public/image/loginjwt/loginimg.jpg";

const ProjectCard = ({
  id,
  title,
  description,
  language,
  framework,
  createdAt,
  urlGithub,
  typeProject,
  imgUrl,
}) => {
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("pt-BR", options);
  };

  const getImageAltTextByTitle = (projectTitle) => {
    return `Imagem do projeto ${projectTitle}`;
  };

  return (
    <div className="card mb-3">
      {id === 11 ? (
        <Carousel>
          <div>
            <img src={GithubDesktopPythonHomeImg} alt={getImageAltTextByTitle(title)} />
          </div>
          <div>
            <img src={GithubDesktopPythonPesquisarUsernameImg} alt={getImageAltTextByTitle(title)} />
          </div>
        </Carousel>
      ) : (
        <img src={imgUrl} className="card-img-top" alt={getImageAltTextByTitle(title)} />
      )}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted">
            {language} | {framework}
          </small>
        </p>
        <p className="card-text">
          <small className="text-muted">
            {typeProject}
          </small>
        </p>
        <a href={urlGithub} target="_blank" rel="noopener noreferrer" className="link-underline-info">
          GitHub
        </a>
        <p className="card-text">
          <small className="text-muted fw-bolder">{formatDate(createdAt)}</small>
        </p>
      </div>
    </div>
  );
};

export const MainProjectCard = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const projectImageMap = {
    11: [GithubDesktopPythonHomeImg, GithubDesktopPythonPesquisarUsernameImg],
    12: loginImg,
  }

  useEffect(() => {
    fetch("https://api-myblog-jtlo.onrender.com/api/projects/get/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border" role="status">
        </div>
      </div>
    );
  }

  return (
    <div>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
          language={project.language}
          framework={project.framework}
          urlGithub={project.linkProject}
          typeProject={project.typeProject}
          createdAt={project.createdAt}
          imgUrl={projectImageMap[project.id]}
        />
      ))}
    </div>
  );
};
