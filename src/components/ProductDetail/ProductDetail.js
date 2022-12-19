import { useDispatch } from "react-redux";
import { addToCart, getCartCount } from "../../redux/cart/cart";
import { useLocation }from 'react-router-dom'
import {Button, Col, Row} from 'antd'
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
            <img src={product.image} alt='product'/>
            </Col>
            <Col span={12}>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <Button type='primary' onClick={handleAddToCart}>Add to Cart</Button>
            </Col>
        </Row>
    ) : " No product found";
}

export default ProductDetail