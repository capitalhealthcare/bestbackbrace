import { Fragment } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import {
  getIndividualCategories,
  getIndividualTags,
  getIndividualColors,
  getProductsIndividualSizes,
  getProducts,
  getDiscountPrice,
  setActiveSort,
} from "../../lib/product";
import { ProductRating } from "../../components/Product";

const Sidebar = ({ products, getSortParams }) => {
  const categories = getIndividualCategories(products);
  const colors = getIndividualColors(products);
  const sizes = getProductsIndividualSizes(products);
  const tags = getIndividualTags(products);
  const popularProducts = getProducts(products, "fashion", "popular", 3);

  return (
    <div className="sidebar">
      <div className="widget">
        <h5 className="widget__title">Categories</h5>
        {categories.length > 0 ? (
          <ul className="widget__categories">
            {categories &&
              categories.map((category, key) => {
                return (
                  <li key={key}>
                    <button
                      onClick={(e) => {
                        getSortParams("category", category.name);
                        setActiveSort(e);
                      }}
                    >
                      <IoIosArrowForward />
                      <span className="categories-name">{category.name}</span>
                      <span className="categories-num">({category.count})</span>
                    </button>
                  </li>
                );
              })}
          </ul>
        ) : (
          "No categories found"
        )}
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
             href="/products"
              className="btn btn-white rounded-0 btn-sm text-uppercase"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      
      <div className="widget">
        <div className="shop-banner">
          <div className="banner-img">
            <img
              src="/assets/images/product/product-sidebar.jpg"
              alt="sidebar_banner_img"
            />
          </div>
          <div className="shop-bn-content2">
            <h5 className="text-uppercase shop-subtitle">New Collection</h5>
            <h3 className="text-uppercase shop-title">Sale 10% Off</h3>
            <Link
             href="/products"
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
