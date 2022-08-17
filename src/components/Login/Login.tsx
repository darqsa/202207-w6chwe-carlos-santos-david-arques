import { SyntheticEvent, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import useUser from "../../features/users/hooks/useUser";

const Login = (): JSX.Element => {
  const { login, logout } = useUser();
  const [formData, setFormData] = useState({
    userName: "",
    passWord: "",
  });

  const userState = useSelector((state: RootState) => state.users);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    login(formData);
  };

  const handleLogout = () => {
    logout();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };
  if (!userState.id) {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="text">User:</label>
            <input
              type="text"
              required
              autoComplete="off"
              onChange={handleChange}
              id="password"
              value={formData.userName}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              required
              onChange={handleChange}
              id="password"
              value={formData.passWord}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </>
    );
  } else {
    return (
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    );
  }
};
export default Login;
