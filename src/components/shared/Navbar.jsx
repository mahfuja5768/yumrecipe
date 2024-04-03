import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { getImgUrl } from "../../utils/getImagePath";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
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
  ];
  return (
    <div className="border-b h-24 lg:h-24 relative ">
      <nav className="max-w-[1140px]  mx-auto px-4 flex items-center justify-between gap-5">
        <div className="flex items-center gap-5">
          <Link to="/">
            <img
              className="h-24"
              src={getImgUrl("cravings.png")}
              alt="logo.png"
            />
          </Link>
          <ul className="gap-6 lg:flex hidden text-lg font-medium text-primary">
            {navs.map((item, idx) => (
              <Link to={item.path} key={idx}>
                <li className="flex items-center gap-2 text-primary hover:text-opacity-80 duration-300">
                  {item.nav}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className=" items-center gap-6 lg:flex hidden">
          <ul className="flex items-center gap-6 text-lg font-medium text-primary">
            <Link to="/contactUs">
              <li className="text-primary hover:text-opacity-80 duration-300">
                Contact Us
              </li>
            </Link>
          </ul>
          <Button text="Sign up free →" />
        </div>
        {showNav ? (
          <div className="flex lg:hidden  text-primary text-lg">
            <button onClick={() => setShowNav(!showNav)}>
              <RxCross2 className="font-bold" />
            </button>
          </div>
        ) : (
          <div className="flex lg:hidden text-primary text-lg font-bold">
            <button onClick={() => setShowNav(!showNav)}>
              <FaBars />
            </button>
          </div>
        )}
      </nav>

      {/* tabs and small devices */}
      {showNav && (
        <nav
          className={`flex  flex-col justify-center z-10 bg-[#24332a] text-white  py-12 w-full text-center absolute duration-700 ease-in ${
            showNav ? "top-24" : "top-[-1000px]"
          }`}
        >
          <div>
            <ul className="gap-6 lg:hidden flex flex-col justify-center items-center text-lg font-medium">
              {navs.map((item, idx) => (
                <Link to={item.path} key={idx}>
                  <li className="flex items-center gap-2 hover:text-opacity-20">
                    {item.nav}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div className=" items-center gap-6 lg:hidden flex flex-col mt-12">
            <ul className="flex items-center gap-6 ">
              <Link to="#">
                <li className=" text-lg font-medium hover:text-opacity-20">
                  Contact Us
                </li>
              </Link>
            </ul>
            <Button inWhite text="Sign up free →" />
          </div>
        </nav>
      )}
    </div>
  );
}
