import renderer from "react-test-renderer";
import {
  render,
  waitFor,
  fireEvent,
  screen,
  cleanup,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import store from "../../../redux/store";
import Cart from "../Cart";

describe("Test Products Component", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Cart />
        </Router>
      </Provider>
    )
    .toJSON();
  it("renders cart items", () => {
    expect(tree).toMatchSnapshot();
  });
  it("has total price text", () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <Cart />
        </Router>
      </Provider>
    );
    expect(screen.getByText("Total price")).toBeInTheDocument();
  });
});
