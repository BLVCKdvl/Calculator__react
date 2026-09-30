import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div className="px-4 py-2 backdrop-blur font-light text-4xl tracking-widest text-slate-100">
      {formattedTime}
    </div>
  );
}

export default Clock;
