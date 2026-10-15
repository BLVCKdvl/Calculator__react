import { useState, useEffect } from "react";

function Calculator() {
  const [display, setDisplay] = useState("");
  const baseBtnStyle =
    "h-14 text-2xl font-semibold rounded-2xl transition duration-150 active:scale-95 shadow-md";
  const numStyle = `${baseBtnStyle} bg-slate-700 hover:bg-slate-600 text-white`;
  const opStyle = `${baseBtnStyle} bg-teal-600 hover:bg-teal-500 text-white shadow-teal-900/10`;
  const actionStyle = `${baseBtnStyle} bg-rose-600 hover:bg-rose-500 text-white`;

  const handleInput = (value: string) => {
    if (value === "C" || value === "Escape") {
      setDisplay("");
      return;
    }
    if (value === "back" || value === "Backspace") {
      setDisplay((prev) => prev.slice(0, -1));
      return;
    }

    if (value === "=" || value === "Enter") {
      if (!display) return;

      try {
        const sanitizedExpression = display.replace(/[^0-9+\-*/().]/g, "");
        const result = new Function(`return ${sanitizedExpression}`)();

        if (result === Infinity || isNaN(result)) {
          setDisplay("Error");
        } else {
          setDisplay(Number(result.toFixed(8)).toString());
        }
      } catch {
        setDisplay("Error");
      }

      return;
    }

    const operators = ["+", "-", "*", "/"];
    if (operators.includes(value) || value === ".") {
      setDisplay((prev) => {
        if (!prev) return value === "-" ? "-" : "";
        const lastChar = prev.slice(-1);

        if (operators.includes(lastChar) || lastChar === ".") {
          return prev.slice(0, -1) + value;
        }
        return prev + value;
      });
      return;
    }

    setDisplay((prev) => (prev === "Error" ? value : prev + value));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const validKeys = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "+",
        "-",
        "*",
        "/",
        ".",
        "(",
        ")",
        "Enter",
        "Backspace",
        "Escape",
        "=",
      ];

      if (validKeys.includes(e.key)) {
        e.preventDefault();
        handleInput(e.key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [display]);

  const buttons = [
    { label: "C", style: actionStyle, value: "C" },
    { label: "(", style: opStyle, value: "(" },
    { label: ")", style: opStyle, value: ")" },
    { label: "÷", style: opStyle, value: "/" },

    { label: "7", style: numStyle, value: "7" },
    { label: "8", style: numStyle, value: "8" },
    { label: "9", style: numStyle, value: "9" },
    { label: "×", style: opStyle, value: "*" },

    { label: "4", style: numStyle, value: "4" },
    { label: "5", style: numStyle, value: "5" },
    { label: "6", style: numStyle, value: "6" },
    { label: "−", style: opStyle, value: "-" },

    { label: "1", style: numStyle, value: "1" },
    { label: "2", style: numStyle, value: "2" },
    { label: "3", style: numStyle, value: "3" },
    { label: "+", style: opStyle, value: "+" },

    { label: "0", style: numStyle, value: "0" },
    { label: ".", style: numStyle, value: "." },
    { label: "⌫", style: actionStyle, value: "back" },
    { label: "=", style: opStyle, value: "=" },
  ];

  return (
    <section className="calculator-page w-full min-h-[70vh] flex flex-col items-center justify-center p-4">
      <h2 className="text-white text-3xl font-light mb-6 tracking-wide">
        Calculator page
      </h2>
      <section className="w-full max-w-xs p-6 bg-slate-800 border border-slate-700 rounded-3xl shadow-2xl flex flex-col gap-4">
        <input
          type="text"
          value={display || "0"}
          readOnly
          className="w-full p-4 bg-slate-900 border border-slate-700 rounded-2xl text-right text-4xl font-mono text-teal-400 focus:outline-none tracking-wider"
        />
        <div className="grid grid-cols-4 gap-3 text-white">
          {buttons.map((btn, index) => (
            <button
              key={index}
              onClick={() => handleInput(btn.value)}
              className={btn.style}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Calculator;
