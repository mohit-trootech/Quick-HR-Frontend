/**User Datalist */

const UserDataList = ({ data }) => {
  return (
    <>
      {data &&
        data.map((user) => (
          <option key={user.id} value={user.id}>
            {user.username}
          </option>
        ))}
    </>
  );
};

export default UserDataList;
