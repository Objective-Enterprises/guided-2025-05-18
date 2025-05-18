import React, { useEffect } from "react";
import { Row, Col, Image, Button, ListGroup, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { fetchProductDetails } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Spinner from 'react-bootstrap/Spinner';
import { QUANTITY } from "../constants/productActionConstants";



const ProductPage = () => {
  const { id } = useParams();

  const loading = useSelector(state => state.product.loading)
  const product = useSelector((state) => state.product.product);
  const quantity = useSelector((state) => state.product.quantity) 
  const loggedInUser = JSON.parse(sessionStorage.getItem('userInfo'));
  console.log(loggedInUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductDetails(id))
  }, [dispatch, id])

  return (
    <>
      {loading && <Spinner animation="grow" />}

      <LinkContainer to="/">
        <Button variant="primary" className="mb-4">
          Show All Products
        </Button>
      </LinkContainer>
      {product && (
        <Row>
          <Col md={4}>
            <Image src={product.image} width={300} height={300} fluid />
          </Col>
          <Col md={5}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.title}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <h4>Description : {product.description}</h4>
              </ListGroup.Item>
              <ListGroup.Item>
                <h4>Category : {product.category}</h4>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>
                    <h4>Price : </h4>
                  </Col>
                  <Col>
                    <h4>
                      <strong>${product.price}</strong>
                    </h4>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    <h4>Status : </h4>
                  </Col>
                  <Col>
                    <h4>
                      <strong>{"Available"}</strong>
                    </h4>
                  </Col>
                </Row>
              </ListGroup.Item>

              {loggedInUser && 
              <ListGroup.Item>
                <Row>
                  <Col>
                    <h4>Select Quantity : </h4>
                  </Col>
                  <Col>
                    <Form.Control
                      as="select"
                      value={quantity}
                      onChange={(e) => {
                        dispatch({ type: QUANTITY, payload: e.target.value })
                      }}
                    >
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                    </Form.Control>
                  </Col>
                </Row>
              </ListGroup.Item>
              }
              {loggedInUser && 
              <ListGroup.Item>
                <Button className="btn-block" type="button">
                  Add To Cart
                </Button>
              </ListGroup.Item>
              }
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductPage;
