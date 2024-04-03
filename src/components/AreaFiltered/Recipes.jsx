import { useEffect, useState } from "react";
import Card from "../shared/Card";

const Recipes = ({ area }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
        );
        const data = await res.json();
        // console.log(data.meals);
        setRecipes(data?.meals?.slice(0, 12));
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  }, [area]);

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-4 mb-6">
      {recipes?.map((item) => (
        <Card key={item?.idMeal} item={item} />
      ))}
    </div>
  );
};

export default Recipes;
