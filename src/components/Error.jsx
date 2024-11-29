import { useState, useEffect } from "react";
import { MdCallEnd } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { IoPlayOutline } from "react-icons/io5";
import Editor from "@monaco-editor/react";
import blackLogo from "../assets/blackLogo.png";

const languageOptions = [
  {
    language: "c",
    version: "10.2.0",
    aliases: ["gcc"],
    runtime: "gcc",
  },
  {
    language: "c++",
    version: "10.2.0",
    aliases: ["cpp", "g++"],
    runtime: "gcc",
  },
  {
    language: "javascript",
    version: "18.15.0",
    aliases: ["node-javascript", "node-js", "javascript", "js"],
    runtime: "node",
  },
  {
    language: "java",
    version: "15.0.2",
    aliases: [],
  },
  {
    language: "python",
    version: "3.10.0",
    aliases: ["py", "py3", "python3", "python3.10"],
  },
  {
    language: "typescript",
    version: "5.0.3",
    aliases: ["ts", "node-ts", "tsc", "typescript5", "ts5"],
  },
];

const codeSnippets = {
  c: `
#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}
  `,
  "c++": `
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
  `,
  javascript: `
console.log("Hello, World!");
  `,
  java: `
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
  `,
  python: `
print("Hello, World!")
  `,
  typescript: `
console.log("Hello, World!");
  `,
};

function Error() {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState(""); 
  const [editorHeight, setEditorHeight] = useState("85vh");
  const [output, setOutput] = useState("Hello, World!");
  const [selectedLanguage, setSelectedLanguage] = useState("c"); // Default language
  const check = localStorage.getItem("mode");

  useEffect(() => {
    
    const windowHeight = window.innerHeight;
    setEditorHeight(windowHeight <= 650 ? "50vh" : "85vh");
  }, []);

  
  useEffect(() => {
    setCode(codeSnippets[selectedLanguage] || "");
  }, [selectedLanguage]);

  return (
    <div className="w-[100vw]">
      {/* Navigation Section */}
      <div className="w-full">
        <div className="bg-slate-900 h-[80px] w-full flex justify-between items-center">
          <div>
            <img
              className="text-white w-[320px]"
              src={blackLogo}
              alt="not found"
            />
          </div>
          <div>
            <div className="sm:mr-10 sm:gap-6 gap-2 sm:flex">
              <div className="p-1 sm:w-30 text-lg rounded-md font-bold items-center text-center text-blue-500 hover:text-blue-400 cursor-pointer">
                Copy Room Id
              </div>
              <div className="p-2 sm:w-14 rounded-md flex justify-center items-center bg-red-500 text-white hover:bg-red-700 cursor-pointer">
                <MdCallEnd />
              </div>
            </div>
            <div onClick={() => setOpen(!open)}>
              {open ? (
                <RxCross1 size={25} className="sm:hidden block mr-5 dark:text-white" />
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

      {/* Main Layout */}
      <div className="flex h-[43.2rem]">
        {/* Code Editor Section */}
        <div className="w-2/3 bg-slate-900">
          <div className="relative z-1 py-1 bg-slate-800">
            <div className="sm:h-12 h-10 flex items-center p-2 justify-between">
              {/* Language Selection Dropdown */}
              <select
                className="h-8 bg-blue-800 text-gray-300 sm:w-[250px] dark:bg-slate-400 font-semibold"
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
              >
                {languageOptions.map((option) => (
                  <option key={option.language} value={option.language}>
                    {option.language.toUpperCase()} [{option.version}]
                  </option>
                ))}
              </select>

              {/* Run Button */}
              <button className="bg-blue-600 sm:px-4 sm:py-1 px-1 py-1 shadow-2xl items-center cursor-pointer hover:bg-blue-700">
                <div className="flex">
                  <IoPlayOutline size={23} color="white" />
                  <p className="font-semibold text-white">Run</p>
                </div>
              </button>
            </div>

            {/* Code Editor */}
            <Editor
              theme={check === "black" ? "vs-dark" : "vs-light"}
              language={selectedLanguage}
              value={code}
              height="50vh"
              onChange={(value) => setCode(value || "")}
            />
          </div>

          {/* Output Section */}
          <div>
            <div className="h-12 pt-1 bg-slate-800">
              <div className="sm:text-lg ml-2 px-1 font-semibold text-white">
                OUTPUT
              </div>
            </div>
            <div className="text-white px-3 py-3 flex overflow-y-auto h-[200px]">
              {output}
            </div>
          </div>
        </div>

        {/* Video Calling Section */}
        <div className="bg-black w-1/3 text-center text-xl font-semibold mt-11 sm:mt-0 text-white md:min-w-[35%] underline">
          <div className="w-full mt-2 border-3">Connected Users</div>
        </div>
      </div>
    </div>
  );
}

export default Error;
