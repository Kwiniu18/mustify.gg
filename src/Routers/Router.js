import { createBrowserRouter } from "react-router-dom";
import Demo from "../Components/demo";
import Login from "../Components/Login";
const loginRouter = createBrowserRouter([
  {
    path: "/demo",
    element: <Demo />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
export default loginRouter;
