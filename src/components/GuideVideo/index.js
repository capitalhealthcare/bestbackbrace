import { Container, Row, Col } from "react-bootstrap";

const GuideVideo = ({ pb, pt }) => {
  return (
    <>
      <div
        className={`text-image-section ${pt ? "space-pt--r70" : ""} ${
          pb ? "space-pb--r70" : ""
        }`}
      >
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="heading-s1 space-mb--20">
                <h2>How to Use</h2>
              </div>
              <div className="term-conditions">
                <ul>
                  <li>
                    Place the brace so that the back panel is centered on your
                    spine just about the waist; making sure the BB logo on the
                    back panel is facing up
                  </li>
                  <li>
                    While Keeping the back panel centered, wrap the left side
                    panel around your abdomen
                  </li>
                  <li>
                    With the left panel held tight to your abdomen, wrap the
                    right side panel around and secure it to the left side
                    panel. Check to see that the back panel is still centered on
                    your spine and adjust i needed.
                  </li>
                  <li>
                    Grab thee compression straps and simultaneously pull the
                    com- pression Straps away from your body until the desired
                    level of compression is achieved.
                  </li>
                  <li>
                    While Keeping the compression straps tight, bring each strap
                    around and secure to the front of the brace. for maximum
                    compres- sion, lie on a flat surface once the brace is
                    secured abd re-adjust the compression straps.
                  </li>
                  <div>
                    <h5>Extra Panel Application</h5>
                    <p>
                      The BB 37 back brace includes 2 side panels for extra
                      support and compression. To increase compres- sion after
                      fitting the brace, follow these steps:
                    </p>
                  </div>
                  <ol>
                    <li>Remove the brace.</li>
                    <li>Lay it flat with the inside facing up.</li>
                    <li>
                      Attach a side panel to the belt portion on either side.
                    </li>
                  </ol>
                </ul>
              </div>
            </Col>
            <Col lg={6}>
              <video
                autoPlay
                muted
                loop
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <source src="/assets/images/mikeVideo.mp4" type="video/mp4" />
              </video>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default GuideVideo;
