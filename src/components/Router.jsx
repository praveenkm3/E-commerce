import App from "../App";
import Sports from "../pages/Sports";
import Accessories from "../pages/Accessories";
import Mobiles from "../pages/Mobiles";
import Laptops from "../pages/Laptops";
import Shirts from "../pages/Shirts";
import Signup from "../Auth/Signup";
import Login from "../Auth/Login";
import LandingPage from "./LandingPage";
import Cart from "../assets/User/Cart";
import WishList from "../assets/User/Wishlist";
import { createBrowserRouter, redirect } from "react-router";
import QuiltedImageList from "./SingleProduct";
import UserProfile from "../assets/User/UserProfile";
import PageNotFound from "./PageNotFound";

// import { GetAuthStatus } from "../assets/User/AuthContext";
async function authMiddleware({ context }, next) {
  // debugger;
  // const { userLoggedIn } = GetAuthStatus();
  const userlogged = localStorage.getItem("userlogged");
  console.log(userlogged);
  if (userlogged !== "true") {
    throw redirect("/login");
  }
  await next();
}

const routes = createBrowserRouter([
  {
    path: "/pagenotfound",
    element: <PageNotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },

  {
    middleware: [authMiddleware],
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/landingpage",
        element: <LandingPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
      {
        path: "/accessories",
        element: <Accessories />,
      },
      {
        path: "/mobiles",
        element: <Mobiles />,
      },
      {
        path: "/laptops",
        element: <Laptops />,
      },
      {
        path: "/shirts",
        element: <Shirts />,
      },
      {
        path: "/sports",
        element: <Sports />,
      },
      {
        path: "/profile",
        element: <UserProfile />,
      },
      {
        path: "/single",
        element: <QuiltedImageList />,
      },
    ],
  },
]);
export default routes;
