import { Fragment } from "react";
import Link from "next/link";
import clsx from "clsx";
import { ProductRating } from "../Product";
import { addToCart } from "../../store/slices/cart-slice";

const ProductGridFour = ({
  product,
  discountedPrice,
  productPrice,
  cartItem,
  bottomSpace,
}) => {
  return (
    <Fragment>
      <div
        className={clsx("product-grid product-grid--style-two", bottomSpace)}
      >
        <div className="product-grid__image">
          <Link href={"/shop/" + product.slug}>
            <img src={product.thumbImage[0]} alt="product_img1" />
          </Link>
        </div>
        <div className="product-grid__info text-center">
          <h6 className="product-title">
            <Link href={"/shop/" + product.slug}>{product.name}</Link>
          </h6>
          <div className="product-price">
            {product.discount ? (
              <Fragment>
                <span className="price">${discountedPrice}</span>
                <del>${productPrice}</del>
              </Fragment>
            ) : (
              <span className="price">${productPrice}</span>
            )}
          </div>
          <h6>Free Shipping within the USA</h6>
          <div className="rating-wrap">
            <ProductRating ratingValue={product.rating} />
            <span className="rating-num">({product.ratingCount})</span>
          </div>
          <div className="add-to-cart">
            {product.affiliateLink ? (
              <a
                href={product.affiliateLink}
                target="_blank"
                className="btn btn-fill-out btn-radius"
              >
                <i className="icon-action-redo" /> Buy Now
              </a>
            ) : product.variation && product.variation.length >= 1 ? (
              <Link
                href={"/shop/" + product.slug}
                className="btn btn-fill-out btn-radius"
              >
                <i className="icon-wrench" />
                Select Options
              </Link>
            ) : product.stock && product.stock > 0 ? (
              <button
                onClick={() => dispatch(addToCart(product))}
                disabled={
                  cartItem !== undefined && cartItem.quantity >= cartItem.stock
                }
                className={`btn btn-fill-out btn-radius ${
                  cartItem !== undefined ? "active" : ""
                }`}
              >
                <i className="icon-basket-loaded" /> Add To Cart
              </button>
            ) : (
              <button disabled className="btn btn-fill-out btn-radius">
                <i className="icon-basket-loaded" /> Add To Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductGridFour;
