import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Jobs } from "../pages/Jobs";
import { Favorites } from "../pages/Favorites";
import { NotFound } from "../pages/NotFound";
import { Vacation } from "../pages/Vacation";
import { ErrorBoundary } from "../components/Boundary/ErrorBoundary ";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: "/",
          element: <Jobs />,
        },
        {
          path: "vacation/:id",
          element: <Vacation />,
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
  