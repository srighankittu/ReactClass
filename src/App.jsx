import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import FetchDataComponent from "./components/FetchDataComponent";
import Hooks from "./components/Hooks";
import DemoHooks from "./components/Vaishnavi/DemoHooks";
import About from "./components/About";
import TopNav from "./components/TopNav";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FetchDataComponent />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  return (
    <div>
      <TopNav />
      <RouterProvider router={router}>
        <Hooks />
        <DemoHooks />
        <FetchDataComponent />
      </RouterProvider>
    </div>
  );
} //react

export default App;
