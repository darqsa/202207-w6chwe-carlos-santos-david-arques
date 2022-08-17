import jwt from "jwt-decode";

const fetchToken = (token: string) => {
  const payloadToken: { id: string; userName: string; iat: string } =
    jwt(token);

  return {
    token: token,
    id: payloadToken.id,
    userName: payloadToken.userName,
  };
};
export default fetchToken;
