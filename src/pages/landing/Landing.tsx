import ContactUs from "./ContactUs";
import CustomerLove from "./CustomerLove";
import FAQs from "./FAQs";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import OurProducts from "./OurProducts";
import RevampJournal from "./RevampJournal";
import WhoWeAre from "./WhoWeAre";

const Landing = () => {
  return (
    <div className="">
      <Hero />
      <OurProducts />
      <HowItWorks />
      <WhoWeAre />
      <RevampJournal />
      <CustomerLove />
      <FAQs />
      <ContactUs />
    </div>
  );
};

export default Landing;
