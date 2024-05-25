import { useContext, useEffect, useState } from "react";
import FilterOptions from "../../components/FilterProjects/FilteredProjects";
import { MainProjectCard } from "../../components/Main/Projects";
import { HeaderC } from "../../components/header/HeaderC";
import { ProjectContext } from "../../context/GetDataApi/getDataApi";
import { FilteredTypeProject } from "../../components/FilterProjects/FilteredTypeProject";
import { FilteredProjectByFramework } from "../../components/FilterProjects/FilteredProjectByFramework";
import { ButtonComponent } from "../../components/buttons/ButtonComponent";

import profile from "../../public/image/perfil.png"
import aboutMe from "../../public/image/bio.png"
import contacts from "../../public/image/livro-de-enderecos.png"
import { Link } from "react-router-dom";

export const HomePageUser = () => {
  
  useEffect(() => {
    document.title = "Pagina inicial"
  }, [])

  const { fetchProjectByLanguage, fetchProjectByType, fetchProjectByFramework} = useContext(ProjectContext);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedTypeProject, setSelectedTypeProject] = useState("");
  const [selectedFramework, setSelectedFramework] = useState("");
  
  const handleLanguageChange = (languageName) => {
    setSelectedLanguage(languageName);
    if (languageName) {
      fetchProjectByLanguage(languageName);
    }
  };

  const handleTypeProjectChange = (typeProject) => {
    setSelectedTypeProject(typeProject);
    if (typeProject) {
      fetchProjectByType(typeProject);
    }
  }

  const handleFrameworkChange = (frameworkName) => {
    setSelectedFramework(frameworkName);
    if (frameworkName) {
      fetchProjectByFramework(frameworkName);
    }
  }

  return (
    <div className="cont">
      <HeaderC />
      <div className="containerColumns">
        <div className="c1">
          <h2>Filtrar Projetos</h2>
            <div className="filteredProjectsSelect">
              <FilterOptions
                selectedLanguage={selectedLanguage}
                onLanguageChange={handleLanguageChange}
              />

            <div className="filteredProjectsTypeProject">
              <FilteredTypeProject 
                selectTypeProject={selectedTypeProject}
                onTypeProject={handleTypeProjectChange}
              />
            </div>

            <div>
              <FilteredProjectByFramework 
                selectedFrameworks={selectedFramework}
                onFrameworkChange={handleFrameworkChange}
              />
            </div>
          </div>

          
        </div>
        <div className="c2">
          <MainProjectCard />
        </div>
        <div className="c3">
          <div className="btnSingle">
            <Link to="/profile">
            <ButtonComponent 
              styleBootstrap={"success"}
              text={"Profile"}
              linkImg={profile}
            />
            </Link>
          </div>
          <div className="btnMultiplayer">
            <Link path="/about-me">
            <ButtonComponent 
              styleBootstrap={"primary"}
              text={"About me"}
              linkImg={aboutMe}
            />
            </Link>

            <Link to="/contacts">
            <ButtonComponent 
              styleBootstrap={"warning"}
              text={"Contacts"}
              linkImg={contacts}
            />
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};
