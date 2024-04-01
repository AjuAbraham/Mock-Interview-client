import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useState } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className=" fixed left-[1450px] top-4 ">
      <button
        className="rounded-xl shadow-lg border-2 border-black w-[50px] h-[50px]  flex items-center justify-center hover:bg-black hover:text-white"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode === false ? (
          <MdOutlineLightMode size={25} />
        ) : (
          <MdOutlineDarkMode size={25} color="white" />
        )}
      </button>
    </div>
  );
};

export default DarkMode;
