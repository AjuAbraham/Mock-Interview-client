

import { useState, useEffect } from "react";
import { MdCallEnd } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { IoPlayOutline } from "react-icons/io5";
import Editor from "@monaco-editor/react";

const Options = {
  python: {
    language: "python",
    value: "# Write your python code here....",
  },
  java: {
    language: "java",
    value: "// Write your java code here....",
  },
  cpp: {
    language: "cpp",
    value: "// Write your cpp code here....",
  },
};

function Error() {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState("");
  const [editorHeight, setEditorHeight] = useState("85vh");
  const [showOutput, setShowOutput] = useState(false);
  const [output, setOutput] = useState("");
  const [optionName, setOptionName] = useState("");
  let check = localStorage.getItem("mode");

  useEffect(() => {
    const windowHeight = window.innerHeight;
    if (windowHeight <= 650) {
      setEditorHeight("62vh");
    } else {
      setEditorHeight("85vh");
    }
  }, []);

  const HandleChange = () => {
    const windowHeight = window.innerHeight;
    if (windowHeight <= 650) {
      setEditorHeight("28vh");
    } else {
      setEditorHeight("40vh");
    }
    setShowOutput(true);
  };
  const HandleScreenChange = () => {
    const windowHeight = window.innerHeight;
    if (windowHeight <= 650) {
      setEditorHeight("62vh");
    } else {
      setEditorHeight("85vh");
    }
    setShowOutput(!showOutput);
  };
  const option = Options[optionName] || { language: "", value: "" };

  return (
    
      <div className="">
         {/* navigation section */}
      <div> 
      
      <div className=" bg-slate-800 h-10 sm:p-6 w-full flex justify-between items-center">
        <div className="w-40 h-8 ">
          <img src={`${"src/assets/blackLogo.png"}`} alt="404" />
        </div>
        <div>
          <div className="hidden sm:mr-10 sm:gap-6 gap-2 sm:flex">
            <div className="p-1 sm:w-30 text-[15px] rounded-md font-semibold items-center text-center bg-gray-600 text-white hover:bg-amber-600 cursor-pointer">
              Copy Room Id
            </div>
            <div className="p-2  sm:w-10 rounded-md flex justify-center items-center bg-red-500 text-white hover:bg-red-700 cursor-pointer">
              <MdCallEnd />
            </div>
          </div>

          <div
            className={` mr-28  absolute top-[50px] transition-all duration-300 ease-in-out rounded-md right-[-101px] w-[150px] sm:hidden bg-slate-300 dark:bg-slate-800 z-20  ${
              open ? "scale-100" : "scale-0"
            } `}
          >
            <p className=" text-sky-600 font-bold h-12 flex items-center justify-center  dark:text-white p-[0.1rem] shadow-sm border-b-2 dark:border-black ">
              Chat Section
            </p>
            <p className=" text-sky-600 font-bold h-12 flex items-center justify-center cursor-pointer p-2 border-b-2 shadow-sm dark:text-white dark:border-black ">
              Copy Room Id
            </p>
            <p className="relative font-bold cursor-pointer h-12 flex items-center justify-center p-2 py-2 shadow-sm bg-red-600 dark:border-black  ">
              <MdCallEnd size={25} color="white" />
            </p>
          </div>

          <div onClick={() => setOpen(!open)}>
            {open ? (
              <RxCross1
                size={25}
                className="sm:hidden block mr-5 dark:text-white"
              />
            ) : (
              <GiHamburgerMenu
                size={25}
                className="sm:hidden block mr-5 dark:text-white"
              />
            )}
          </div>
        </div>
      </div>
    </div>

    {/*CODE EDITOR*/}

    <div>
      <div className="sm:flex p-1 gap-1 w-full bg-violet-600 ">
        <div className="relative z-1 sm:w-[1100px] w-full bg-slate-600 sm:h-[calc(100vh-60px)]  h-[400px]">
          <div className="sm:h-12 h-10 flex items-center p-2 justify-between">
            <select
              className="form-select h-8 rounded sm:w-[250px] dark:bg-slate-400  border-2 select-none border-black font-semibold "
              value={optionName}
              onChange={(e) => setOptionName(e.target.value)}
            >
              <option value="">Select language...</option>
              <option value="cpp">Cpp</option>
              <option value="java">Java</option>
              <option value="python">Python</option>
            </select>
            <button
              className=" bg-green-400  sm:px-4 sm:py-2 px-1 py-1 border-2 border-black rounded-md items-center cursor-pointer hover:bg-green-600 "
              onClick={HandleChange}
            >
              <IoPlayOutline size={25} />
            </button>
          </div>
          <Editor
            theme={`${check === "black" ? "vs-dark" : "vs-light"}`}
            language={option.language}
            value={option.value}
            height={editorHeight}
            onChange={(value) => setCode(value)}
          />
        </div>



        {/* output div */}
        {showOutput && (
          <div className="sm:w-[1094px] w-[334px] sm:h-80 h-52 absolute sm:top-[400px] top-[275px] border-4 border-black bg-gray-100 dark:bg-gray-400 rounded-t-lg ">
            <div className="flex justify-between sm:h-12 h-8 p-2 dark:bg-teal-800 bg-teal-500 items-center rounded-t-sm">
              <div className="sm:text-3xl font-semibold p-2 bg-gray-400 border-2 border-black dark:bg-black rounded-md sm:h-10 h-6 sm:ml-6 flex items-center text-orange-700">
                Output
              </div>
              <div>
                <RxCross1
                  className="sm:p-2 p-1 sm:w-10 rounded-md flex justify-center items-center sm:size-40 sm:h-10 bg-red-500 text-white hover:bg-red-700 cursor-pointer "
                  color="white"
                  size={25}
                  onClick={HandleScreenChange}
                />
              </div>
            </div>
            <div>{output}</div>
          </div>
        )}





        {/* video calling div */}
        <div className="bg-black  text-center text-xl font-semibold mt-11 sm:mt-0 text-white sm:w-[430px]">
          video calling
        </div>
      </div>
    </div>
      </div>
    
  );
}

export default Error;
