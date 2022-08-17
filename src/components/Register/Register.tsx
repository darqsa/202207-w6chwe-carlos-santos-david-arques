import { SyntheticEvent, useState } from "react";
import useUser from "../../features/users/hooks/useUser";

const Register = (): JSX.Element => {
  const { register } = useUser();
  const [formData, setFormData] = useState({
    userName: "",
    passWord: "",
  });

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    register(formData);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

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
};
export default Register;
