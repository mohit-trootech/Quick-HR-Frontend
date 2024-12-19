/**Project Timeline */
import TimelineActivityItem from "../../components/project/TimelineActivityItem";
const ProjectTimeLine = ({ activities }) => {
  return (
    <>
      {activities.map((activity) => (
        <TimelineActivityItem key={activity.id} activity={activity} />
      ))}
    </>
  );
};
export default ProjectTimeLine;
