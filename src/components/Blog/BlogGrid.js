import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const BlogGrid = ({ customClass }) => {
  return (
    <div className="blog-grid-area">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="section-title text-center space-mb--25">
              <h2>Latest Blogs</h2>
            </div>
            <p className="leads text-center text-dark">
              Explore BestBackBrace's top-tier products, designed with precision
              for optimal support. Each brace promises unparalleled comfort and
              durability. Trust in our expertise for a pain-free posture.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={3} md={6}>
            <div
              className={`blog-post blog-post--style-two ${
                customClass ? customClass : ""
              }`}
            >
              <div className="blog-post__image">
                <Link href="/blog/post-left-sidebar">
                  <img src="/assets/images/blog/1.jpg" alt="blog_small_img1" />
                </Link>
              </div>
              <div className="blog-post__content">
                <div className="blog-text">
                  <h6 className="blog-title">
                    <Link href="/blog/post-left-sidebar">
                      Why is a ticket to Lagos so expensive?
                    </Link>
                  </h6>
                  <p className="text-dark">
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there isn't anything new .....
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div
              className={`blog-post blog-post--style-two ${
                customClass ? customClass : ""
              }`}
            >
              <div className="blog-post__image">
                <Link href="/blog/post-left-sidebar">
                  <img src="/assets/images/blog/2.jpg" alt="blog_small_img1" />
                </Link>
              </div>
              <div className="blog-post__content">
                <div className="blog-text">
                  <h6 className="blog-title">
                    <Link href="/blog/post-left-sidebar">
                      Why is a ticket to Lagos so expensive?
                    </Link>
                  </h6>
                  <p className="text-dark">
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there isn't anything new .....
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div
              className={`blog-post blog-post--style-two ${
                customClass ? customClass : ""
              }`}
            >
              <div className="blog-post__image">
                <Link href="/blog/post-left-sidebar">
                  <img src="/assets/images/blog/3.jpg" alt="blog_small_img1" />
                </Link>
              </div>
              <div className="blog-post__content">
                <div className="blog-text">
                  <h6 className="blog-title">
                    <Link href="/blog/post-left-sidebar">
                      Why is a ticket to Lagos so expensive?
                    </Link>
                  </h6>
                  <p className="text-dark">
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there isn't anything new .....
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div
              className={`blog-post blog-post--style-two ${
                customClass ? customClass : ""
              }`}
            >
              <div className="blog-post__image">
                <Link href="/blog/post-left-sidebar">
                  <img src="/assets/images/blog/4.jpg" alt="blog_small_img1" />
                </Link>
              </div>
              <div className="blog-post__content">
                <div className="blog-text">
                  <h6 className="blog-title">
                    <Link href="/blog/post-left-sidebar">
                      Why is a ticket to Lagos so expensive?
                    </Link>
                  </h6>
                  <p className="text-dark">
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there isn't anything new .....
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogGrid;
