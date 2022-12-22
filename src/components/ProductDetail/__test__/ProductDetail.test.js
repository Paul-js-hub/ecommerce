import { render, waitFor, fireEvent, screen, cleanup } from "@testing-library/react";
import ProductDetail from "../ProductDetail";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import store from "../../../redux/store";

describe("Test Product detail component", () => {
    afterEach(cleanup);
  test("it displays product details", async () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <ProductDetail />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
