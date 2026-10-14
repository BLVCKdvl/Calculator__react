import { createBrowserRouter, Outlet } from "react-router";
// Импортируем страницы из слоя pages (желательно через lazy-load)
const Home = () => import("@/pages/home");
const Shop = () => import("@/pages/shop/ui");
// Импортируем виджеты
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { ProtectedLayout } from "./layouts/ProtectedLayout";

export const router = createBrowserRouter([
  {
    // Главный макет (Layout), который заменяет вашу разметку из App.tsx
    element: (
      <div className="app-wrapper flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-1 main-container bg-slate-900">
          <Outlet /> {/* Сюда будут рендериться подмаршруты */}
        </main>
        <Footer />
      </div>
    ),
    children: [
      { path: "/", lazy: () => import("@/pages/home") },
      { path: "/counter", lazy: () => import("@/pages/counter") },
      { path: "/calculator", lazy: () => import("@/pages/calculator") },
      { path: "/shop", lazy: () => import("@/pages/shop") },

      // Закрытая зона (вместо ProtectedRoute вокруг одной страницы)
      {
        element: <ProtectedLayout />,
        children: [
          { path: "/profile", lazy: () => import("@/pages/user-profile") },
        ],
      },
    ],
  },
]);
