import { useEffect } from "react";

function Toast({ id, count, setToast }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast((prev) => prev.filter((item) => item.id !== id));
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="flex bg-purple-700 w-full justify-center items-center h-20 rounded-2xl px-4 text-white shadow-md">
        <h1 className="text-2xl font-semibold">Reminder {count}</h1>
      </div>
    </>
  );
}

export default Toast;
