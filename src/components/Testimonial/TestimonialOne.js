import { Container, Row, Col } from "react-bootstrap";
import Swiper, { SwiperSlide } from "../swiper";

const params = {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 60,
  navigation: true,
};

const TestimonialOne = ({ testimonialData }) => {
  // src = "/assets/images/blog/1.jpg";
  return (
    <div
      className="testimonial-area py-5 my-5"
      style={{
        backgroundColor: "rgb(0, 22, 66)",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="section-title text-center space-mb--25 text-white">
              <h2>Our Client Say!</h2>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={9}>
            <div className="testimonial-wrap">
              {!!testimonialData?.length ? (
                <Swiper options={params} navClass="testimonial-one">
                  {testimonialData.map((single, key) => (
                    <SwiperSlide
                      className="testimonial-box text-center "
                      key={key}
                    >
                      <div className="testimonial-desc space-mb--25 text-white">
                        <p>{single.content}</p>
                      </div>
                      <div className="author-wrap text-start">
                        <div className="author-img">
                          <img src={single.image} alt="user_img1" />
                        </div>
                        <div className="author-name">
                          <h6 className="text-white">{single.name}</h6>
                          {/* <span>{single.designation}</span> */}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : null}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TestimonialOne;
