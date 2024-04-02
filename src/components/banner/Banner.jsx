import bannerData from "../../data/banner";
import Slider from "./Slider";

const Banner = () => {
  const bannerContent = bannerData;
  return (
    <div>
      <Slider bannerContent={bannerContent} />
    </div>
  );
};

export default Banner;
