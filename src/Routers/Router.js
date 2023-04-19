import { createBrowserRouter } from "react-router-dom";
import Demo from "../Components/demo";
import Login from "../Components/Login";
import Main from "../Components/Main";
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
]);
export default loginRouter;
