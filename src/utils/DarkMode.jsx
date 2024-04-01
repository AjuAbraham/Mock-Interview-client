import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useState } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="sm:fixed absolute z-10 sm:left-[1450px] sm:top-4  top-4 right-20">
      <button
        className="sm:rounded-xl rounded-full shadow-lg border-2 border-black w-[50px] h-[50px]  flex items-center justify-center hover:bg-black hover:text-white"
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
