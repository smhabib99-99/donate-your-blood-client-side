import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import SearchPage from "../pages/SearchPage/SearchPage";
import BlogsPage from "../pages/BlogsPage/BlogsPage";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Home/Home/Shared/Secret/Secret";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'registration',
            element:<Registration></Registration>
        },
        {
            path: 'searchPage',
            element: <SearchPage></SearchPage>
        },
        {
            path: 'blogs',
            element:<BlogsPage></BlogsPage>,
            loader: () =>fetch('/blogs.json')
        },
        {
            path: 'secret',
            element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
  ]);