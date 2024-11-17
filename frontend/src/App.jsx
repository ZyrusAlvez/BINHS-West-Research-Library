import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Announcement from "./pages/Announcement";
import News from "./pages/News";
import Research from "./pages/Research"
import Academics from "./pages/Academics";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/announcement',
    element: <Announcement />
  },
  {
    path: '/news',
    element: <News />,
  },
  {
    path: '/research',
    element: <Research />
  },
  {
    path: '/academics',  
    element: <Academics />
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
} 