import Root from '../Layouts/Root/Root'
import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home/Home';
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from './PrivateRoutes';
import Error from '../pages/Error'
import About from '../pages/Shared/About';
import BrandInfo from '../pages/Home/BrandInfo';
import AddProducts from '../pages/AddProducts';
import AddToCart from '../pages/Home/BrandInfo/AddToCart';
import UpdateProducts from '../pages/Home/BrandInfo/UpdateProducts';
import ProductDetails from '../pages/Home/BrandInfo/ProductDetails';

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
                path: '/addtocart',
                element: <PrivateRoute><AddToCart></AddToCart></PrivateRoute>,
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/updateProduct/:id',
                element: <PrivateRoute><UpdateProducts></UpdateProducts></PrivateRoute>,
            },
            {
                path: '/addproducts',
                element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
            },
            {
                path: '/users',
                element: <PrivateRoute><AddToCart></AddToCart></PrivateRoute>,
            }
            ,
            {
                path: "/details/:id",
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
            }
        ]

    }
])

export default routes;