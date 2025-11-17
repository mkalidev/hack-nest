import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// Supports weights 100-900
import "@fontsource-variable/inter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppKitProvider } from "./Provider.jsx";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppKitProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AppKitProvider>
  </StrictMode>
);
