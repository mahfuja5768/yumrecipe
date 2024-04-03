import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import Container from "../components/shared/Container";
import SectionTitle from "../components/shared/SectionTitle";
import Button from "../components/shared/Button";
import Card from "../components/shared/Card";

const CategoryFoods = () => {
  const [categories, setCategories] = useState([]);
  const { category } = useParams();

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

  return (
    <Container>
      <SectionTitle title={"Choose Category Recipes"} />
      <div className=" relative">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-6">
          {categories?.map((item) => (
            <Card key={item?.idMeal} item={item} />
          ))}
        </div>
        <div className=" absolute -top-16">
          <Button onclick={() => window.history.back()} text={"<- Go Back "} />
        </div>
      </div>
    </Container>
  );
};

export default CategoryFoods;
