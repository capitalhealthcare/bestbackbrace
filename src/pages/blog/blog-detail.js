import { Container, Row, Col } from "react-bootstrap";
import { LayoutFour } from "../../layouts";
import { Sidebar, BlogSinglePostDefault } from "../../components/Blog";
import { BannerOne } from "../../components/Banner";
import { HeroSliderOne } from "../../components/HeroSlider";
import heroSliderOneData from "../../data/hero-sliders/hero-slider-one.json";

const PostLeftSidebar = () => {
  return (
    <LayoutFour>
      {/* banner */}
      <HeroSliderOne heroSliderData={heroSliderOneData} />
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
    </LayoutFour>
  );
};

export default PostLeftSidebar;
