import { LayoutFour } from "../layouts";
import { TextWithImageOne } from "../components/TextWithImage";
import { IconBoxTwo } from "../components/IconBox";
import { HeroSliderOne } from "../components/HeroSlider";
import heroSliderOneData from "../data/hero-sliders/hero-slider-one.json";

const AboutUs = () => {
  return (
    <LayoutFour>
      <HeroSliderOne heroSliderData={heroSliderOneData} />
      {/* text with image */}
      <TextWithImageOne />
      {/* icon box */}
      <IconBoxTwo />
    </LayoutFour>
  );
};

export default AboutUs;
