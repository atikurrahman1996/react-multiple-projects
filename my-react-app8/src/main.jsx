import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Error from "./components/Errors/Error";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails.jsx";
import Posts from "./components/HandlePosts/Posts.jsx";
import PostDetail from "./components/PostDetail/PostDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/header",
        element: <Header />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },

      //Dynamic routing
      {
        path: "/user/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails />,
      },

      // posts
      {
        path: "/posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Posts />,
      },

      {
        path: "/post/:postId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetail />,
      },

      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

// Define an Error Component

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* {<App />} */}
    <RouterProvider router={router} />
  </StrictMode>
);
