import { Card, Col } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;
const Product = ({product}) => {
  return (
    <div>
      <Col>
        <Link to={`/product/${product.id}`}
        state={{product}}
        >
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img
              alt="product"
              src={product.image}
              style={{
                width: 240,
                height: 240
              }}
            />
          }
        >
          <Meta title={product.title} description={`${product.description.substring(0, 21)}...`}  quantity={product.quantity}/>
          <p>{`$ ${product.price}`}</p>
        </Card>
        </Link>
      </Col>
    </div>
  );
};

export default Product;
