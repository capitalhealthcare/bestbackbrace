import { Fragment } from "react";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import {
  FaRegComments,
  FaCalendarAlt,
  FaQuoteRight,
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaYoutube,
  FaInstagram,
  FaTh,
  FaArrowLeft,
  FaArrowRight,
  FaReplyAll,
} from "react-icons/fa";

const BlogSinglePostDefault = () => {
  return (
    <Fragment>
      <div className="single-post">
        <h2 className="blog-title">
          But I must explain to you how all this mistaken idea
        </h2>
        <div className="blog-img">
          <img src="/assets/images/blog/blog_img1.jpg" alt="blog_img1" />
        </div>
        <div className="blog-content">
          <div className="blog-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              malesuada malesuada metus ut placerat. Cras a porttitor quam, eget
              ornare sapien. In sit amet vulputate metus. Nullam eget rutrum
              nisl. Sed tincidunt lorem sed maximus interdum. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Aenean
              scelerisque efficitur mauris nec tincidunt. Ut cursus leo mi, eu
              ultricies magna faucibus id.
            </p>
            <blockquote className="blockquote">
              <FaQuoteRight />
              <p>
                Integer is metus site turpis facilisis customers. elementum an
                mauris in venenatis consectetur east. Praesent condimentum
                bibendum Morbi sit amet commodo pellentesque at fringilla
                tincidunt risus.
              </p>
            </blockquote>
            <Row>
              <Col sm={6}>
                <div className="single-img">
                  <img
                    className="w-100 mb-4"
                    src="/assets/images/blog/blog_single_img1.jpg"
                    alt="blog_single_img1"
                  />
                </div>
              </Col>
              <Col sm={6}>
                <div className="single-img">
                  <img
                    className="w-100 mb-4"
                    src="/assets/images/blog/blog_single_img2.jpg"
                    alt="blog_single_img2"
                  />
                </div>
              </Col>
            </Row>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              id dolor dui, dapibus gravida elit. Donec consequat laoreet
              sagittis. Suspendisse ultricies ultrices viverra. Morbi rhoncus
              laoreet tincidunt. Mauris interdum convallis metus. Suspendisse
              vel lacus est, sit amet tincidunt erat. Etiam purus sem, euismod
              eu vulputate eget, porta quis sapien. Donec tellus est, rhoncus
              vel scelerisque id, iaculis eu nibh.
            </p>
            <p>
              Duis vestibulum quis quam vel accumsan. Nunc a vulputate lectus.
              Vestibulum eleifend nisl sed massa sagittis vestibulum. Vestibulum
              pretium blandit tellus, sodales volutpat sapien varius vel.
              Phasellus tristique cursus erat, a placerat tellus laoreet eget.
              Fusce vitae dui sit amet lacus rutrum convallis. Vivamus sit amet
              lectus venenatis est rhoncus interdum a vitae velit.
            </p>
            <p>
              Duis vestibulum quis quam vel accumsan. Nunc a vulputate lectus.
              Vestibulum eleifend nisl sed massa sagittis vestibulum. Vestibulum
              pretium blandit tellus, sodales volutpat sapien varius vel.
              Phasellus tristique cursus erat, a placerat tellus laoreet eget.
              Fusce vitae dui sit amet lacus rutrum convallis. Vivamus sit amet
              lectus venenatis est rhoncus interdum a vitae velit.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogSinglePostDefault;
