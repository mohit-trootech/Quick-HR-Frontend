const ProjectDataList = ({ data }) => {
  /**Project Datalist */
  return (
    <>
      {data &&
        data.map((project) => (
          <option key={project.id} value={project.id}>
            {project.title}
          </option>
        ))}
    </>
  );
};

export default ProjectDataList;
