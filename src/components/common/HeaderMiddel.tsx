import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
// import logo from 'assets/images/fvaly.png';
import { AiOutlineSearch } from "react-icons/ai";
import { FiShoppingBag, FiUser } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsChatSquare } from "react-icons/bs";

function HeaderMiddel() {
  return (
    <div className="header__middle py-3">
      <Container>
        <Row className="justify-content-between">
          <Col md="auto">
            <div className="header__middle--logo">
              <a href="#">
                logo
                {/* <img src={logo} alt="" /> */}
              </a>
            </div>
          </Col>
          <Col
            md={8}
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
                <FiShoppingBag />
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
                <FiUser />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeaderMiddel;
