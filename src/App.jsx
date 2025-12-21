import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import FetchDataComponent from "./components/FetchDataComponent";
import Hooks from "./components/Hooks";
import DemoHooks from "./components/Vaishnavi/DemoHooks";
import About from "./components/About";
import Layout from "./components/Layout";
import UserName from "./components/UserName";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <FetchDataComponent />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "hooks",
        element: <Hooks />,
      },
      {
        path: "demo",
        element: <DemoHooks />,
      },
      {
        path: "user",
        element: <UserName />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
} //react

export default App;
