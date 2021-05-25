import { useContext } from "react";
import { useHistory } from "react-router";
import { Store } from "../App";
import { LoginForm } from "./login-form";

export const UserForm = () => {
  const { state: {
    isAuthenticated,
    user
  }, actions: {
    logoutUser
  } } = useContext(Store);

  const history = useHistory();

  const handelClick = () => {
    try {
      logoutUser();
      history.push('./');
    } catch (error) {
      alert('Smt goes wrong. You can not be logged out. Try again')
    }
  }

  if (isAuthenticated) {
    return (
      <div className="logout">
        <div className="logout__field">
          <span>Hello, {user.name}</span>
        </div>
        <button onClick={handelClick}>Log Out</button>
      </div>
    );
  }

  return <LoginForm />
};