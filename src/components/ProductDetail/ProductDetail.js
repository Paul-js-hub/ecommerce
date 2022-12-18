import { useLocation }from 'react-router-dom'
import {Button, Col, Row} from 'antd'
const ProductDetail = () => {
    const { state } = useLocation();
    const { product } = state || {};
    return product ? (
        <Row>
            <Col span={12}>
            <img src={product.image} alt='product'/>
            </Col>
            <Col span={12}>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <Button type='primary'>Add to Cart</Button>
            </Col>
        </Row>
    ) : " No product found";
}

export default ProductDetail