import Link from "next/link";
import { LayoutFour } from "../layouts";
import { HeroSliderOne } from "../components/HeroSlider";
import { Container, Row, Col } from "react-bootstrap";
import heroSliderOneData from "../data/hero-sliders/hero-slider-one.json";

const NotFound = () => {
  return (
    <div className="not-found-content space-pt--r100 space-pb--r100">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg={6} md={10}>
            <div className="text-center">
              <div className="error-txt">404</div>
              <h5 className="mb-2 mb-sm-3">
                oops! The page you requested was not found!
              </h5>
              <p>
                The page you are looking for was moved, removed, renamed or
                might never existed.
              </p>

              <Link href="/" className="btn btn-fill-out">
                Back To Home
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;
