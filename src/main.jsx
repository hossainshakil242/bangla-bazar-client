import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/Routers.jsx";
import AuthPovider from "./providers/AuthPovider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="max-w-screen-xl mx-auto">
      <AuthPovider>
        <RouterProvider router={router}></RouterProvider>
      </AuthPovider>
    </div>
  </StrictMode>
);
