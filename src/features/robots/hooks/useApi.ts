import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../app/store";
import fetchApi from "../../../services/fetchApi";
import { loadRobotsAction } from "../slices/robotsSlice";

const robotsApiUrl = process.env.REACT_APP_ROBOTS_API_URL;
const usersApiUrl = process.env.REACT_APP_USERS_API_URL;

const useApi = () => {
  const dispatch = useDispatch();
  const robots = useSelector((state: RootState) => state.robots);

  const loadRobots = useCallback(async () => {
    const token = localStorage.getItem("token");

    const response = await fetch(`${robotsApiUrl}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { robots } = await response.json();

    dispatch(loadRobotsAction(robots));
  }, [dispatch]);

  const loginUser = async (payload: { id: string; userName: string }) => {
    const response = await fetch(`${usersApiUrl}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const {
      user: { token },
    } = await response.json();

    localStorage.setItem("token", token);
  };

  return { robots, loadRobots, loginUser };
};

export default useApi;
