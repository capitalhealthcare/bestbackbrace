import { Fragment } from "react";
import { HeaderOne } from "../components/Header";
import { FooterFour } from "../components/Footer";
import ScrollToTop from "../components/scroll-to-top";

const LayoutOne = ({ children, navPositionClass }) => {
  return (
    <Fragment>
      <HeaderOne navPositionClass={navPositionClass} />
      {children}
      <FooterFour />
      <ScrollToTop />
    </Fragment>
  );
};

export default LayoutOne;
