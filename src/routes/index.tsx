import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layout";
import { Landing, Options } from "../pages";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <Landing />,
        index: true,
      },
    ],
  },
  {
    path: "terminos",
    element: <Options />,
  },
]);
