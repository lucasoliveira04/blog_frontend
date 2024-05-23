import { useState, useEffect, createContext } from "react";

export const ProjectContext = createContext();

// eslint-disable-next-line react/prop-types
const ProjectProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    // Api que retorna todos os projetos
    const fetchAllProjects = async () => {
        try {
            const response = await fetch('https://api-myblog-jtlo.onrender.com/api/projects/get/projects');
            const data = await response.json();
            setProjects(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    // Rota que filtra os projetos pela linguagem utilizada nele
    const fetchProjectByLanguage = async (languageName) => {
        try {
            const url = languageName ? `https://api-myblog-jtlo.onrender.com/api/projects/get/projects/lang/${languageName}` : 'https://api-myblog-jtlo.onrender.com/api/projects/get/projects'
            const response = await fetch(url);
            const data = await response.json();
            setProjects(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    // Rota que filtra os projetos pelo tipo dele
    const fetchProjectByType = async (typeName) => {
        try{
            const response = await fetch(`https://api-myblog-jtlo.onrender.com/api/projects/get/projects/type/${typeName}`);
            const data = await response.json();
            setProjects(data);
        } catch (error){
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    // Rota que filtra os projetos pelp framework utilizada nele
    const fetchProjectByFramework = async (frameworkName) => {
        try{
            const response = await fetch(`https://api-myblog-jtlo.onrender.com/api/projects/get/projects/framework/${frameworkName}`);
            const data = await response.json();
            setProjects(data);
        } catch (error){
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchAllProjects();
    }, []);

    return (
        <ProjectContext.Provider value={{ projects, loading, error, fetchAllProjects, fetchProjectByLanguage, fetchProjectByFramework, fetchProjectByType }}>
            {children}
        </ProjectContext.Provider>
    );
};

export default ProjectProvider;
