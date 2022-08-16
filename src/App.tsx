import CardList from "./components/CardList/CardList";
import useApi from "./features/robots/hooks/useApi";

const App = () => {
  const { loginUser } = useApi();

  const payloadTest = {
    id: "ffefewfw",
    userName: "fefewfw",
  };

  return (
    <>
      <button onClick={() => loginUser(payloadTest)}>Login</button>
      <CardList />
    </>
  );
};

export default App;
