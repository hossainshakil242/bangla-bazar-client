import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/Routers.jsx";
import AuthPovider from "./providers/AuthPovider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// tanStack Query

// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="max-w-screen-xl mx-auto">
      <AuthPovider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
      </AuthPovider>
    </div>
  </StrictMode>
);
