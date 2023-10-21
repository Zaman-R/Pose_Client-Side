import Root from '../Layouts/Root/Root'
import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home/Home';
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from './PrivateRoutes';
import Error from '../pages/Error'
import About from '../pages/Shared/About';
import BrandInfo from '../pages/Home/BrandInfo/BrandInfo';
import AddProducts from '../pages/AddProducts';

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
                path: '/addcart/:id',
                element: <PrivateRoute></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/addproducts',
                element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
            },
        ]

    }
])

export default routes;