import CardList from "./components/CardList/CardList";
import useApi from "./features/robots/hooks/useApi";

const App = () => {
  const { loadRobots, loginUser } = useApi();

  const payloadTest = {
    id: "ffefewfw",
    userName: "fefewfw",
  };

  return (
    <>
      <button onClick={() => loginUser(payloadTest)}>Login</button>
      <button onClick={() => loadRobots()}>Load Robots</button>
      <CardList />
    </>
  );
};

export default App;
