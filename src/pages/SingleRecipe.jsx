import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/shared/Container";
import SectionTitle from "../components/shared/SectionTitle";
import Button from "../components/shared/Button";

const SingleRecipe = () => {
  const [recipe, setRecipe] = useState([]);
  const { id } = useParams();

  const {
    strArea,
    strCategory,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strInstructions,
    strMeal,
    strMealThumb,
    strMeasure1,
    strMeasure2,
    strTags,
    strYoutube,
  } = recipe;

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await res.json();
        // console.log(data.meals[0]);
        setRecipe(data?.meals[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  }, []);
  return (
    <Container>
      <SectionTitle title={"Choosen Single recipe"} />
      <div className=" relative grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center">
        <img
          className=" rounded-3xl w-[200px] md:w-[400px]"
          src={strMealThumb}
          alt=""
        />
        <iframe
          width="560"
          className=" rounded-3xl"
          height="315"
          src={strYoutube?.replace("watch?v=", "embed/")}
          title={strMeal}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <div className=" absolute -top-24">
          <Button onclick={() => window.history.back()} text={"<- Go Back "} />
        </div>
      </div>

      <div className="bg-primary bg-opacity-10 px-7 py-8 rounded-3xl mt-5">
        <div className="flex flex-col gap-1">
          <h2 className="text-primary  text-2xl md:text-3xl font-bold">
            {strMeal}
          </h2>
          <h3 className="text-primary  text-lg md:text-xl font-medium">
            Category: {strCategory}
          </h3>
          <h3>Country: {strArea}</h3>
          <h3>{strTags}</h3>
          <h2 className="  text-xl md:text-2xl font-bold text-primary">
            Ingredients
          </h2>
          <ul className="text-lg list-disc flex gap-5 ps-4 ">
            <li>{strIngredient1}</li>
            <li>{strIngredient2}</li>
            <li>{strIngredient3}</li>
            <li>{strIngredient4}</li>
            <li>{strIngredient5}</li>
            <li>{strMeasure1}</li>
            <li>{strMeasure2}</li>
          </ul>
          <p>{strInstructions}</p>
        </div>
      </div>
    </Container>
  );
};

export default SingleRecipe;
