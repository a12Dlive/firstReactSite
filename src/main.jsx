import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Home from "./routes/home";
import AboutMe from "./routes/aboutMe";
import Calculate from "./routes/calculate";
import SlideShow from "./routes/slideShow";
import Shop from "./routes/shop";
import Test from "./routes/test";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Root />
      </>
    ),
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/aboutme",
        element: <AboutMe />,
      },
      {
        path: "/aboutme",
        element: <AboutMe />,
      },
      {
        path: "/calculate",
        element: <Calculate />,
      },
      {
        path: "/slideshow",
        element: <SlideShow />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/test",
        element: <Test />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
