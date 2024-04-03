import SectionTitle from "../shared/SectionTitle";
import AllAreas from "./AllAreas";
import { useEffect, useState } from "react";
import Recipes from "./Recipes";

const AreaFiltered = () => {
  const [areas, setAreas] = useState([]);
  const [area, setArea] = useState("American");
//   const [active, setActive] 
  // console.log(area);
  useEffect(() => {
    const fetchedData = async () => {
      try {
        const res = await fetch(
          "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
        );
        const data = await res.json();
        //   console.log(data?.meals);
        setAreas(data?.meals);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  }, []);
  return (
    <div className="max-w-[1140px] mx-auto my-12 px-4 md:px-5">
      <SectionTitle title={"Country Special"} />
      <AllAreas areas={areas} setArea={setArea} area={area}/>

      <Recipes area={area} />
    </div>
  );
};

export default AreaFiltered;
