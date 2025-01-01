/**User Datalist */

const UserDataList = ({ data }) => {
  return (
    <>
      {data &&
        data.map((user) => (
          <option key={user.user.id} value={user.user.id}>
            {user.user.username}
          </option>
        ))}
    </>
  );
};

export default UserDataList;
