import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Statistics from "./components/Statistics/Statistics";
import Blogs from "./components/Blogs/Blogs";
import ErrorPage from "./components/Errors/ErrorPage";
import JobDetails from "./components/JobDetails/JobDetails";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("/jobs.json"), // warning: only load the data you need. do not load all the data
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },

      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("/jobs.json"), // Not a best idea, do not load all data. load only what you need
      },

      {
        path: "/footer",
        element: <Footer></Footer>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  </StrictMode>
);

//HelmetProvider is used to display every route title
