import Layout from "../Layout/Layout"
import { createBrowserRouter } from "react-router"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import Home from "../Pages/Home/Home"
import About from "../Pages/About/About"
import Services from "../Pages/Services/Services"
import Contact from "../Pages/Contact/Contact"
import Blog from "../Pages/Blog/Blog"
import GetAQuote from "../Pages/GetAQuote/GetAQuote"

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path: "services",
                element: <Services/>
            },
            {
                path: "contact",
                element:<Contact/>
            },
            {
                path:"blog",
                element:<Blog/>
            },
            {
                path:"getaquote",
                element:<GetAQuote/>
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage />
    },
    
])

export default Routes