import { useState } from "react";
import Button from "./shared/Button";
import Container from "./shared/Container";
import SectionTitle from "./shared/SectionTitle";
import Card from "./shared/Card";

export default function TakeChallenge() {
  const [recipe, setRecipe] = useState(null);

  const handleClick = async () => {
    const fetchedData = async () => {
      try {
        const res = await fetch(
          "https://www.themealdb.com/api/json/v1/1/random.php/"
        );
        const data = await res.json();
        // console.log(data?.meals[0]);
        setRecipe(data?.meals[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  };
  return (
    <Container>
      <SectionTitle title={"Take Random Challenges"} />
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6">
        <div>
          <img
            src="https://img.freepik.com/free-vector/cooking-online-concept-with-chef-workshop-symbols-flat_1284-56406.jpg?w=1060&t=st=1712130154~exp=1712130754~hmac=bd7e5605e59aae1a5dc48f2f43833b5d10ba75209349b0542c68e94c59f069aa"
            alt=""
          />
        </div>
        <div className="">
          <Button center onclick={handleClick} text={"Click Here To Get Recipe"} />
          {recipe ? (
            <Card item={recipe} />
          ) : (
            <h3 className="text-xl text-center font-medium my-5">Lets Take A Challenge Today From Yum Recipe</h3>
          )}
        </div>
      </div>
    </Container>
  );
}
