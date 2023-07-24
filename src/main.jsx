import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/routes.jsx";
import AuthProvider from "./Context/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
);
