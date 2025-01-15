import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
import Error from "../Error/Error";
import Home from "../pages/home/Home";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Subscription from "../pages/subscription/subscription";
import MyProfile from "../components/MyProfile";
import Dashboard from "../pages/dashboard/Dashboard";
import AllUsers from "../pages/adminDashboard/AllUsers";
import AllArticles from "../pages/allArticles/AllArticles";
import Details from "../components/Details";
import Private from "./private/Private";

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
        },
        {
            path:'/allArticles',
            element:<AllArticles></AllArticles>
        },
        {
            path:'/details/:id',
            element:<Private><Details></Details></Private>
        }
      ]
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'users',
                element:<AllUsers></AllUsers>
            }
        ]
    }
  ]);
  export default router;