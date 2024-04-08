import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
        {
          path: "/projects/:id",
          element: <Project />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
