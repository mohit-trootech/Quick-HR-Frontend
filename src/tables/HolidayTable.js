/**Tables - Holiday Table */

const HolidayTable = ({ holiday }) => {
  /**Holiday Table DaisyUI Component */
  return (
    <>
      <tr className="hover:bg-base-300 border-b">
        <td className="p-4 py-5">
          <p className="block font-semibold text-sm text-gray-400">
            {holiday.id}
          </p>
        </td>
        <td className="p-4 py-5">
          <p className="text-sm text-gray-400">{holiday.title}</p>
        </td>
        <td className="p-4 py-5">
          <p className="text-sm text-gray-400">
            {new Date(holiday.starts_from).toDateString()}
          </p>
        </td>
        <td className="p-4 py-5">
          <p className="text-sm text-gray-400">
            {new Date(holiday.ends_on).toDateString()}
          </p>
        </td>
        <td className="p-4 py-5">
          <p className="text-sm text-gray-400">{holiday.no_of_days}</p>
        </td>
      </tr>
    </>
  );
};

export default HolidayTable;
