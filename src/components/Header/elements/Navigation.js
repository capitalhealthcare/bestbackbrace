import Link from "next/link";
import { Col } from "react-bootstrap";
import clsx from "clsx";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const Navigation = ({ positionClass }) => {
  return (
    <nav className="navigation d-none d-lg-block">
      <ul
        className={clsx(
          "d-flex",
          positionClass ? positionClass : "justify-content-end"
        )}
      >
        <li>
          <Link href="/" className="nav-link">
            HOME
          </Link>
        </li>
        <li>
          <Link href="/" className="nav-link">
            PRODUCTS
            <IoIosArrowDown />
          </Link>

          <ul className="sub-menu sub-menu--one-column">
            <li>
              <Link href="/home/fashion-one">Back Brace</Link>
            </li>
            <li>
              <Link href="/home/fashion-one">Shoulder Brace</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/" className="nav-link">
            PAGES
            <IoIosArrowDown />
          </Link>
          <ul className="sub-menu sub-menu--one-column">
            <li>
              <Link href="/about">About Us</Link>
            </li>

            <li>
              <Link href="/faq">F.A.Q</Link>
            </li>
            <li>
              <Link href="/terms">Terms & Conditions</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/blog" className="nav-link">
            BLOG
          </Link>
        </li>
        <li>
          <Link href="/contact" className="nav-link">
            CONTACT US
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
