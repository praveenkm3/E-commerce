import App from '../App';
import Sports from '../pages/Sports'; 
import Accessories from '../pages/Accessories'; 
import Mobiles from '../pages/Mobiles'; 
import Laptops from '../pages/Laptops'; 
import Shirts from '../pages/Shirts'; 
import Signup from "../Auth/Signup";
import Login from "../Auth/Login";
import LandingPage from './LandingPage';
import Home from './Home';
import Cart from '../assets/User/Cart';
import WishList from '../assets/User/Wishlist';
import { createBrowserRouter } from 'react-router';
import QuiltedImageList from './SingleProduct';
import UserProfile from '../assets/User/UserProfile';
import PageNotFound from './PageNotFound';
const routes=createBrowserRouter([
  {
    path:"/pagenotfound",
    element:<PageNotFound/>
  },
  {
    path:"/profile",
    element:<UserProfile/>
  },
  {
    path:"/single",
    element:<QuiltedImageList/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/sports',
    element:<Sports/>
  }, 
  {
    path:'/accessories',
    element:<Accessories/>
  }, 
  {
    path:'/mobiles',
    element:<Mobiles/>
  }, 
  {
    path:'/laptops',
    element:<Laptops/>
  }, 
  {
    path:'/shirts',
    element:<Shirts/>
  }, 
  {
    path:'/landingpage',
    element:<LandingPage/>
  },
  {
    path:'/home',
    element:<Home/>
  },
  {
    path:'/cart',
    element:<Cart/>
  },
  {
    path:'/wishlist',
    element:<WishList/>
  },
])
export default routes;