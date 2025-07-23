import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Write from "./routes/Write.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/Homepage.tsx";
import PostListPage from "./routes/PostListPage.tsx";
import LoginPage from "./routes/LoginPage..tsx";
import RegisterPage from "./routes/Register.tsx";
import SinglePostPage from "./routes/SinglePostPage.tsx";
import MainLayouts from "./layouts/MainLayouts.tsx";

const router = createBrowserRouter([
  {
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/post",
        element: <PostListPage />,
      },
      {
        path: "/slug",
        element: <SinglePostPage />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
