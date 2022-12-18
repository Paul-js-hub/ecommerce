import { Card, Col } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;
const Product = ({id, title, image, description, price}) => {
  return (
    <div>
      <Col>
        <Link to={`/product/${id}`}>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img
              alt="product"
              src={image}
              style={{
                width: 240,
                height: 240
              }}
            />
          }
        >
          <Meta title={title} description={`${description.substring(0, 21)}...`}  />
          <p>{`$ ${price}`}</p>
        </Card>
        </Link>
      </Col>
    </div>
  );
};

export default Product;
