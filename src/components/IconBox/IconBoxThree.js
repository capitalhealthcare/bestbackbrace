import { Container, Row, Col } from "react-bootstrap";

const IconBoxThree = () => {
  return (
    <div className="icon-box-area">
      <Container>
        <Row className="gx-0">
          <Col lg={4} sm={6}>
            <div className="icon-box icon-box--style4">
              <div className="icon-box__icon">
                <i className="flaticon-shipped" />
              </div>
              <div className="icon-box__content">
                <h6>Free Delivery</h6>
                <p>Free delivery up to $300, wherever you are</p>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6}>
            <div className="icon-box icon-box--style4">
              <div className="icon-box__icon">
                <i className="flaticon-support" />
              </div>
              <div className="icon-box__content">
                <h6>27/4 Online Support</h6>
                <p>27/4 assistance, because you're our priority</p>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6}>
            <div className="icon-box icon-box--style4">
              <div className="icon-box__icon">
                <i className="flaticon-lock" />
              </div>
              <div className="icon-box__content">
                <h6>Payment Security</h6>
                <p>Your transactions are safe with us</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IconBoxThree;
