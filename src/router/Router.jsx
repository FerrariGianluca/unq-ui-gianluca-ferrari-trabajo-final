import { useRoutes, useLocation, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Game from "../pages/Game";

const Router = () => {

  const routes = useRoutes([
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/game",
      element: <Game />
      },
    {
      path: "*",
      element: <Navigate to="/home" />,
    },
  ]);

  return routes;
};

export default Router;