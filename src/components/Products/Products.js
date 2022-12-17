import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../redux/products/products";

const Products = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.products);
  useEffect(() => {
      dispatch(getProducts());
  }, [dispatch]);


  return (
    <div>
        {result.products.map((product) => {
          return (
            <li key={product.id}>
            <img src={product.image} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </li>
          );
        })}
    </div>
  );
};

export default Products;
