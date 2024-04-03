import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/shared/Container";
import SectionTitle from "../components/shared/SectionTitle";
import Button from "../components/shared/Button";
import Card from "../components/shared/Card";

const CategoryFoods = () => {
  const [categories, setCategories] = useState([]);
  const [searchRecipe, setSearchRecipe] = useState(null);
  const { category } = useParams();
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        );
        const data = await res.json();
        //   console.log(data.meals);
        setCategories(data?.meals);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  }, []);

  const handleSearch = () => {
    const fetchedData = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        );
        const data = await res.json();
        console.log(data?.meals[0]);

        setSearchRecipe(data?.meals[0]);
        setSearchText(" ");
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  };

  return (
    <Container>
      <SectionTitle title={"Choose Category Recipes"} />
      <div className="flex justify-between flex-row-reverse">
        <div className="flex items-center">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search by name"
            className="px-3 me-2 h-[42px] border-2 border-primary border-opacity-60 rounded-md text-black"
          />
          <Button onclick={handleSearch} text={"Search"} />
        </div>

        <div className="">
          <Button onclick={() => window.history.back()} text={"<- Go Back "} />
        </div>
      </div>
      <div className=" my-8">{searchRecipe && <Card key={searchRecipe?.idMeal} item={searchRecipe} />}</div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-6">
        {categories?.map((item) => (
          <Card key={item?.idMeal} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default CategoryFoods;
