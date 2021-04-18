import FeatureSection from "../../component/FeatureSection/FeatureSection";
import Footer from "../../component/Footer/Footer";
import HomeSlider from "../../component/HomeSlider/HomeSlider";
import MainNavigation from "../../component/MainNavigation/MainNavigation";
import OurServices from "../../component/OurServices/OurServices";
import ServicePlan from "../../component/ServicePlan/ServicePlan";
import ServicePoint from "../../component/ServicePoint/ServicePoint";
import Testimonial from "../../component/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <MainNavigation />
      <HomeSlider />
      <FeatureSection />
      <ServicePlan></ServicePlan>
      <OurServices />
      <ServicePoint></ServicePoint>
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
