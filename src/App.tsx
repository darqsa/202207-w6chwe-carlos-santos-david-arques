import { AppContainerStyled } from "./AppStyled";
import CardList from "./components/CardList/CardList";
import NewRobot from "./components/Form/Form";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <>
      <AppContainerStyled>
        <Login />
        <NewRobot />
        <CardList />
      </AppContainerStyled>
    </>
  );
};

export default App;
