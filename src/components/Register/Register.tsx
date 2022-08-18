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
          <label htmlFor="userName">User:</label>
          <input
            type="text"
            required
            autoComplete="off"
            onChange={handleChange}
            id="userName"
            value={formData.userName}
          />
        </div>
        <div>
          <label htmlFor="passWord">Password:</label>
          <input
            type="password"
            required
            onChange={handleChange}
            id="passWord"
            value={formData.passWord}
          />
        </div>
        <button type="submit">Regiser</button>
      </form>
    </>
  );
};
export default Register;
