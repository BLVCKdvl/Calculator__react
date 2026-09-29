import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let textColor = "text-white";

  if (count > 0) {
    textColor = "text-teal-400";
  } else if (count < 0) {
    textColor = "text-rose-500";
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-900 text-white gap-6">
      <h1 className="text-3xl font-light text-slate-400">Counter</h1>

      <div className={`text-6xl font-bold ${textColor}`}>{count}</div>

      <div className="flex gap-4">
        <button
          onClick={() => setCount(count - 1)}
          className="px-6 py-2 bg-rose-600 hover:bg-rose-700 transition rounded-lg font-medium shadow-md shadow-rose-900/20 active:scale-95"
        >
          Minus
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-6 py-2 bg-teal-600 hover:bg-teal-700 transition rounded-lg font-medium shadow-md shadow-teal-900/20 active:scale-95"
        >
          Plus
        </button>
      </div>

      {count !== 0 && (
        <button
          onClick={() => setCount(0)}
          className="px-6 py-2 bg-slate-700 hover:bg-slate-600 transition rounded-lg font-medium sctive:scale-95 mt-4"
        >
          Reset
        </button>
      )}
    </div>
  );
}

export default App;
