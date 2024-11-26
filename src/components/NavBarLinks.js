/* eslint-disable jsx-a11y/no-redundant-roles */
/**Nav Bar Links */
import { getLocalStorage } from "../utils/utils";
function NavBarLinks() {
  /**Nav Bar Links Based on User Authentication */
  const accessToekn = getLocalStorage("access");
  if (accessToekn) {
    return (
      <>
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li>
          <button role="button">Logout</button>
        </li>
      </>
    );
  } else {
    return (
      <>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
      </>
    );
  }
}

export default NavBarLinks;
