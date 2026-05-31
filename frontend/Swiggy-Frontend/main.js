import react, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header";
import Body from "./src/component/Body";
import Footer from "./src/component/Footer";
import AppLayout from "./src/Applayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./src/component/Error";
import Contact from "./src/component/Contact";
import Cart from "./src/component/Cards";
import About from "./src/component/About";
import Home from "./src/component/Home";

import RestaurantMenu from "./src/component/RestaurantMenu";
import { lazy, Suspense } from "react";

const Grocery = lazy(() => import("./src/component/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/restaurant",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1 style={{ padding: "100px" }}>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      // Add the future flags here to opt-in early and clear console logs
      {
        v7_startTransition: true,
        v7_relativeSplatPath: true, // Good idea to add this one too!
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
