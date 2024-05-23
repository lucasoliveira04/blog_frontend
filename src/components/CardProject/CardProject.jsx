import { useContext } from "react";
import { ProjectContext } from "../../context/GetDataApi/getDataApi";
import { SpinnerLoading } from "../Spinners/SpinnerLoading";
import { MessageError } from "../MessageError/MessageError";

import GithubDesktopPythonHomeImg from "../../public/image/github_repositorio_viewer/ImgS.png";
import GithubDesktopPythonPesquisarUsernameImg from "../../public/image/github_repositorio_viewer/pesquisandousername.png";
import loginImg from "../../public/image/loginjwt/loginimg.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importar os estilos do Carousel

export const CardProject = () => {
  const { projects, loading, error } = useContext(ProjectContext);
  const projectImageMap = {
    11: [GithubDesktopPythonHomeImg, GithubDesktopPythonPesquisarUsernameImg],
    12: loginImg,
  };

  const getImageAltTextByTitle = (projectTitle) => {
    return `Imagem do projeto ${projectTitle}`
  }

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("pt-BR", options);
  }

  // Estilos para o container dos cards
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  // Estilos para cada card
  const cardStyle = {
    marginBottom: "20px",
    maxWidth: "900px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    transition: "transform 0.2s ease-in-out",
  };

  // Estilos para a imagem do card
  const cardImgStyle = {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  };

  // Estilos para o conteúdo do card
  const cardBodyStyle = {
    padding: "20px",
  };

  if (loading) {
    return <SpinnerLoading />;
  }

  if (error) {
    return <MessageError />;
  }

  return (
    <div style={containerStyle}>
      {projects.map((project) => (
        <div key={project.id} style={cardStyle}>
          {project.id === 11 ? (
            <Carousel>
              <div>
                <img src={GithubDesktopPythonHomeImg} alt={project.title} style={cardImgStyle} />
              </div>
              <div>
                <img src={GithubDesktopPythonPesquisarUsernameImg} alt={project.title} style={cardImgStyle} />
              </div>
            </Carousel>
          ) : (
            <img
              src={projectImageMap[project.id]}
              className="card-img-top"
              alt={getImageAltTextByTitle(project.title)}
              style={cardImgStyle}
            />
          )}
          <div className="card h-100" style={cardBodyStyle}>
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
              <p className="card-text">
                <small className="text-muted">
                  {project.language} | {project.framework}
                </small>
              </p>
              <p className="card-text">{project.typeProject}</p>
              <a href={project.linkProject} target="_blank" rel="noopener noreferrer" className="link-underline-info">Github</a>
              <p className="card-text">{formatDate(project.createdAt)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
