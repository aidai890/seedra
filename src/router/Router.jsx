import { createBrowserRouter } from "react-router-dom";
import NotFount from "../pages/notFount/NotFount";
import Layout from "../layout/Layout";
import About from "../pages/about/About";
import AllProduxts from "../pages/allProduxts/AllProduxts";
import Blog from "../pages/blog/Blog";
import Home from "../pages/home/Home";
import Contacts from "../pages/contacts/Contacts";

export const router =createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    errorElement:<NotFount/>,
    children:[
        {
           path:"/",
           element:<Home/> 
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/all",
            element:<AllProduxts/>
        },
        {
            path:"/blog",
            element:<Blog/>
        },
        {
            path:"/contacts",
            element:<Contacts/>
        },
        
    ]
}])