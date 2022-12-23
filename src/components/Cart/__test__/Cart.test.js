import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import store from "../../../redux/store";
import Cart from "../Cart";

describe("Test Cart Component", () => {
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
    
    screen.debug()
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

  it("has text to buy products when cart is empty", () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <Cart />
        </Router>
      </Provider>
    );
    const element = screen.getByText("Looks like you have not added products to your cart. Let's buy some.")
    expect(element).toBeInTheDocument();
  });

  it("has shop now button", () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <Cart />
        </Router>
      </Provider>
    );
    const element = screen.getByText("Shop now")
    expect(element).toBeInTheDocument();
  });

  // it("has shop now button", () => {
  //   const tree = render(
  //     <Provider store={store}>
  //       <Router>
  //         <Cart />
  //       </Router>
  //     </Provider>
  //   );
  //   const element = screen.getByRole("button")
  //   userEvent.click(element)
  // });
});
