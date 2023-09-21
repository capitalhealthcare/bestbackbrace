import { Container, Row, Col } from "react-bootstrap";
import { LayoutOne } from "../../layouts";
import { Sidebar, BlogSinglePostDefault } from "../../components/Blog";
import { BannerOne } from "../../components/Banner";

const PostLeftSidebar = () => {
  return (
    <LayoutOne>
      {/* banner */}
      <BannerOne imgPaht={"/assets/images/blog-detail.jpg"} />
      {/* breadcrumb */}
      <div className="blog-content py-5">
        <Container>
          <Row>
            <Col lg={9}>
              <BlogSinglePostDefault />
            </Col>
            <Col lg={3} className="order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0">
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
};

export default PostLeftSidebar;
