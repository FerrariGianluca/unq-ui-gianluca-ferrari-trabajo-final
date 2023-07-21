import { useRoutes, useLocation, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Game from "../pages/Game";
import {  } from "react-router-dom";

const Router = () => {

  const routes = useRoutes([
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/game/:mode",
      element: <Game />
    },
    /*{
      path: "*",
      element: <Navigate to="/home" />,
    },*/
  ]);

  return routes;
};

export default Router;