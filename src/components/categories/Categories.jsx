import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

import Container from "../shared/Container";
import Button from "../shared/Button";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchedData = async () => {
      try {
        const res = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const data = await res.json();
        // console.log(data);
        setCategories(data.categories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  }, []);

  const handleClick = async (item) => {
    const fetchedData = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${item}`
        );
        const data = await res.json();
        console.log(data);
        setCategories(data.categories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  };

  return (
    <Container className=" ">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {categories?.map((item) => (
          <SwiperSlide
            key={item?.idCategory}
            className="bg-secondary bg-opacity-15 border-2 rounded border-primary border-opacity-20  md:mb-12 mb-3 "
          >
            <img className="lg:p-5 p-3" src={item?.strCategoryThumb} alt="" />
            <div className="bg-[#fefcfa] md:px-4 px-3 py-2 flex flex-col justify-center items-center">
              <h3 className="md:text-2xl text-xl my-2 uppercase text-primary font-semibold">
                {item?.strCategory}
              </h3>
              <p className=" md:text-justify py-2">
                {item?.strCategoryDescription.slice(0, 200)}
              </p>
              <Button
                onclick={() => handleClick(item?.strCategory)}
                text={"See Recipes"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Categories;
