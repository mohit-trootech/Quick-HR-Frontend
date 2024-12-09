const ProjectDataList = ({ data }) => {
  /**Project Datalist */

  return (
    <>
      <datalist id="project_datalist">
        {data &&
          data.count > 0 &&
          data.results.map((project) => (
            <option key={project.id} value={project.title}></option>
          ))}
      </datalist>
    </>
  );
};

export default ProjectDataList;
