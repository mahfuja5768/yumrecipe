import item1 from "../assets/cravings.png";
import item2 from "../assets/ingredents.png";
import item3 from "../assets/planning.png";
import Container from "./shared/Container";
import SectionTitle from "./shared/SectionTitle";
const WhyLoveIt = () => {
  return (
    <Container>
      <SectionTitle title={"Why You'll love it"} />
      <div className="flex justify-between gap-5 items-center flex-wrap">
        <div className="flex justify-center items-center flex-col">
          <img
            className="w-44 h-44 bg-primary bg-opacity-10 rounded-full"
            src={item1}
            alt=""
          />
          <h3 className="text-2xl font-bold text-primary py-2">
            Search by Cravings
          </h3>
        </div>
        <div className="flex justify-center items-center flex-col">
          <img
            className="w-44 h-44 bg-primary bg-opacity-10 rounded-full"
            src={item2}
            alt=""
          />
          <h3 className="text-2xl font-bold text-primary py-2">
            Filtered by Country
          </h3>
        </div>
        <div className="flex justify-center items-center flex-col">
          <img
            className="w-44 h-44 bg-primary bg-opacity-10 rounded-full"
            src={item3}
            alt=""
          />
          <h3 className="text-2xl font-bold text-primary py-2">
            Efficient Meal Planning
          </h3>
        </div>
      </div>
    </Container>
  );
};

export default WhyLoveIt;
