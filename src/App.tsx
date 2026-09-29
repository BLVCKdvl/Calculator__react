import "./App.css";
import Counter from "../src/components/Pages/Counter/Counter.tsx";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app-wrapper flex flex-col min-h-screen">
      <Header />

      <main className="flex flex-1 main-container">
        <Counter />
      </main>

      <Footer />
    </div>
  );
}

export default App;
