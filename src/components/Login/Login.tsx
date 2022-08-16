import { robotsApiUrl } from "../../features/robots/hooks/useApi";

const Login = (): JSX.Element => {
  const handleClick = async () => {
    const mockUser = { userName: "Pepe", passWord: "12345" };

    const data = await fetch(`${robotsApiUrl}users/login`, {
      method: "POST",
      body: JSON.stringify(mockUser),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { token } = await data.json();

    console.log(token.token);
  };
  return (
    <>
      <button onClick={handleClick}>Login</button>
    </>
  );
};
export default Login;
