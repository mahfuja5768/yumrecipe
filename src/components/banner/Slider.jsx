import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Container from "../shared/Container";
import Button from "../shared/Button";
import { getImgUrl } from "../../utils/getImagePath";

const Slider = ({ bannerContent }) => {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      fadeEffect={true}
      freeMode={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {bannerContent?.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="relative md:h-[80vh] h-[90vh] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.url})` }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-65"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <Container>
                <div className="flex   md:justify-center md:flex-row gap-2 flex-col md:gap-3 items-center">
                  <div className="flex  md:justify-start gap-1  flex-col md:gap-3 md:items-start">
                    {" "}
                    <h3 className="lg:text-4xl md:text-3xl  text-xl pt-5 font-bold md:mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-200">{item.para}</p>
                    <Button text={"Read More"} />
                  </div>
                  <div>
                    <img
                      className="md:w-full mx-auto w-1/4 h-[1/4]"
                      src={getImgUrl(item.sideBg)}
                      alt=""
                    />
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
