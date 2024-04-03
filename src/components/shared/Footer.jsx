import { FaFacebookF, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { getImgUrl } from "../../utils/getImagePath";

const Footer = () => {
  const navs = [
    {
      nav: "Country Special",
      path: "/areaFiltered",
    },
    {
      nav: "Take Challenge",
      path: "/takeChallenge",
    },
    {
      nav: "About Us",
      path: "/about",
    },
    {
      nav: "Contact Us",
      path: "/contactUs",
    },
  ];

  return (
    <div className="bg-[#24332a] text-white border-t px-8 mt-12">
      <footer>
        <div className="max-w-[1140px] mx-auto ">
          <div className="  md:py-12 mb-10 grid grid-cols-1 md:grid-cols-2 justify-center items-end  lg:grid-cols-3 gap-12">
            <div className="">
              <img src={getImgUrl("cravings.png")} alt="" />
              <header className="font-bold text-2xl  mb-2 text-white">
                About
              </header>
              <p>
                <strong>Yum-Recipe</strong> is dedicated to bringing you the
                best in culinary inspiration and expertise. Our team of food
                enthusiasts is committed to providing you with delicious
                recipes, helpful cooking tips, and engaging content to enhance
                your culinary journey.
              </p>
            </div>
            <div className="md:grid-cols-2 flex lg:justify-center lg:items-center flex-col">
              <div className="flex flex-col gap-3 ">
                <Link to="/" className="text-white font-bold text-2xl  mb-2 ">
                  Yum-Recipe
                </Link>
                <h3 className="text-white">QUESTION OR FEEDBACK?</h3>
                <p className="flex items-center gap-2 ">
                  <FaPhone className="text-lg"></FaPhone>{" "}
                  <span>+099 222 111</span>
                </p>
                <p className="flex items-center gap-2">
                  <FaMailBulk className="text-lg"></FaMailBulk>{" "}
                  <span>@yumRecipe.com</span>
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:items-center flex-col">
              <nav className="flex flex-col gap-4 list-none">
                <header className="text-white font-bold text-2xl  mb-2 ">
                  Quick Menu
                </header>
                <ul>
                  {navs?.map((item) => (
                    <li key={item.nav}>
                      <Link
                        to={item.path}
                        className="text-lg pb-3"
                      >
                        {item?.nav}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <nav className="lg:mx-auto flex justify-center items-center mt-5">
            <div className="flex justify-start md:items-center   md:justify-center gap-12 my-6">
              <a
                href="https://www.facebook.com/"
                className="hover:-translate-y-2 duration-300"
                target="blank"
              >
                <FaFacebookF className="text-xl text-white"></FaFacebookF>
              </a>
              <a
                href="https://www.dribbble.com/"
                className="hover:-translate-y-2 duration-300"
                target="blank"
              >
                <FaLinkedin className="text-xl text-white"></FaLinkedin>
              </a>
              <a
                href="https://www.twitter.com/"
                className="hover:-translate-y-2 duration-300"
                target="blank"
              >
                <FaTwitter className="text-xl text-white"></FaTwitter>
              </a>
            </div>
          </nav>
        </div>
        <div className=" flex  justify-center text-center items-center flex-end  py-3 px-3">
          <p>
            Copyright &copy; {new Date().getFullYear()} All Rights Reserved
            Here.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
