import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { 
  getCartCount, 
  getCartProducts, 
  getSubTotal,
  removeCartItem, 
  increment, 
  decrement 
} from "../../redux/cart/cart";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBCardText,
  MDBTypography,
} from "mdb-react-ui-kit";
import "./cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart, totalCount } = useSelector((state) => state.cart);
  let total = 0;
  cart.map(product => {
    return (total = total + product.price * product.quantity)
  })
  useEffect(() => {
    dispatch(getCartProducts);
    dispatch(getCartCount())
    dispatch(getSubTotal());
  }, [dispatch]);

  let displayCart;
  if (cart !== undefined && cart.length > 0) {
    displayCart = (
      <>
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol size="12">
                <MDBCard
                  className="card-registration card-registration-2"
                  style={{ borderRadius: "15px" }}
                >
                  <MDBCardBody className="p-0">
                    <MDBRow className="g-0">
                      <MDBCol lg="8">
                        <div className="p-5">
                          <div className="d-flex justify-content-between align-items-center mb-5">
                            <MDBTypography
                              tag="h1"
                              className="fw-bold mb-0 text-black"
                            >
                              Shopping Cart
                            </MDBTypography>
                            <MDBTypography className="mb-0 text-muted">
                            {totalCount} item(s) added
                            </MDBTypography>
                          </div>

                          <hr className="my-4" />

                          {cart !== undefined &&
                            cart.length > 0 &&
                            cart.map((product, index) => {
                              return (
                                <MDBRow className="mb-4 d-flex justify-content-between align-items-center" key={index}>
                                  <MDBCol md="2" lg="2" xl="2">
                                    <MDBCardImage
                                      src={product.image}
                                      fluid
                                      className="rounded-3"
                                      alt="product"
                                    />
                                  </MDBCol>
                                  <MDBCol md="3" lg="3" xl="3">
                                    <MDBTypography
                                      tag="h6"
                                      className="text-black"
                                    >
                                      {product.title}
                                    </MDBTypography>
                                    <MDBTypography
                                      tag="h6"
                                      className="text-muted mb-0"
                                    >
                                      {product.description.substring(0, 21)}...
                                    </MDBTypography>
                                  </MDBCol>
                                  <MDBCol
                                    md="3"
                                    lg="3"
                                    xl="3"
                                    className="d-flex align-items-center"
                                  >
                                    <MDBBtn color="link" className="px-2">
                                      <MDBIcon fas icon="minus" 
                                       onClick={() => {
                                        dispatch(decrement(product.id))
                                        dispatch(getSubTotal())
                                        dispatch(getCartCount())
                                      }}
                                      />
                                    </MDBBtn>

                                    <MDBTypography
                                    tag="h6"
                                    className="text-muted mb-0"
                                    >
                                      {product.quantity}
                                    </MDBTypography>

                                    <MDBBtn color="link" className="px-2">
                                      <MDBIcon fas icon="plus"
                                      onClick={() => {
                                        dispatch(increment(product.id))
                                        dispatch(getSubTotal())
                                        dispatch(getCartCount())
                                      }}
                                      />
                                    </MDBBtn>
                                  </MDBCol>
                                  <MDBCol
                                    md="3"
                                    lg="2"
                                    xl="2"
                                    className="text-end"
                                  >
                                    <MDBTypography tag="h6" className="mb-0">
                                      {product.price}
                                    </MDBTypography>
                                  </MDBCol>
                                  <MDBCol
                                    md="1"
                                    lg="1"
                                    xl="1"
                                    className="text-end"
                                  >
                                    <a href="#!" className="text-muted">
                                      <MDBIcon fas icon="times" 
                                      onClick={() => {
                                        dispatch(removeCartItem(product.id))
                                        dispatch(getSubTotal())
                                        dispatch(getCartCount())
                                      }}
                                      />
                                    </a>
                                  </MDBCol>
                                </MDBRow>
                              );
                            })}
                          <hr className="my-4" />

                          <div className="pt-5">
                            <MDBTypography tag="h6" className="mb-0">
                              <MDBCardText
                                tag="a"
                                href="#!"
                                className="text-body"
                              >
                                <MDBIcon fas icon="long-arrow-alt-left me-2" />{" "}
                                <Link to="/">Back to shop</Link>
                              </MDBCardText>
                            </MDBTypography>
                          </div>
                        </div>
                      </MDBCol>
                      <MDBCol lg="4" className="bg-grey">
                        <div className="p-5">
                          <MDBTypography
                            tag="h3"
                            className="fw-bold mb-5 mt-2 pt-1"
                          >
                            Summary
                          </MDBTypography>

                          <hr className="my-4" />

                          <div className="d-flex justify-content-between mb-4">
                            <MDBTypography tag="h5" className="text-uppercase">
                            {totalCount} item(s) added
                            </MDBTypography>
                            <MDBTypography tag="h5">$ {total}</MDBTypography>
                          </div>

                          <hr className="my-4" />

                          <div className="d-flex justify-content-between mb-5">
                            <MDBTypography data-testid="total-text" tag="h5" className="text-uppercase">
                              Total price
                            </MDBTypography>
                            <MDBTypography tag="h5">$ {total}</MDBTypography>
                          </div>
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </>
    );
  } else {
    displayCart = (
      <div className="w-100 alert alert-warning mt-5">
        <h2 className="h4 text-center mb-3">Your cart is empty</h2>
        <p className="text-center">Looks like you have not added products to your cart. Let's buy some.</p>
        <div className="text-center">
          <Link to="/" className="btn btn-danger">Shop now</Link>
        </div>
      </div>
    );
  }

  return <>{displayCart}</>;
};

export default Cart;
