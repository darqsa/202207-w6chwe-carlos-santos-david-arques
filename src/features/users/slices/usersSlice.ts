import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models/User";

const initialState: User = { id: "", userName: "", token: "" };

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loginUser: (previousUsers, action: PayloadAction<User>) => action.payload,
    logoutUser: (previousUsers) => initialState,
  },
});

export const { loginUser: loginUserAction, logoutUser: logoutUserAction } =
  usersSlice.actions;
export default usersSlice.reducer;
