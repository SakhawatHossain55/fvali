import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const SignInForm = () => {
  return (
    <div className="login__component">
      <Container>
        <div className="login_main py-5">
          <Row>
            <Col
              md={{ span: 4, offset: 4 }}
              className="float-center bg-white p-5 shadow-sm rounded"
            >
              <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter Your name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter Your email"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                  />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button variant="dark">LOGIN</Button>
                </div>
              </Form>
              <div className="login-form-info  text-center">
                <p className="py-4">
                  {` Don't have an account?`}
                  <a href="/login" className="text-primary ps-3">
                    Login
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default SignInForm;
