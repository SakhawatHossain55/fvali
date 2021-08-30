import imageUrlParser from "utils/imageUrlParser";
import { FaRegTimesCircle } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import { IProduct } from "types";

interface IProp {
  item: IProduct;
}

const CartItem = ({ item }: IProp) => {
  const { name, image, price } = item;
  return (
    <Row>
      <Col md={1}>
        <img className="img-fluid" src={imageUrlParser(image)} alt={name} />
      </Col>
      <Col>
        <h5 className="mt-4">{name}</h5>
      </Col>
      <Col md={2} className="d-flex justify-content-between align-items-center">
        <button className="btn">
          <FaRegTimesCircle />
        </button>
        <h6 className="m-0">৳ {price}</h6>
      </Col>
    </Row>
  );
};

export default CartItem;
