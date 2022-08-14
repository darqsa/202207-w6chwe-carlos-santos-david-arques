import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import useApi from "./features/robots/hooks/useApi";

const App = () => {
  const robots = useSelector((state: RootState) => state.robots);
  const { useLoadRobots } = useApi();
  useLoadRobots();

  return (
    <div>
      {robots.map((robot) => (
        <h2 key={robot.name}>{robot.name}</h2>
      ))}
    </div>
  );
};

export default App;
