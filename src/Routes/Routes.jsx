import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/ErrorPage/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoutes";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Classes from "../pages/Classes/Classes/Classes";
import Instructor from "../pages/Instructor/Instructor";
import AdminRoute from "./AdminRoute";
import SelectedClasses from "../pages/Dashboard/AllUsers/SelectedClasses/SelectedClasses";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/classes',
            element:<Classes></Classes>
        },
        {
            path:'/instructor',
            element:<Instructor></Instructor>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signUp',
          element:<Register></Register>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'allUsers',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:'selectedClass',
          element:<PrivateRoute><SelectedClasses></SelectedClasses></PrivateRoute>
        }
      ]
    }
  ]);