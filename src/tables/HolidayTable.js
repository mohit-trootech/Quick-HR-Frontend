/**Tables - Holiday Table */

const HolidayTable = ({ holiday }) => {
  /**Holiday Table DaisyUI Component */
  return (
    <>
      <tr className="hover:bg-slate-50 border-b border-slate-200">
        <td className="p-4 py-5">
          <p className="block font-semibold text-sm text-slate-800">
            {holiday.id}
          </p>
        </td>
        <td className="p-4 py-5">
          <p className="text-sm text-slate-500">{holiday.title}</p>
        </td>
        <td className="p-4 py-5">
          <p className="text-sm text-slate-500">
            {new Date(holiday.starts_from).toDateString()}
          </p>
        </td>
        <td className="p-4 py-5">
          <p className="text-sm text-slate-500">
            {new Date(holiday.ends_on).toDateString()}
          </p>
        </td>
        <td className="p-4 py-5">
          <p className="text-sm text-slate-500">{holiday.no_of_days}</p>
        </td>
      </tr>
    </>
  );
};

export default HolidayTable;
