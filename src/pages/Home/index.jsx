import { useContext, useEffect, useState } from "react";
import FilterOptions from "../../components/FilterProjects/FilteredProjects";
import { MainProjectCard } from "../../components/Main/Projects";
import { HeaderC } from "../../components/header/HeaderC";
import { ProjectContext } from "../../context/GetDataApi/getDataApi";
import { FilteredTypeProject } from "../../components/FilterProjects/FilteredTypeProject";
import { FilteredProjectByFramework } from "../../components/FilterProjects/FilteredProjectByFramework";

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
        <div className="c3"></div>
      </div>
    </div>
  );
};
