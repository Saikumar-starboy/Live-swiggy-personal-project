import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import Footer from "./src/Components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/Components/About";
import Contact from "./src/Components/Contact";
import Error from "./src/Components/Error";
import "../namastereact/";
import RestaurantMenu from "./src/Components/RestaurantMenu";
import Grocery from "./src/Components/Grocery";
import UserContext from "./src/utils/UserContext";
import ProfileLogin from "./src/Components/ProfileLogin";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/Components/Cart";

const Grocery = lazy(() => import("./src/Components/Grocery"));

const AppLayout = () => {
  const [username, setUsername] = useState();
  useEffect(() => {
    const data = {
      name: "Sai",
    };
    setUsername(data.name);
  }, []);
  return (
    <div className="app">
        <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: username }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
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
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/profile",
        element: <ProfileLogin />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
