import { useEffect } from "react";

const TOAST_DURATION = 3000;

function Toast({ id, count, setToast }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast((prev) => prev.filter((item) => item.id !== id));
    }, TOAST_DURATION);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="relative bg-purple-700 w-full flex justify-center items-center h-20 rounded-2xl px-4 text-white shadow-md overflow-hidden">
        <h1 className="text-2xl font-semibold">Reminder {count}</h1>
        <div
          className="absolute bottom-0 left-0 h-3 bg-red-400"
          style={{
            width: "100%",
            animation: `shrinkWidth ${TOAST_DURATION}ms linear forwards`,
          }}
        />
      </div>
    </>
  );
}

export default Toast;
