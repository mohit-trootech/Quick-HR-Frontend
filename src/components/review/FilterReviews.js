/**Review Filter */
import { MONTHS } from "../../utils/contants";

const FilterReviews = ({ getAllReviews }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getAllReviews(`?month=${e.target.month.value}&year=${e.target.year.value}`);
  };
  return (
    <>
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="flex items-center gap-2 justify-start"
      >
        <label className="form-control w-full">
          <select
            className="select select-bordered select-sm"
            name="month"
            defaultValue={new Date().getMonth()}
          >
            {MONTHS.map((month, index) => (
              <option key={index} value={index}>
                {month}
              </option>
            ))}
          </select>
        </label>
        <label className="form-control w-full">
          <input
            type="number"
            className="input input-bordered input-sm"
            defaultValue={new Date().getFullYear()}
            min="1900"
            max="2099"
            step="1"
            name="year"
          />
        </label>
        <button type="submit" className="btn btn-sm btn-primary">
          Filter
        </button>
      </form>
    </>
  );
};

export default FilterReviews;
