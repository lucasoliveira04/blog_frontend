// eslint-disable-next-line no-unused-vars, react/prop-types
export const FilteredTypeProject = ({selectTypeProject, onTypeProject}) => {
    const handleTypeProjectChange = (event) => {
        const typeProject = event.target.value
        onTypeProject(typeProject)

        if (typeProject === "all"){
            window.location.reload()
        }
    }


    return(
        <div>
            <select value={selectTypeProject} onChange={handleTypeProjectChange} className="form-select" aria-label="Default select example">
                <option value="all">All Types</option>
                <option value="Front End">Front End</option>
                <option value="Back End">Back End</option>
            </select>
        </div>
    )
}