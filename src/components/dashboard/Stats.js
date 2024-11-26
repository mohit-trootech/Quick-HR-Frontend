/** */
const Stats = () => {
  return (
    <>
      <div className="flex flex-row justify-around gap-2 items-center">
        <div className="flex flex-col px-2">
          <div className="stat-value text-base">31K</div>
          <div className="stat-desc">Jan</div>
        </div>
        <div class="bg-neutral-400 h-10 w-px"></div>
        <div className="flex flex-col px-2">
          <div className="stat-value text-base">4,200</div>
          <div className="stat-desc">(22%)</div>
        </div>
        <div class="bg-neutral-400 h-10 w-px"></div>
        <div className="flex flex-col px-2">
          <div className="stat-value text-base">1,200</div>
          <div className="stat-desc">(14%)</div>
        </div>
      </div>
    </>
  );
};

export default Stats;
