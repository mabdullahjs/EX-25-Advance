import { createRoot } from "react-dom/client";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import Product from "./Pages/Product.jsx";
import SingleProduct from "./Pages/SingleProduct.jsx";
import { Provider } from "react-redux";
import { store } from "./config/redux/store/store.js";
import Cart from "./Pages/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: 'cart',
        element: <Cart/>
      },
      {
        path: "singleproduct",
        element: <SingleProduct />,
        children: [
          {
            path: ":id",
            element: <SingleProduct />,
          }
        ]
      },
    ],
  },
  {
    path: "*",
    element: <h1>Not Found!!</h1>,
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>

);
