import { createBrowserRouter } from "react-router-dom";
import FirstLayout from "../components/common/FirstLayout";
import LandingScreen from "../pages/auth/LandingScreen";
import RegisterScreen from "../pages/auth/RegisterScreen";
import SigninScreen from "../pages/auth/SigninScreen";
import Layout from "../components/common/Layout";
import HomeScreen from "../pages/screen/HomeScreen";
import PrivateRoute from "./PrivateRoute";
import AskScreen from "../pages/auth/AskScreen";
import CreateScreen from "../pages/admin/CreateScreen";
import SellerLayout from "../components/common/SellerLayout";

export const mainRouter = createBrowserRouter([
  {
    path: "/store",
    element: <SellerLayout />,
    children: [
      {
        index: true,
        element: <CreateScreen />,
      },
    ],
  },
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
    path: "/auth/ask",
    element: <AskScreen />,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
]);
