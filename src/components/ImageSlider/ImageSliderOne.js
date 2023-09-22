import Swiper, { SwiperSlide } from "../swiper";

const params = {
  loop: true,
  slidesPerView: 1,
  grabCursor: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 6,
    },
  },
};

const ImageSliderOne = ({ imageSliderData }) => {
  return (
    <div className="image-slider-area pb-5 position-relative">
      <div className="follow-box" style={{ opacity: "0.7" }}>
        <h5>Support meets style at BestBackBrace</h5>
      </div>
      {!!imageSliderData?.length ? (
        <Swiper options={params}>
          {imageSliderData.map((single, key) => (
            <SwiperSlide className="item" key={key}>
              <div className="instafeed-box">
                <a href="/products">
                  <img src={single.image} alt="insta_image" />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : null}
    </div>
  );
};

export default ImageSliderOne;
