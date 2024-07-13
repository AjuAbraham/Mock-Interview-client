import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(()=>{return localStorage.getItem("mode")==="black"});
  const setLocal = () => {
    const newMode = !darkMode;
    setDarkMode(!darkMode);
    localStorage.setItem("mode",newMode?"black":"white")
  };
  useEffect(() => {
    const mode = localStorage.getItem('mode');
    if (mode === 'black') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  
  return (
    <div className="sm:fixed absolute z-10 sm:left-[1450px] sm:top-4  top-4 right-20">
      <button
        className="sm:rounded-xl rounded-full shadow-lg border-2 border-black w-[50px] h-[50px]  flex items-center justify-center hover:bg-black hover:text-white"
        onClick={setLocal}
      >
        {darkMode? (
          <MdOutlineDarkMode size={25} color="white" />
        ) : (
          <MdOutlineLightMode size={25} />
        )}
      </button>
    </div>
  );
};

export default DarkMode;
