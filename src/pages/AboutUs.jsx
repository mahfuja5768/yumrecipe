import Container from "../components/shared/Container";
import SectionTitle from "../components/shared/SectionTitle";

export default function AboutUs() {
  return (
    <Container>
      <SectionTitle title={"About Us"} />
      <div className="-mt-12 text-justify grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6">
        <div className="">
          <p>
            Welcome to <strong>Yum-Recipe</strong>, your ultimate destination
            for culinary inspiration and exploration. At{" "}
            <strong>Yum-Recipe</strong>, we believe that cooking is more than
            just a necessity it's a creative expression, a cultural journey, and
            a way to connect with others. Whether you're a seasoned chef or a
            novice cook, our goal is to empower you to unleash your inner
            culinary artist and create delicious meals that nourish the body and
            delight the senses.
          </p>
          <h3>Our Mission</h3>
          <p>
            At [Your Website Name], our mission is simple: to inspire and
            empower food enthusiasts of all levels to explore the wonderful
            world of cooking. We strive to provide a diverse range of recipes,
            cooking tips, and resources that cater to various tastes, dietary
            preferences, and skill levels. Our aim is to make cooking
            accessible, enjoyable, and rewarding for everyone, fostering a
            community of passionate food lovers who share their knowledge,
            experiences, and love for good food.
          </p>
        </div>
        <div>
          <img
            className="h-[400px] mx-auto"
            src="https://img.freepik.com/premium-vector/recipe-template-cookbook-vegetables-casserole_259139-277.jpg?w=740"
            alt=""
          />
        </div>
      </div>
    </Container>
  );
}
