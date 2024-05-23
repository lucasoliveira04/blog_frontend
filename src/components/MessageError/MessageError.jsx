import { useContext } from "react";
import { ProjectContext } from "../../context/GetDataApi/getDataApi";

export const MessageError = () => {
  const { error } = useContext(ProjectContext);

  return (
    <div className="alert alert-danger fw-bold">
      <h4 className="alert-heading">Error</h4>
      <p>{error.message}</p>
      <hr />
      <p className="mb-0">Please try again later</p>
    </div>
  );
};
