import { createBrowserRouter, Outlet } from "react-router";

import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { ProtectedLayout } from "./layouts/ProtectedLayout";

export const router = createBrowserRouter([
  {
    element: (
      <div className="app-wrapper flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-1 main-container bg-slate-900">
          <Outlet />
        </main>
        <Footer />
      </div>
    ),
    children: [
      { path: "/", lazy: () => import("@/pages/home") },
      { path: "/counter", lazy: () => import("@/pages/counter") },
      { path: "/calculator", lazy: () => import("@/pages/calculator") },
      { path: "/shop", lazy: () => import("@/pages/shop") },

      {
        element: <ProtectedLayout />,
        children: [
          { path: "/profile", lazy: () => import("@/pages/user-profile") },
        ],
      },
    ],
  },
]);
