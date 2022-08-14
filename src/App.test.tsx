import { Provider } from "react-redux";
import TestRenderer from "react-test-renderer";
import App from "./App";
import { store } from "./app/store";

describe("Given an App component", () => {
  describe("When it's rendered and gets snapshotted", () => {
    test("Then it should show a show a snapshot of App", () => {
      const expectedAppSnapshot = TestRenderer.create(
        <Provider store={store}>
          <App />
        </Provider>
      );

      expect(expectedAppSnapshot).toMatchSnapshot();
    });
  });
});
