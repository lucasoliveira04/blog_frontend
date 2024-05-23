
// eslint-disable-next-line react/prop-types
const FilterOptions = ({ selectedLanguage, onLanguageChange }) => {
    
    const handleLanguageChange = (event) => {
        const languageName = event.target.value;
        onLanguageChange(languageName);

        if (languageName === "all"){
            window.location.reload();
        } 
     
    };

    return (
        <div>
            <select value={selectedLanguage} onChange={handleLanguageChange} className="form-select" aria-label="Default select example">
                <option value="all">All Languages</option>
                <option value="Python">Python</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Java">Java</option>
            </select>
        </div>
    );
};

export default FilterOptions;
