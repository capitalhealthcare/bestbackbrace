import { Container, Row, Col } from "react-bootstrap";
import GuideVideo from "../GuideVideo";
const TextWithImageOne = () => {
  return (
    <>
      <div className="text-image-section space-pt--r100 space-pb--r100">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="about-img scene mb-4 mb-lg-0">
                <img src="/assets/images/about.jpg" alt="about_img" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="heading-s1 space-mb--20">
                <h2>Who We are</h2>
              </div>
              <p>
                At the heart of our identity lies a deep-rooted commitment to
                alleviating physical discomfort and enhancing mobility. Since
                our inception, we've been singularly focused on delivering the
                highest quality back braces, meticulously designed to offer
                unparalleled support and relief. Our profound understanding of
                the challenges faced by those with back issues propels us to
                constantly innovate, ensuring we're at the forefront of
                ergonomic solutions. As a beacon in the world of back support,
                we pride ourselves on the tangible difference we've made in
                countless lives.While our legacy is firmly anchored in back
                braces, our vision for the future is expansive and inclusive. We
                are excitedly gearing up to introduce a comprehensive range of
                braces for various needs
              </p>
            </Col>
          </Row>
        </Container>
        <GuideVideo pt={true} pb={false} />
      </div>
    </>
  );
};

export default TextWithImageOne;
