const TaskDataList = ({ data }) => {
  /**Task Datalist */
  return (
    <>
      {data &&
        data.map((task) => (
          <option key={task.id} value={task.id}>
            {task.title}
          </option>
        ))}
    </>
  );
};

export default TaskDataList;
