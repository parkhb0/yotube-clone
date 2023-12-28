import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Videos from "../pages/Videos";
import VideoDetail from "../pages/VideoDetail";

const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "/",
        element: <Videos />,
      },
      {
        path: "/videos",
        element: <Videos />,
      },
      {
        path: "/videos/:keyword",
        element: <Videos />,
      },
      {
        path: "/videos/watch/:keyword",
        element: <VideoDetail />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default rootRouter;
