import { useDispatch } from "react-redux";
import { addToCart, getCartCount } from "../../redux/cart/cart";
import { useLocation }from 'react-router-dom'
import {Button, Col, Row, Typography} from 'antd'
import './productdetail.css'

const { Title } = Typography;
const ProductDetail = () => {
    const dispatch = useDispatch();
    const { state } = useLocation();
    const { product } = state || {};
    const handleAddToCart = () => {
      dispatch(addToCart(product))
      dispatch(getCartCount());
    }
    return product ? (
        <Row>
            <Col span={12}>
            <div className="image">
            <img src={product.image} alt='product'/>
            </div>
            </Col>
            <Col span={12}>
            <div className="content-container">
            <Title level={2}>{product.title}</Title>
            <p>{product.description}</p>
            <strong><p>$ {product.price}</p></strong>
            </div>
            <Button data-testid="add-to-cart" type='primary' onClick={handleAddToCart}>Add to Cart</Button>
            </Col>
        </Row>
    ) : " No product found";
}

export default ProductDetail