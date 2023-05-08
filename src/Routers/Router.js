import { createBrowserRouter } from "react-router-dom";
import Demo from "../Components/demo";
import Login from "../Components/Login";
import Main from "../Components/Main";
import Receipt from "../Components/Receipt";
import SpotifyTop from "../Components/SpotifyTop";
import MusicTop from "../Components/MusicTop";
import GenreTop from "../Components/GenreTop";
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
  {
    path: "/artists",
    element: <SpotifyTop />,
  },
  {
    path: "/music",
    element: <MusicTop />,
  },
  {
    path: "/genre",
    element: <GenreTop />,
  },
]);
export default loginRouter;
