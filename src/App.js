import React from "react";
import Login from "./Components/demo";
import { RouterProvider } from "react-router-dom";
import loginRouter from "./Routers/Router";
import "./Styles/index.scss";
function App() {
  return <RouterProvider router={loginRouter} />;
}

export default App;
