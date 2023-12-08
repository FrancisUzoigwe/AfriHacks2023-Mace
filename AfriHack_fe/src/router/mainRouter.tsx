import { createBrowserRouter } from "react-router-dom";
import FirstLayout from "../components/common/FirstLayout";
import LandingScreen from "../pages/auth/LandingScreen";
import RegisterScreen from "../pages/auth/RegisterScreen";
import SigninScreen from "../pages/auth/SigninScreen";
import Layout from "../components/common/Layout";
import HomeScreen from "../pages/screen/HomeScreen";

export const mainRouter = createBrowserRouter([
  {
    path: "/auth",
    element: <FirstLayout />,
    children: [
      {
        index: true,
        element: <LandingScreen />,
      },
    ],
  },
  {
    path: "/auth/register",
    element: <RegisterScreen />,
  },
  {
    path: "/auth/signin",
    element: <SigninScreen />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
]);
