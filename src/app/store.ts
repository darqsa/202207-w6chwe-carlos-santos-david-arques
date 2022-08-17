import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import robotsSlice from "../features/robots/slices/robotsSlice";
import usersSlice from "../features/users/slices/usersSlice";

export const store = configureStore({
  reducer: {
    robots: robotsSlice,
    users: usersSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
