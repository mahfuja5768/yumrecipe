import AreaFiltered from "../components/AreaFiltered/AreaFiltered";
import Banner from "../components/banner/Banner";
import Categories from "../components/categories/Categories";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <AreaFiltered />
    </div>
  );
};

export default Home;
