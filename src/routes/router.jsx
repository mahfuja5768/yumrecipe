import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import CategoryFoods from "../pages/CategoryFoods";
import SingleRecipe from "../pages/SingleRecipe";

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
    ],
  },
]);
