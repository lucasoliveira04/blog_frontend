/* eslint-disable react/prop-types */
export const FilteredProjectByFramework = ({
  selectedFrameworks,
  onFrameworkChange,
}) => {
  const handleFrameworkChange = (event) => {
    const frameworkName = event.target.value;
    onFrameworkChange(frameworkName);

    if (frameworkName === "all") {
      window.location.reload();
    }
  };

  return (
    <div>
      <select
        value={selectedFrameworks}
        onChange={handleFrameworkChange}
        className="form-select"
        aria-label="Default select example"
      >
        <option value="all">All Framework</option>
        <option value="Spring Boot">Spring Boot</option>
        <option value="Tkinter">Tkinter</option>
      </select>
    </div>
  );
};
