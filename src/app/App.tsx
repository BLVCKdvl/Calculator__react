import { RouterProvider } from "react-router";
import { AuthProvider } from "@/entities/user";
import { router } from "./providers/router";
import "./styles/App.css";

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
