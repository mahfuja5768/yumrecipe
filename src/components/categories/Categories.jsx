import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

import Container from "../shared/Container";
import Button from "../shared/Button";
import SectionTitle from "../shared/SectionTitle";
import { Link } from "react-router-dom";

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

  return (
    <Container className=" ">
      <SectionTitle title={"RECIPE Categories"} />
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper container"
      >
        {categories?.map((item) => (
          <SwiperSlide
            key={item?.idCategory}
            className="bg-primary bg-opacity-10  rounded-3xl border-4 relative pb-[150px] md:pb-[200px]  border-primary border-opacity-30  md:mb-12 mb-8 "
          >
            <div className=" md:px-4 px-3 py-5 flex flex-col justify-center  items-center">
              <img
                className="border-2 bg-primary p-4 border-secondary border-opacity-90 W-32 h-32 md:w-44 rounded-full md:h-44 absolute bottom-0 right-0 "
                src={item?.strCategoryThumb}
                alt=""
              />

              <h3 className="bg-primary rounded-md bg-opacity-20 w-full text-center py-2 md:text-2xl text-xl text-primary my-2 uppercase font-bold">
                {item?.strCategory}
              </h3>
              <p className=" md:text-justify py-2">
                {item?.strCategoryDescription.slice(0, 200)}
              </p>
            </div>
            <div className="ps-3">
              <Link to={`/categoryFood/${item?.strCategory}`}>
                <Button text={"See Recipes"} />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Categories;
