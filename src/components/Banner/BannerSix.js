import { Container, Row, Col } from "react-bootstrap";

const BannerSix = () => {
  return (
    <div className="banner-area">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="sale-banner mt-5 mb-0 section-title text-center">
              <h1 className="pb-3">PDAC Certification</h1>
              <div href="#" className="hover-effect">
                <img
                  src="/assets/images/banner/PDAC-certification-1.png"
                  alt="shop_banner_img11"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BannerSix;
