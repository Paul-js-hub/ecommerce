import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
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

  it("displays total price text", () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <Cart />
        </Router>
      </Provider>
    );
    const element = screen.getByRole("heading", {
      name: "Your cart is empty",
    });
    expect(element).toBeInTheDocument();
  });
});
