import { LayoutFour } from "../layouts";
import { BannerSix } from "../components/Banner";
import { HeroSliderOne } from "../components/HeroSlider";
import heroSliderOneData from "../data/hero-sliders/hero-slider-one.json";

const Certification = () => {
  return (
    <LayoutFour>
      <HeroSliderOne heroSliderData={heroSliderOneData} />
      <BannerSix />
    </LayoutFour>
  );
};

export default Certification;
