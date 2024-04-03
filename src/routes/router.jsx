import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import CategoryFoods from "../pages/CategoryFoods";
import SingleRecipe from "../pages/SingleRecipe";
import AboutUs from "../pages/AboutUs";
import TakeChallenge from "../components/TakeChallenge";
import AreaFiltered from "../components/AreaFiltered/AreaFiltered";
import ContactUs from "../pages/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categoryFood/:category",
        element: <CategoryFoods />,
      },
      {
        path: "/singleRecipe/:id",
        element: <SingleRecipe />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/takeChallenge",
        element: <TakeChallenge />,
      },
      {
        path: "/areaFiltered",
        element: <AreaFiltered />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
    ],
  },
]);
