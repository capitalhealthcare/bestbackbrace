import { useSelector } from "react-redux";
import { getProducts } from "../lib/product";
import { LayoutFour } from "../layouts";
import { HeroSliderFour } from "../components/HeroSlider";
import { IconBoxThree } from "../components/IconBox";
import { ProductGridTwo } from "../components/ProductGrid";
import { BlogGrid } from "../components/Blog";
import { TestimonialOne } from "../components/Testimonial";
import { ImageSliderOne } from "../components/ImageSlider";
import GuideVideo from "../components/GuideVideo";

import imageSliderData from "../data/image-sliders/image-slider-one.json";
import testimonialOneData from "../data/testimonials/testimonial-one.json";
import heroSliderFourData from "../data/hero-sliders/hero-slider-four.json";

const FurnitureTwo = () => {
  const { products } = useSelector((state) => state.product);
  const bestSellerProducts = getProducts(products, "backbrace", "new", 8);

  return (
    <LayoutFour navPositionClass="justify-content-center">
      <HeroSliderFour heroSliderData={heroSliderFourData} />
      <ProductGridTwo
        title="Our Products"
        text="Discover our elite range of back braces, meticulously crafted for unparalleled support. Choose BestBackBrace for comfort that stands the test of time"
        products={bestSellerProducts}
      />
      <ImageSliderOne imageSliderData={imageSliderData} />
      <IconBoxThree />
      <TestimonialOne testimonialData={testimonialOneData} />
      <GuideVideo pt={false} pb={true} />
      <BlogGrid />
    </LayoutFour>
  );
};

export default FurnitureTwo;
