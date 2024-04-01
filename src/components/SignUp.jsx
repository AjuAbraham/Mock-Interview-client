import { Link } from "react-router-dom";
import { useState } from "react";
import DarkMode from "../utils/DarkMode";

const SignUp = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <span onClick={() => setDarkMode(!darkMode)}>
        <div className="fixed right-[-60px]">
          <DarkMode />
        </div>
      </span>
      <div className={`w-[100vw] h-[100vh] ${darkMode && "dark"}`}>
        <div className="grid sm:grid-cols-2 sm:min-h-screen dark:bg-gray-900">
          <div className="hidden sm:block">
            <img
              className="w-full h-full"
              src="\src\assets\dem3.jpg"
              alt="404"
            />
          </div>
          <div className="p-20 pt-36">
            <div className="sm:flex sm:justify-center sm:mb-4 absolute sm:static top-5 left-0 w-[280px]  ">
              <img
                src={`${
                  darkMode
                    ? "src/assets/blackLogo.png"
                    : "src/assets/whiteLogo.png"
                }`}
                className="sm:w-[300px] "
                alt="404"
              />
            </div>
            <div className="border-black border-4 rounded-xl p-4 dark:text-white dark:border-violet-500">
              <h1 className="font-bold from-neutral-400 text-4xl ">Sign Up</h1>
              <p className="pt-2">Welcome to our website 👌</p>
              <div className="mt-10 flex ">
                <form className="flex flex-col  w-full">
                  <input
                    className="p-2 border-b-2 border-b-black mb-3 outline-none dark:rounded-lg text-base dark:bg-slate-600"
                    type="text"
                    placeholder="Username"
                  />
                  <input
                    className="p-2 border-b-2 border-b-black mb-3 outline-none dark:rounded-lg text-base dark:bg-slate-600"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    className="p-2 border-b-2 border-b-black mb-3 outline-none dark:rounded-lg text-base dark:bg-slate-600"
                    type="password"
                    placeholder="password"
                  />

                  <button className="rounded-lg  bg-black text-white w-full h-[50px] m-auto my-3 hover:bg-zinc-500 dark:hover:text-black dark:hover:bg-white">
                    Sign Up
                  </button>
                  <button className="rounded-lg bg-white border-2 border-black text-black w-full h-[50px] m-auto hover:bg-slate-100 dark:bg-black dark:text-white dark:hover:text-black dark:hover:bg-white">
                    <Link to={"/login"}>Log In </Link>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
