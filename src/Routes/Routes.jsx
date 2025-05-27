import Layout from "../Layout/Layout"
import { createBrowserRouter } from "react-router"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
    },
    {
        path: "*",
        element: <ErrorPage />
    }
])

export default Routes