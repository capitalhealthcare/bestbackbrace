import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getDiscountPrice } from "../../lib/product";
import { getProducts } from "../../lib/product";
import { LayoutFour } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import {
  ImageGalleryBottomThumb,
  ProductDescription,
  ProductDescriptionTab,
} from "../../components/ProductDetails";
import products from "../../data/products.json";
import { ProductSliderTwo } from "../../components/ProductSlider";
import { HeroSliderOne } from "../../components/HeroSlider";
import heroSliderOneData from "../../data/hero-sliders/hero-slider-one.json";
const ProductBasic = ({ product }) => {
  const { products } = useSelector((state) => state.product);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);

  const relatedProducts = getProducts(
    products,
    product.category[0],
    "popular",
    8
  );
  const discountedPrice = getDiscountPrice(
    product.price,
    product.discount
  ).toFixed(2);

  const productPrice = product.price.toFixed(2);
  const cartItem = cartItems.find((cartItem) => cartItem.id === product.id);
  const wishlistItem = wishlistItems.find(
    (wishlistItem) => wishlistItem.id === product.id
  );
  const compareItem = compareItems.find(
    (compareItem) => compareItem.id === product.id
  );

  return (
    <LayoutFour>
      <HeroSliderOne heroSliderData={heroSliderOneData} />
      {/* product details */}
      <div className="product-details py-5">
        <Container>
          <Row>
            <Col lg={6} className="space-mb-mobile-only--40">
              {/* image gallery */}
              <ImageGalleryBottomThumb product={product} />
            </Col>
            <Col lg={6}>
              {/* product description */}
              <ProductDescription
                product={product}
                productPrice={productPrice}
                discountedPrice={discountedPrice}
                cartItems={cartItems}
                cartItem={cartItem}
                wishlistItem={wishlistItem}
                compareItem={compareItem}
              />
            </Col>
          </Row>
          {/* product description tab */}.
          {/* <Row>
            <Col>
              <ProductDescriptionTab product={product} />
            </Col>
          </Row> */}
          {/* seperator*/}
          {/* <Row>
            <Col lg={12}>
              <div className="divider center-icon space-mt--30 space-mb--30">
                <i className="icon-basket-loaded" />
              </div>
            </Col>
          </Row> */}
          {/* related product slider */}
          {/* <ProductSliderTwo
            title="Related Products"
            products={relatedProducts}
          /> */}
        </Container>
      </div>
    </LayoutFour>
  );
};

export default ProductBasic;

export async function getStaticPaths() {
  // get the paths we want to pre render based on products
  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // get product data based on slug
  const product = products.filter((single) => single.slug === params.slug)[0];

  return { props: { product } };
}
