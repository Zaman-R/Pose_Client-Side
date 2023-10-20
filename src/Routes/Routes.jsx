import Root from '../Layouts/Root/Root'
import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home/Home';
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from './PrivateRoutes';
import Error from '../pages/Error'
import About from '../pages/Shared/About';
import BrandInfo from '../pages/Home/BrandInfo/BrandInfo';

const routes = createBrowserRouter([
    {
        path : '/',
        element:  <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader: () => fetch('/data.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/Register',
                element: <Register></Register>
            },
            {
              path: "/brands/:brandName", // Dynamic route parameter
              element: <PrivateRoute>
                <BrandInfo />
              </PrivateRoute>,
            },
            {
                path: '/news/:id',
                element: <PrivateRoute></PrivateRoute>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blogs',
                element: <PrivateRoute></PrivateRoute>
            },
            {
                path: '/books',
                element: <PrivateRoute></PrivateRoute>
            },
        ]

    }
])

export default routes;