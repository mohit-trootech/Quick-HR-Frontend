const TaskDataList = ({ data }) => {
  /**Project Datalist */

  return (
    <>
      <datalist id="task_datalist">
        {data &&
          data.count > 0 &&
          data.results.map((project) => (
            <option key={project.id} value={project.title}></option>
          ))}
      </datalist>
    </>
  );
};

export default TaskDataList;
