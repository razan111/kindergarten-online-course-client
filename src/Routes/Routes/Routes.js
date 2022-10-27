import { createBrowserRouter } from "react-router-dom";
import Layout from "../../layout/Layout";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Cetagory from "../../Pages/Catagory/Cetagory";
import Courses from "../../Pages/Courses/Courses";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/LogIn/Login";
import Register from "../../Pages/LogIn/Register/Register";
import Forms from "../../Pages/Shared/Form/Form";
import NotFound from "../../Pages/Shared/NotFound/NotFound";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Layout></Layout>,
                loader: () => fetch('https://kindergarten-server.vercel.app/courses'),
                children: [
                    {
                        path: '/courses',
                        element: <Courses></Courses>,
                        loader: () => fetch('https://kindergarten-server.vercel.app/courses'),
                    }
                ]
            },
            {

                path: '/cetagory/:id',
                element: <Layout></Layout>,
                loader: ({ params }) => fetch(`https://kindergarten-server.vercel.app/cetagory/${params.id}`),
                children:[
                    
                    {
                        path: '/cetagory/:id',
                        element: <Cetagory></Cetagory>,
                        loader: ({ params }) => fetch(`https://kindergarten-server.vercel.app/cetagory/${params.id}`)
                    }
                ]


            },
            {
                path: '/form',
                element: <PrivateRoute><Forms></Forms></PrivateRoute>
            },

            {
                path: '/blog',
                element: <Blog></Blog>

            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },

        ]

    },
    {
        path: '/*',
        element: <NotFound></NotFound>
    }
])