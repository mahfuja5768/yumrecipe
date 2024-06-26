import { Link } from "react-router-dom";
import Button from "./Button";

const Card = ({ item }) => {
  return (
    <div key={item?.idMeal} className=" relative h-[320px] ">
      <img className="h-[320px] rounded-3xl w-full" src={item?.strMealThumb} />
      <div className="absolute rounded-3xl inset-0 bg-black bg-opacity-10 rounded-b-3xl"></div>
      <div className="absolute top-[60%] inset-0 bg-black bg-opacity-50 rounded-b-3xl"></div>
      <h3 className=" text-white font-bold text-lg ps-3 absolute top-[65%]">
        {item?.strMeal?.slice(0, 40)}
      </h3>
      <Link
        className=" ms-3 absolute top-[80%]"
        to={`/singleRecipe/${item?.idMeal}`}
      >
        <Button inWhite text={"See Recipe"} />
      </Link>
    </div>
  );
};

export default Card;