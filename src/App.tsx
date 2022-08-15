import { AppContainerStyled } from "./AppStyled";
import CardList from "./components/CardList/CardList";
import NewRobot from "./components/Form/Form";

const App = () => {
  return (
    <>
      <AppContainerStyled>
        <NewRobot />
        <CardList />
      </AppContainerStyled>
    </>
  );
};

export default App;
