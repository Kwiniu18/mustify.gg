import { createBrowserRouter } from "react-router-dom";
import Demo from "../Components/demo";
import Login from "../Components/Login";
import Main from "../Components/Main";
import Receipt from "../Components/Receipt";
import SpotifyTop from "../Components/SpotifyTop";
const loginRouter = createBrowserRouter([
  {
    path: "/demo",
    element: <Demo />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/main",
    element: <Main />,
  },
  {
    path: "/receipt",
    element: <Receipt />,
  },
  {
    path: "/spotifyTop",
    element: <SpotifyTop />,
  },
]);
export default loginRouter;
