import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Cetagory from "../../Pages/Catagory/Cetagory";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/LogIn/Login";
import Register from "../../Pages/LogIn/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/courses')
            },
           {
                path: '/cetagory/:id',
                element: <Cetagory></Cetagory>,
                loader: ({params}) => fetch(`http://localhost:5000/cetagory/${params.id}`)
           },
           {
                path: '/blog',
                element: <Blog></Blog>

           },
            
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])