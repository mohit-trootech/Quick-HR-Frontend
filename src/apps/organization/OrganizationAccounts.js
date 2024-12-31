/**Organization Login Page */
/**Context Import */
import { useContext, useState } from "react";
import { UserContext } from "../../context/Contexts";
import OrganizationLoginCard from "../../cards/organization/OrganizationLoginCard";
import OrganizationRegisterCard from "../../cards/organization/OrganizationRegisterCard";
/**Custom Static Files */
import "../../static/css/accounts.css";
// import logo from "../../static/img/logo.png";
const OrganizationAccounts = () => {
  /**Desgined With Daisy UI and Tailwind CSS */
  const [login, setLogin] = useState(true);
  const { toggle, setToggle } = useContext(UserContext);
  const { organizationLoginRequest, organizationRegisterRequest } =
    useContext(UserContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.id === "login-form"
      ? organizationLoginRequest(new FormData(event.target))
      : organizationRegisterRequest(new FormData(event.target));
  };
  return (
    <>
      <div className="relative min-h-screen flex">
        <div className="flex  flex-col items-center justify-center flex-auto min-w-0 bg-white">
          {login ? (
            <OrganizationLoginCard
              handleSubmit={handleSubmit}
              setLogin={setLogin}
              login={login}
              toggle={toggle}
              setToggle={setToggle}
            />
          ) : (
            <OrganizationRegisterCard
              handleSubmit={handleSubmit}
              setLogin={setLogin}
              login={login}
              toggle={toggle}
              setToggle={setToggle}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default OrganizationAccounts;
