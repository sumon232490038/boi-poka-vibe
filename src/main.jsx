import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./comopnent/Root/Root";
import ErrorPage from "./comopnent/ErrorPage/ErrorPage";
import Home from "./comopnent/Home/Home";
import Dashboard from "./comopnent/Dashboard/Dashboard";
import BookDetails from "./comopnent/BookDetails/BookDetails";
import ListedBooks from "./comopnent/ListedBooks/ListedBooks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "books/:bookId",
        loader: () => fetch("/booksData.json"),
        element: <BookDetails></BookDetails>,
      },
      {
        path: "ListedBooks",
        loader: () => fetch("/booksData.json"),
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
