import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./screens/LoginPage.jsx";
import SelectCategory from "./screens/SelectCategory.jsx";
import NotesPage from "./screens/NotesPage.jsx";
import MoviesPage from "./screens/MoviesPage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/selectcategory",
    element: <SelectCategory />,
  },
  {
    path: "/notespage",
    element: <NotesPage />,
  },
  {
    path: "/moviespage",
    element: <MoviesPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);