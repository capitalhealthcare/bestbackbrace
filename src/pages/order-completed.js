import Link from "next/link";
import { LayoutFour } from "../layouts";
import { Container, Row, Col } from "react-bootstrap";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { HeroSliderOne } from "../components/HeroSlider";
import heroSliderOneData from "../data/hero-sliders/hero-slider-one.json";
const OrderCompleted = () => {
  return (
    <LayoutFour>
    <HeroSliderOne heroSliderData={heroSliderOneData} />
      <div className="order-content space-pt--r100 space-pb--r100">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="text-center order-complete">
                <IoIosCheckmarkCircle />
                <div className="heading-s1 space-mb--20">
                  <h3>Your order is completed!</h3>
                </div>
                <p>
                  Thank you for your order! Your order is being processed and
                  will be completed within 3-6 hours. You will receive an email
                  confirmation when your order is completed.
                </p>
                <Link href="/products" className="btn btn-fill-out">
                  Continue Shopping
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutFour>
  );
};

export default OrderCompleted;
