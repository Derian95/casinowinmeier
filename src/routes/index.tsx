import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layout";
import { BienvenidoGanar, Landing, Options, RestaurantePage, TycClub } from "../pages";
import Politicas from "../pages/Politicas";

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
    path: "catalogo",
    element: <Options />,
  },
  {
    path: "tyc-bienvenido-a-ganar",
    element: <BienvenidoGanar />,
  },
  {
    path: "reglamento",
    element: <TycClub />,
  },
  {
    path: "politicas",
    element: <Politicas />,
  },
  {
    path: "restaurante",
    element: <RestaurantePage />,
  },
]);
