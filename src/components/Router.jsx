import App from '../App';
import Sports from '../pages/Sports';
import SportProduct from '../SinglePages/SportProduct';
import Accessories from '../pages/Accessories';
import AccessoryProduct from '../SinglePages/AccessoryProduct';
import Mobiles from '../pages/Mobiles';
import MobileProduct from '../SinglePages/MobileProduct';
import Laptops from '../pages/Laptops';
import LaptopProduct from '../SinglePages/LaptopProduct';
import Shirts from '../pages/Shirts';
import ShirtProduct from '../SinglePages/ShirtProduct';
import Signup from "../Auth/Signup";
import Login from "../Auth/Login";
import LandingPage from './LandingPage';
import Home from './Home';
import { createBrowserRouter } from 'react-router';
const routes=createBrowserRouter([
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
    path:'/sports/:id',
    element:<SportProduct/>
  },
  {
    path:'/accessories',
    element:<Accessories/>
  },
  {
    path:'/accessories/:id',
    element:<AccessoryProduct/>
  },
  {
    path:'/mobiles',
    element:<Mobiles/>
  },
  {
    path:'/mobiles/:id',
    element:<MobileProduct/>
  },
  {
    path:'/laptops',
    element:<Laptops/>
  },
  {
    path:'/laptops/:id',
    element:<LaptopProduct/>
  },
  {
    path:'/shirts',
    element:<Shirts/>
  },
  {
    path:'/shirts/:id',
    element:<ShirtProduct/>
  },
  {
    path:'/landingpage',
    element:<LandingPage/>
  },
  {
    path:'/home',
    element:<Home/>
  }
])
export default routes;