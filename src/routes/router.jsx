import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
import Error from "../Error/Error";
import Home from "../pages/home/Home";
import Signup from "../components/Signup";
import Login from "../components/Login";
// import Subscription from "../pages/subscription/subscription";
import MyProfile from "../components/MyProfile";
import Dashboard from "../pages/dashboard/Dashboard";
import AllUsers from "../pages/adminDashboard/AllUsers";
import AllArticles from "../pages/allArticles/AllArticles";
import Details from "../components/Details";
import Private from "./private/Private";
import Premium from "../pages/premium/Premium";
import AdminHome from "../pages/adminDashboard/AdminHome";
import AdminAllArticles from "../pages/adminDashboard/AdminAllArticles";
import AdminRoute from "./AdminRoute";
import AddPublisher from "../pages/adminDashboard/AddPublisher";
import AddArticles from "../pages/addArticles/AddArticles";
import MyArticles from "../pages/myArticles/MyArticles";
import UpdateArticle from "../components/UpdateArticle";
import Payment from "../pages/subscription/Payment";
import Subscription from "../pages/subscription/Subscription";
import About from "../pages/about/About";
// import SubscriptionPage from "../pages/subscription/Subscription";

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
            element:<Private><Subscription></Subscription></Private>
        },
        {
            path: '/subscription/payment/:price',
            element: <Private><Payment></Payment></Private>
        },
        
        {
            path:'/myProfile',
            element:<Private><MyProfile></MyProfile></Private>
        },
        {
            path:'/allArticles',
            element:<AllArticles></AllArticles>
        },
        {
            path:'/details/:id',
            element:<Details></Details>
        },
        {
            path:'/premium',
            element:<Private><Premium></Premium></Private>
        },
        {
            path:'/addArticles',
            element:<Private><AddArticles></AddArticles></Private>
        },
        {
            path: '/myArticles',
            element:<Private><MyArticles></MyArticles></Private>
        },
        {
            path:'/update/:id',
            element: <UpdateArticle></UpdateArticle>
        },
        {
            path:'/about',
            element:<About></About>
        }
      ]
    },
    {
        path:'/dashboard',
        
        element:<Private><AdminRoute><Dashboard></Dashboard></AdminRoute></Private>,
        children:[
            {
                path:'home',
                
                element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path:'users',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'articles',
                element:<AdminRoute><AdminAllArticles></AdminAllArticles></AdminRoute>
            },
            {
                path: 'publishers',
                element: <AdminRoute><AddPublisher></AddPublisher></AdminRoute>
            }
        ]
    }
  ]);
  export default router;