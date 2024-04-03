import AreaFiltered from "../components/AreaFiltered/AreaFiltered";
import TakeChallenge from "../components/TakeChallenge";
import WhyLoveIt from "../components/WhyLoveIt";
import Banner from "../components/banner/Banner";
import Categories from "../components/categories/Categories";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <div>
      <Banner />
      <WhyLoveIt />
      <Categories />
      <AreaFiltered />
      <TakeChallenge />
      <AboutUs />
      <ContactUs />
    </div>
  );
};

export default Home;
