/** */
const Stats = () => {
  return (
    <>
      <div className="flex flex-row justify-around items-center">
        <div className="flex flex-col px-2 justify-center items-center">
          <div className="stat-value text-base">31K</div>
          <div className="stat-desc">Checked-In</div>
        </div>
        <div className="bg-neutral-400 h-10 w-px"></div>
        <div className="flex flex-col px-2 justify-center items-center">
          <div className="stat-value text-base">4,200</div>
          <div className="stat-desc">Productivity</div>
        </div>
        <div className="bg-neutral-400 h-10 w-px"></div>
        <div className="flex flex-col px-2 justify-center items-center">
          <div className="stat-value text-base">1,200</div>
          <div className="stat-desc">Experience</div>
        </div>
      </div>
    </>
  );
};

export default Stats;
