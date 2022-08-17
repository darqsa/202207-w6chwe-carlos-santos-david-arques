import { robotsApiUrl } from "../../robots/hooks/useApi";
import { ProtoUser, User } from "../models/User";
import { loginUserAction, logoutUserAction } from "../slices/usersSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import fetchToken from "../../../utils/auth";

export const useUser = () => {
  const dispatch = useDispatch();

  const login = async (userData: ProtoUser) => {
    const data = await fetch(`${robotsApiUrl}users/login`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const {
      user: { token },
    } = await data.json();
    const user = fetchToken(token);

    dispatch<PayloadAction<User>>(loginUserAction(user));

    localStorage.setItem("token", JSON.stringify(user));
  };

  const logout = () => {
    dispatch<PayloadAction>(logoutUserAction());
    localStorage.removeItem("token");
  };

  const register = async (userData: ProtoUser) => {
    try {
      await fetch(`${robotsApiUrl}users/register`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {}
  };

  return { login, logout, register };
};
export default useUser;
