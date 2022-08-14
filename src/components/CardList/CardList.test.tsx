import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import CardList from "./CardList";

describe("Given a CardList component", () => {
  describe("When invoked", () => {
    test("Then it should render as much robots as the store has", () => {
      render(
        <Provider store={store}>
          <CardList />
        </Provider>
      );

      const robots = screen.getAllByRole("img");

      robots.forEach((robot) => expect(robot).toBeInTheDocument());
    });
  });
});
