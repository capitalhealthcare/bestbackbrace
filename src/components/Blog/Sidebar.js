import Link from "next/link";
import { IoIosSearch, IoIosArrowForward } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="widget">
        <h5 className="widget__title">Recent Blogs</h5>
        <ul className="widget-recent-post">
          <li>
            <div className="post-footer">
              <div className="post-footer__image">
                <Link href="/blog/post-left-sidebar">
                  <img
                    src="/assets/images/blog/latest_post1.jpg"
                    alt="latest_post1"
                  />
                </Link>
              </div>
              <div className="post-footer__content">
                <h6>
                  <Link href="/blog/post-left-sidebar">
                    Lorem ipsum dolor sit amet, consectetur
                  </Link>
                </h6>
                <p className="small m-0">April 14, 2021</p>
              </div>
            </div>
          </li>
          <li>
            <div className="post-footer">
              <div className="post-footer__image">
                <Link href="/blog/post-left-sidebar">
                  <img
                    src="/assets/images/blog/latest_post2.jpg"
                    alt="latest_post2"
                  />
                </Link>
              </div>
              <div className="post-footer__content">
                <h6>
                  <Link href="/blog/post-left-sidebar">
                    Lorem ipsum dolor sit amet, consectetur
                  </Link>
                </h6>
                <p className="small m-0">April 14, 2021</p>
              </div>
            </div>
          </li>
          <li>
            <div className="post-footer">
              <div className="post-footer__image">
                <Link href="/blog/post-left-sidebar">
                  <img
                    src="/assets/images/blog/latest_post3.jpg"
                    alt="latest_post3"
                  />
                </Link>
              </div>
              <div className="post-footer__content">
                <h6>
                  <Link href="/blog/post-left-sidebar">
                    Lorem ipsum dolor sit amet, consectetur
                  </Link>
                </h6>
                <p className="small m-0">April 14, 2021</p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="widget">
        <div className="shop-banner">
          <div className="banner-img">
            <img
              src="/assets/images/blog/blog-sidebar/1.jpg"
              alt="sidebar_banner_img"
            />
          </div>
          <div className="shop-bn-content2">
            <h5 className="text-uppercase shop-subtitle">New Collection</h5>
            <h3 className="text-uppercase shop-title">Sale 10% Off</h3>
            <Link
              href="/shop/grid-left-sidebar"
              className="btn btn-white rounded-0 btn-sm text-uppercase"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
