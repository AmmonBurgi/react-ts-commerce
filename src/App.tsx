import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

//Imports for UI Components
import HomePage from "./Components/HomePage";
import ErrorPage from "./Components/ErrorPage";
import LoginPage from "./Components/LoginPage";
import AboutPage from "./Components/AboutPage";
import ShopPage from "./Components/ShopPage";
import ItemPage from "./Components/ItemPage";
import BasketPage from "./Components/BasketPage";

import ProtectedRoutes from "./Components/ProtectedRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoutes />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
        children: [
          {
            path: "item/:id",
            element: <ItemPage />
          }
        ]
      },
      {
        path: "basket",
        element: <BasketPage />
      }
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
