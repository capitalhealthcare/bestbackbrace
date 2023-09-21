import { IoIosClose } from "react-icons/io";
import clsx from "clsx";
import MobileMenuSearch from "./MobileMenuSearch";
import MobileMenuNav from "./MobileMenuNav";
import MobileMenuWidgets from "./MobileMenuWidgets";
import Link from "next/link";

const MobileMenu = ({ activeStatus, getActiveStatus }) => {
  return (
    <div className={clsx("offcanvas-mobile-menu", activeStatus && "active")}>
      <div
        className="offcanvas-mobile-menu__overlay-close"
        onClick={() => getActiveStatus(false)}
      />
      <div className="offcanvas-mobile-menu__wrapper">
        <button
          className="offcanvas-mobile-menu__close"
          onClick={() => getActiveStatus(false)}
        >
          <IoIosClose />
        </button>
        <div className="offcanvas-mobile-menu__content-wrapper px-3">
          {/* <div className="pt-2 ps-4 bg-dark"> */}
            {/* mobile nav menu */}
            <MobileMenuNav getActiveStatus={getActiveStatus} />
            {/* mobile nav Image */}
            <div>
              <img
                src="/assets/images/hero-slider/four/img.jpg"
                alt="shop_banner"
              />
            </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
