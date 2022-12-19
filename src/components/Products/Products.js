import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../redux/products/products";
import Product from "./Product";
import { Row } from "antd";
import "./products.css";

const Products = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="products-container">
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {result.products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </Row>
    </div>
  );
};

export default Products;
