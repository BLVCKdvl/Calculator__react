import "@/app/styles/App.css";
import Counter from "../pages/Counter.tsx";
import Header from "../widgets/header/ui/Header.tsx";
import Footer from "../widgets/footer/ui/Footer.tsx";
import Home from "../pages/home/ui/Home.tsx";
import Calculator from "../pages/Calculator.tsx";
import Shop from "../pages/shop/ui/Shop.tsx";
import UserProfile from "../pages/UserProfile.tsx";

import { Routes, Route } from "react-router";
import { ProtectedRoute } from "../components/ProtectedRoute.tsx";

function App() {
  return (
    <div className="app-wrapper flex flex-col min-h-screen">
      <Header />

      <main className="flex flex-1 main-container bg-slate-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="shop" element={<Shop />} />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
