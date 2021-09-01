import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import logo from "assets/images/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import { FiShoppingBag, FiUser } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsChatSquare } from "react-icons/bs";
import { AppState } from "redux/store";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { logout } from "redux/actionCreators/authActionCreators";

function HeaderMiddel() {
  const dispatch = useDispatch();
  const cart = useSelector((state: AppState) => state.cart);
  const { data } = useSelector((state: AppState) => state.auth);

  return (
    <div className="header__middle py-3">
      <Container>
        <Row className="justify-content-between">
          <Col md="auto">
            <div className="header__middle--logo">
              <a href="#">
                <img src={logo} alt="" />
              </a>
            </div>
          </Col>
          <Col
            md={7}
            className="header__middle--search d-flex justify-content-end align-items-center"
          >
            <Form className="w-100">
              <div className="header__middle--search--form d-flex rounded">
                <Form.Control id="inlineFormInputName" placeholder="Jane Doe" />
                <Button className="px-4" type="submit">
                  <AiOutlineSearch />
                </Button>
              </div>
            </Form>
          </Col>

          <Col
            md="auto"
            className="d-flex gap-4 justify-content-end align-items-center header__middle--notification"
          >
            <div className="d-flex">
              <button>
                <Link to="/checkout">
                  <FiShoppingBag />
                  <span className="badge bg-primary">{cart.length}</span>
                </Link>
              </button>
            </div>

            <div className="d-flex">
              <button>
                <IoMdNotificationsOutline />
              </button>
            </div>
            <div className="d-flex">
              <button>
                <BsChatSquare />
              </button>
            </div>
            <div className="d-flex">
              <button>
                <Link to="/login">
                  <FiUser />
                </Link>
              </button>
            </div>
            {data && (
              <div className="d-flex">
                <button onClick={() => dispatch(logout())}>
                  <FaSignOutAlt />
                </button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeaderMiddel;
