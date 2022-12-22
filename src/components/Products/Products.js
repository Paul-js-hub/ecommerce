import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../redux/products/products";
import { getCartCount, getSubTotal } from "../../redux/cart/cart";
import Product from "./Product";
import { Row } from "antd";
import Spinner from 'react-bootstrap/Spinner';
import "./products.css";

const Products = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.products);
  const { pending } = result;
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCartCount());
    dispatch(getSubTotal())
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
        {pending ? (
         <Spinner animation="border" role="status" className="spinner-container">
         <span className="visually-hidden">Loading...</span>
       </Spinner>
        ) : <>{result.products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}</>}
      </Row>
    </div>
  );
};

export default Products;
