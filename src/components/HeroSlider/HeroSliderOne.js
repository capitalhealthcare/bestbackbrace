import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { EffectFade } from "swiper";
import Swiper, { SwiperSlide } from "../swiper";

const params = {
  // effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  modules: [EffectFade],
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: false,
};

const HeroSliderOne = ({ heroSliderData }) => {
  return (
    <div className="hero-slider">
      <div className="hero-slider__wrapper">
        {!!heroSliderData.length ? (
          <Swiper options={params} navClass="hero-slider-one">
            {heroSliderData.map((single, key) => (
              <SwiperSlide
                className="hero-slider__slide bg-image"
                style={{ backgroundImage: `url(${single.backgroundImage})` }}
                key={key}
              >
                <div className="hero-slider__content-wrapper">
                  <Container>
                    <Row>
                      <Col lg={6}>
                        <div className="hero-slider__content overflow-hidden">
                          <h2 className="space-mb--20 title text-white">
                            {single.title}
                          </h2>
                          <h5 className="mb-3 font-weight-light sub-title text-white">
                            {single.subtitle}
                          </h5>
                          <Link
                            href="/products"
                            className="btn btn-fill-out rounded-0 text-uppercase slider-link"
                          >
                            Shop Now
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </div>
    </div>
  );
};

export default HeroSliderOne;
