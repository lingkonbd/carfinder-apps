import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import AdvertisedItems from "../components/AdvertisedItems";
import AllBuyer from "../components/AllBuyer";
import AllSellers from "../components/AllSellers";
import AllUsers from "../components/AllUsers";
import Blogs from "../components/Blogs";

import ErrorPage from "../components/ErrorPage";
import CategoryProducts from "../components/Home/CategoryProducts";
import Home from "../components/Home/Home";
import ProductDetails from "../components/Home/ProductDetails";
import MyBuyers from "../components/MyBuyers";
import MyOrders from "../components/MyOrders";
import MyProducts from "../components/MyProducts";
import MyWishList from "../components/MyWishList";
import Payment from "../components/Payment";
import ReportedItems from "../components/ReportedItems";
import SignIn from "../components/SignUp/SignIn";
import SignUp from "../components/SignUp/SignUp";
import OthersProjects from "../pages/OthersProjects";
import Shops from "../pages/Shops";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";
import DashbordRoot from "./DashbordRoot";
import PrivateRoute from "./PrivateRoute";
import Root from "./Root";
import SellerRoute from "./SellerRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/shops",
        element: <Shops />,
      },
      // {
      //   path: "/project-docs",
      //   element: <ProjectDocs />,
      // },
      {
        path: "/others-projects",
        element: <OthersProjects />,
      },
      {
        path: "/category/:name",
        element: <CategoryProducts />,
        loader: ({ params }) => {
          return fetch(
            `https://car-showroom-server.vercel.app/category/${params.name}`
          );
        },
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(
            `https://car-showroom-server.vercel.app/product-details/${params.id}`
          ),
      },
      {
        path: "/advertise",
        element: <AdvertisedItems />,
      },

      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashbordRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <MyWishList />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/addProduct",
        element: (
          <PrivateRoute>
            <SellerRoute>
              <AddProduct />
            </SellerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/myProducts",
        element: (
          <PrivateRoute>
            <SellerRoute>
              <MyProducts />
            </SellerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/myBuyers",
        element: (
          <PrivateRoute>
            <SellerRoute>
              <MyBuyers />
            </SellerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/allBuyer",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllBuyer />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/reportedItem",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ReportedItems />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/allUsers",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllUsers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/allSeller",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllSellers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/myOrders",
        element: (
          <PrivateRoute>
            <BuyerRoute>
              <MyOrders />
            </BuyerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        loader: ({ params }) =>
          fetch(`https://car-showroom-server.vercel.app/bookings/${params.id}`),
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
