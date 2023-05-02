import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Jobs } from "../pages/Jobs";
import { Favorites } from "../pages/Favorites";
import { NotFound } from "../pages/NotFound";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Jobs />,
        },
        {
          path: "favorites",
          element: <Favorites />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  