import Layout from "../Layout/Layout"
import { createBrowserRouter } from "react-router"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import Home from "../Pages/Home/Home"

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
        ]
    },
    {
        path: "*",
        element: <ErrorPage />
    },
    
])

export default Routes