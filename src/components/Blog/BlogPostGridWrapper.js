import { Row, Col } from "react-bootstrap";
import Link from "next/link";
import { FaRegComments, FaCalendarAlt } from "react-icons/fa";
import Swiper, { SwiperSlide } from "../swiper";

const params = {
  loop: false,
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
};

const BlogPostGridWrapper = ({ columns, customClass }) => {
  return (
    <Row>
      <Col xl={columns && columns == 4 ? 3 : 4} md={6}>
        <div
          className={`blog-post blog-post--style-two ${
            customClass ? customClass : ""
          }`}
        >
          <div className="blog-post__image">
            <Link href="/blog/blog-detail">
              <img src="/assets/images/blog/1.jpg" alt="blog_small_img1" />
            </Link>
          </div>
          <div className="blog-post__content">
            <div className="blog-text">
              <h6 className="blog-title">
                <Link href="/blog/blog-detail">
                  Why is a ticket to Lagos so expensive?
                </Link>
              </h6>
              <p className="text-dark">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything new .....
              </p>
            </div>
          </div>
        </div>
      </Col>
      <Col xl={columns && columns == 4 ? 3 : 4} md={6}>
        <div
          className={`blog-post blog-post--style-two ${
            customClass ? customClass : ""
          }`}
        >
          <div className="blog-post__image">
            <Link href="/blog/blog-detail">
              <img src="/assets/images/blog/2.jpg" alt="blog_small_img1" />
            </Link>
          </div>
          <div className="blog-post__content">
            <div className="blog-text">
              <h6 className="blog-title">
                <Link href="/blog/blog-detail">
                  Why is a ticket to Lagos so expensive?
                </Link>
              </h6>
              <p className="text-dark">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything new .....
              </p>
            </div>
          </div>
        </div>
      </Col>
      <Col xl={columns && columns == 4 ? 3 : 4} md={6}>
        <div
          className={`blog-post blog-post--style-two ${
            customClass ? customClass : ""
          }`}
        >
          <div className="blog-post__image">
            <Link href="/blog/blog-detail">
              <img src="/assets/images/blog/3.jpg" alt="blog_small_img1" />
            </Link>
          </div>
          <div className="blog-post__content">
            <div className="blog-text">
              <h6 className="blog-title">
                <Link href="/blog/blog-detail">
                  Why is a ticket to Lagos so expensive?
                </Link>
              </h6>
              <p className="text-dark">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything new .....
              </p>
            </div>
          </div>
        </div>
      </Col>
      <Col xl={columns && columns == 4 ? 3 : 4} md={6}>
        <div
          className={`blog-post blog-post--style-two ${
            customClass ? customClass : ""
          }`}
        >
          <div className="blog-post__image">
            <Link href="/blog/blog-detail">
              <img src="/assets/images/blog/4.jpg" alt="blog_small_img1" />
            </Link>
          </div>
          <div className="blog-post__content">
            <div className="blog-text">
              <h6 className="blog-title">
                <Link href="/blog/blog-detail">
                  Why is a ticket to Lagos so expensive?
                </Link>
              </h6>
              <p className="text-dark">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything new .....
              </p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default BlogPostGridWrapper;
