/**Rating Component */

const Rating = ({ rating, id }) => {
  /**DaisyUI Rating Component */
  return (
    <>
      <div className="rating rating-sm">
        <input
          type="radio"
          name={`rating-${id}`}
          disabled
          defaultChecked={0 < rating && rating <= 1 ? true : false}
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name={`rating-${id}`}
          disabled
          defaultChecked={1 < rating && rating <= 2 ? true : false}
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name={`rating-${id}`}
          disabled
          defaultChecked={2 < rating && rating <= 3 ? true : false}
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name={`rating-${id}`}
          disabled
          defaultChecked={3 < rating && rating <= 4 ? true : false}
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name={`rating-${id}`}
          disabled
          defaultChecked={4 < rating && rating <= 5 ? true : false}
          className="mask mask-star-2 bg-orange-400"
        />
      </div>
    </>
  );
};

export default Rating;
