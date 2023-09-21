import { useSelector } from "react-redux";
import { getProducts } from "../lib/product";
import { LayoutFour } from "../layouts";
import { HeroSliderFour } from "../components/HeroSlider";
import { IconBoxThree } from "../components/IconBox";

import { CategorySliderOne } from "../components/CategorySlider";
import { ProductGridTwo } from "../components/ProductGrid";
import { CountdownOne } from "../components/Countdown";
import { ProductSliderSeven } from "../components/ProductSlider";
import { BlogGrid } from "../components/Blog";
import { TestimonialOne } from "../components/Testimonial";
import { ImageSliderOne } from "../components/ImageSlider";

import imageSliderData from "../data/image-sliders/image-slider-one.json";
import testimonialOneData from "../data/testimonials/testimonial-one.json";
import heroSliderFourData from "../data/hero-sliders/hero-slider-four.json";

const FurnitureTwo = () => {
  const { products } = useSelector((state) => state.product);
  const bestSellerProducts = getProducts(products, "furniture", "popular", 8);

  return (
    <LayoutFour navPositionClass="justify-content-center">
      {/* hero slider */}
      <HeroSliderFour heroSliderData={heroSliderFourData} />
      {/* Top Products */}
      <ProductGridTwo
        title="Our Top Products"
        text="Discover our elite range of back braces, meticulously crafted for unparalleled support. Choose BestBackBrace for comfort that stands the test of time"
        products={bestSellerProducts}
      />
      {/* image slider */}
      <ImageSliderOne imageSliderData={imageSliderData} />
      {/* icon box */}
      <IconBoxThree />
      {/* testimonial */}
      <TestimonialOne testimonialData={testimonialOneData} />
      {/* blog grid */}
      <BlogGrid />
    </LayoutFour>
  );
};

export default FurnitureTwo;
