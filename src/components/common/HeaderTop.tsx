import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FiPhoneCall, FiSmartphone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

function HeaderTop() {
  return (
    <div className="header__top bg-light py-2">
      <Container>
        <Row>
          <Col>
            <div className="d-flex align-items-center gap-4">
              <div>
                <FiPhoneCall />
                <a href="#">151549494949</a>
              </div>
              <div>
                <AiOutlineMail />
                <a href="#">support@fvaly.com</a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="d-flex align-items-center gap-2 justify-content-end">
              <FiSmartphone />
              <a href="#">Save big on our app!</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeaderTop;
