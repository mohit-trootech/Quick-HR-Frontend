/**Project Timeline */
import TimelineActivityItem from "../../components/project/TimelineActivityItem";
const ProjectTimeLine = ({ activities }) => {
  return (
    <>
      {activities.map((activity) => {
        return (
          <>
            <TimelineActivityItem activity={activity} key={activity.id} />
          </>
        );
      })}
    </>
  );
};
export default ProjectTimeLine;
