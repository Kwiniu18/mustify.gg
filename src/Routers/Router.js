import { createBrowserRouter } from "react-router-dom";
import Demo from "../Components/demo";
import Login from "../Components/Login";
import Main from "../Components/Main";
import Receipt from "../Components/Receipt";
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
]);
export default loginRouter;
