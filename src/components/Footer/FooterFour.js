import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import {
  IoIosPhonePortrait,
  IoIosMailOpen,
  IoIosPin,
  IoLogoInstagram,
} from "react-icons/io";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaYoutube,
  FaInstagram,
  FaFax,
} from "react-icons/fa";

const FooterFour = () => {
  return (
    <footer className="footer-dark" style={{ backgroundColor: "#001642" }}>
      <div style={{ padding: "25px 0 0" }}>
        <Container>
          <Row>
            <Col lg={3} md={6} sm={12}>
              <div className="widget">
                <div className="footer-logo">
                  <Link href="/">
                    <img src="/assets/images/logo_light.png" alt="logo" />
                  </Link>
                </div>
                <p>
                  Experience ultimate relief with our premium back brace.
                  Whether it's chronic pain, post-injury support, or preventive
                  care, we got your back. Crafted for comfort and durability,
                  let's make every move pain-free.
                </p>
              </div>
              <div className="widget">
                <ul className="social-icons mb-3 mb-lg-0">
                  <li>
                    <a href="#" className="sc_facebook">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sc_twitter">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sc_google">
                      <FaGooglePlusG />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sc_youtube">
                      <FaYoutube />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sc_instagram">
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={12} sm={12}>
              <div className="widget">
                <h6 className="widget-title">Contact Info</h6>
                <ul className="contact-info contact-info-light">
                  <li>
                    <IoIosMailOpen />
                    <a href="mailto:contact@bestbackbrace.com">
                      contact@bestbackbrace.com
                    </a>
                  </li>
                  <li>
                    <IoIosPhonePortrait />
                    <a href="tel:+14698665222">+1 (469) 866 5222</a>
                  </li>
                  <li>
                    <IoIosPin />
                    <p>2071 N collins Blvd Richardson TX 75080</p>
                  </li>
                  <li>
                    <FaFax />
                    <a href="#">469-562-4166</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={2} md={12} sm={12}>
              <div className="widget">
                <h6 className="widget-title">Useful Links</h6>
                <ul className="widget-links">
                  <li>
                    <Link href="/terms">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/faq">FAQ</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={4} md={12} sm={12}>
              <div className="widget">
                <h6 className="widget-title">Instagram</h6>
                <ul className="widget-instafeed widget-instafeed--col4">
                  <li>
                    <a href="#">
                      <img
                        src="/assets/images/instagram/insta1.jpg"
                        alt="insta_img"
                      />
                      <span className="insta-icon">
                        <IoLogoInstagram />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/assets/images/instagram/insta2.jpg"
                        alt="insta_img"
                      />
                      <span className="insta-icon">
                        <IoLogoInstagram />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/assets/images/instagram/insta3.jpg"
                        alt="insta_img"
                      />
                      <span className="insta-icon">
                        <IoLogoInstagram />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/assets/images/instagram/insta4.jpg"
                        alt="insta_img"
                      />
                      <span className="insta-icon">
                        <IoLogoInstagram />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/assets/images/instagram/insta5.jpg"
                        alt="insta_img"
                      />
                      <span className="insta-icon">
                        <IoLogoInstagram />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/assets/images/instagram/insta6.jpg"
                        alt="insta_img"
                      />
                      <span className="insta-icon">
                        <IoLogoInstagram />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/assets/images/instagram/insta7.jpg"
                        alt="insta_img"
                      />
                      <span className="insta-icon">
                        <IoLogoInstagram />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/assets/images/instagram/insta8.jpg"
                        alt="insta_img"
                      />
                      <span className="insta-icon">
                        <IoLogoInstagram />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className="d-flex justify-content-center p-4"
        style={{ backgroundColor: "#001230" }}
      >
        <p>
          Copyright &copy; 2023 Design & Developed by{" "}
          <a href="https://bestbackbrace.com" target="_blank">
            BestBackBrace
          </a>
        </p>
      </div>
    </footer>
  );
};

export default FooterFour;
