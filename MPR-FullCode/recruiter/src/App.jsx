import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import Create from "./screens/Create";
import Job from "./screens/Job";
import { useAuthContext } from "./context/AuthProvider";
import Login from "./screens/Login";
import Register from "./screens/Register";

export default function App() {
  const { user } = useAuthContext();
  const routes = createBrowserRouter([
    {
      path: "/",
      element: user ? <Home /> : <Login />,
    },
    {
      path: "/create",
      element: <Create />,
    },
    {
      path: "/job",
      element: <Job />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={routes} />;
}
