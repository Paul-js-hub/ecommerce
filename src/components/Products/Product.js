import { Card, Col } from "antd";
const { Meta } = Card;
const Product = ({title, image, description, price}) => {
  return (
    <div>
      <Col>
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
          <Meta title={title} description={description} price={price}/>
        </Card>
      </Col>
    </div>
  );
};

export default Product;
