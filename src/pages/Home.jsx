import { useState } from "react";
import { NavLink } from "react-router-dom";
import Join from "../components/Join";
import CreateRoom from "../components/CreateRoom";
import { Typewriter } from "react-simple-typewriter";
import { ThemeModeToggler } from "../components/ThemeModeToggler";
import { UserMenuDropdown } from "@/components/UserMenuDropdown";
import { useTheme } from "@/components/ThemeProvider";

const Home = () => {
  const [join, setJoin] = useState(true);
  const { theme } = useTheme();
  const [create, setCreate] = useState(false);
  const updateStateA = () => {
    setJoin(!join);
    setCreate(false);
  };
  const updateStateB = () => {
    setCreate(!create);
    setJoin(false);
  };

  return (
    <>
      <div className="dark:bg-slate-800  bg-slate-300 ">
        {/* nav */}
        <div className="flex sm:fixed sm:top-0 sm:w-full items-center justify-between h-[80px] shadow-xl px-4 sm:px-8">
          <img
            className="sm:w-[320px] w-[240px]"
            src={
              theme === "dark"
                ? "src/assets/blackLogo.png"
                : "src/assets/whiteLogo.png"
            }
            alt="404"
          />

          <div className="flex items-center space-x-4">
            <div className="sm:flex items-center gap-6 hidden">
              <NavLink
                to="/profile"
                className="hover:scale-110 text-sky-600 font-bold cursor-pointer hover:underline dark:text-white"
              >
                Profile
              </NavLink>
              <div className="flex items-center space-x-2">
                <UserMenuDropdown />
                <ThemeModeToggler />
              </div>
            </div>
          </div>
        </div>

        {/* body */}
        <div className="grid sm:grid-cols-2 sm:h-screen  h-[700px] bg-white  dark:bg-slate-900 ">
          <div className="absolute">
            <p className="font-bold sm:text-6xl sm:mt-60 mt-24 sm:ml-20 ml-14 text-4xl dark:text-white">
              Mock Sync Studio
            </p>
            <div className="sm:text-4xl text-xl sm:ml-20 ml-14 mt-6  text-sky-500">
              <Typewriter
                words={[
                  " A Mock Interview Platform ",
                  " Provides Personal Virtual Rooms",
                  " Features like Video calls, Code Editor ",
                  " Build Your Confidence",
                ]}
                loop={10}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={80}
                delaySpeed={1000}
                className="text-4xl"
              />
            </div>
          </div>
          <div className="flex items-center justify-start sm:ml-16  sm:mt-30  mt-[200px]">
            <div
              className="m-5   w-40 dark:hover:bg-violet-800 dark:bg-violet-500 dark:border-none text-white px-8 text-center py-4 rounded-xl  cursor-pointer border-2 border-blue-800 bg-sky-500 font-bold hover:bg-sky-600"
              onClick={updateStateA}
            >
              Join
            </div>
            <div
              className="m-5 dark:border-none dark:hover:bg-violet-800 dark:bg-violet-500  text-white p-4 rounded-xl shadow-xl cursor-pointer text-center w-40 border-2 border-blue-800 bg-sky-500 font-bold hover:bg-sky-600"
              onClick={updateStateB}
            >
              Create
            </div>
          </div>

          <div className="flex   items-center justify-center ">
            {join === true ? <Join /> : null}
            {create === true ? <CreateRoom /> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
