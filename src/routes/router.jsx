import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
import Error from "../Error/Error";
import Home from "../pages/home/Home";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Subscription from "../pages/subscription/subscription";
import MyProfile from "../components/MyProfile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path: '/signup',
            element:<Signup></Signup>
        },
        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path:'/subscription',
            element:<Subscription></Subscription>
        },
        {
            path:'/myProfile',
            element:<MyProfile></MyProfile>
        }
      ]
    },
  ]);
  export default router;