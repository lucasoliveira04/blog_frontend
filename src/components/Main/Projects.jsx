/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({
  title,
  description,
  language,
  framework,
  createdAt,
  img,
  urlGithub,
}) => {
    const formatDate = (dateString) => {
        const options = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }
        return new Date(dateString).toLocaleDateString('pt-BR', options);
    }

  return (
    <div className="card mb-3">
      <img src={img} className="card-img-top" alt="Project Image" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted">{language} | {framework}</small>
        </p>
        <p className="card-text">
          <small className="text-muted">{formatDate(createdAt)}</small>
        </p>
        <Link to={urlGithub} className="link-underline-info">
          GitHub
        </Link>
      </div>
    </div>
  );
};

export const MainProjectCard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://api-myblog-jtlo.onrender.com/api/projects/get/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data || []))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          language={project.language}
          framework={project.framework}
          createdAt={project.createdAt}
          img="url_da_imagem_padrao" 
          urlGithub="url_do_github_padrao" 
        />
      ))}
    </div>
  );
};
