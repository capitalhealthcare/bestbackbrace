import Link from "next/link";
import { LayoutFour } from "../layouts";
import { BreadcrumbOne } from "../components/Breadcrumb";
import { TextWithImageOne } from "../components/TextWithImage";
import { TeamMemberOne } from "../components/TeamMember";
import { TestimonialOne } from "../components/Testimonial";
import { IconBoxThree, IconBoxTwo } from "../components/IconBox";
import { BannerOne } from "../components/Banner";
import { HeroSliderOne } from "../components/HeroSlider";
import heroSliderOneData from "../data/hero-sliders/hero-slider-one.json";
import teamMemberOneData from "../data/team-member/team-member-one.json";
import testimonialOneData from "../data/testimonials/testimonial-one.json";

const AboutUs = () => {
  return (
    <LayoutFour>
      <HeroSliderOne heroSliderData={heroSliderOneData} />
      {/* text with image */}
      <TextWithImageOne />
      {/* icon box */}
      <IconBoxTwo />
      {/* team member*/}
      {/* <TeamMemberOne teamMemberData={teamMemberOneData} /> */}
      {/* testimonial */}
      {/* <TestimonialOne testimonialData={testimonialOneData} /> */}
      {/* icon box */}
      {/* <IconBoxThree /> */}
    </LayoutFour>
  );
};

export default AboutUs;
