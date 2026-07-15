import { useEffect } from "react";

function Toast({ id, setToast }) {
  useEffect(() => {
    let timer = setTimeout(() => {
      setToast((prev) => prev.filter((item) => id !== item));
    }, 3000);
  }, []);

  return (
    <>
      <div className="flex bg-purple-700 w-full justify-center items-center h-20 rounded-2xl">
        <h1 className="text-3xl ">Reminder</h1>
      </div>
    </>
  );
}

export default Toast;
