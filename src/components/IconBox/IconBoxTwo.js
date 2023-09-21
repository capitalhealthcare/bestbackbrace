import { Container, Row, Col } from "react-bootstrap";
import { FaPencilAlt, FaLayerGroup, FaRegEnvelope } from "react-icons/fa";

const IconBoxTwo = () => {
  return (
    <div className="icon-box-area bg--blue-two space-pt--r100 space-pb--r70">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8} className=" space-mb--30">
            <div className="heading-s1 text-center space-mb--20">
              <h2>Why Choose Us?</h2>
            </div>
            <p className="text-center">
              Our braces offer unmatched support, blending innovative design
              with quality materials. Choose us for a comfortable, durable
              solution to enhance mobility and alleviate discomfort.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={4} sm={6}>
            <div className="icon-box icon-box--style2">
              <div className="icon-box__icon">
                <FaLayerGroup />
              </div>
              <div className="icon-box__content">
                <h5>Unparalleled Quality</h5>
                <p>
                  Every brace undergoes rigorous testing, ensuring durability
                  and top-tier performance for optimal support.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6}>
            <div className="icon-box icon-box--style2">
              <div className="icon-box__icon">
                <FaLayerGroup />
              </div>
              <div className="icon-box__content">
                <h5>Expertise & Innovation</h5>
                <p>
                  Years of experience drive our constant advancements in brace
                  design and technology.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6}>
            <div className="icon-box icon-box--style2">
              <div className="icon-box__icon">
                <FaLayerGroup />
              </div>
              <div className="icon-box__content">
                <h5>Future-Forward Vision</h5>
                <p>
                  Beyond back braces, we envision a comprehensive range of
                  diverse orthopedic solutions and innovations.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IconBoxTwo;
