import "./App.css";
import Counter from "./components/Pages/Counter.tsx";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Pages/Home.tsx";

import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="app-wrapper flex flex-col min-h-screen">
      <Header />

      <main className="flex flex-1 main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
