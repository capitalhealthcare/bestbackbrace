import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";
import { useSelector } from "react-redux";
import { LayoutFour } from "../../layouts";
import {
  ImageGalleryBottomThumb,
  ProductDescription,
} from "../../components/ProductDetails";
import { HeroSliderOne } from "../../components/HeroSlider";
import heroSliderOneData from "../../data/hero-sliders/hero-slider-one.json";
import api from "../../lib/api";

const ProductBasic = ({ product }) => {
  const { cartItems } = useSelector((state) => state.cart);

  const productPrice = product?.price?.toFixed(2);
  const cartItem = cartItems.find((cartItem) => cartItem.id === product.id);

  return (
    <>
      <Head>
        <title>df  dfd fdfdfdf</title>
        

        <meta
          name="description"
          content="hassan is hassan"
        />
        {/* <meta
          name="keywords"
          content="ecommerce, electronics store, Fashion store, furniture store,  react, next js, clean, minimal, modern, online store, responsive, retail, shopping, ecommerce store"
        /> */}
      </Head>

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
                  cartItems={cartItems}
                  cartItem={cartItem}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </LayoutFour>
    </>
  );
};

export default ProductBasic;

export const getServerSideProps = async ({ query: { slug } }) => {
  const singleProduct = await api.get("/getproductbySlug/" + slug[0]);
  const data = await singleProduct.data.data;

  return {
    props: {
      product: data,
    },
  };
};
