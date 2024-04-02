import { useState } from "react";
import DarkMode from "../utils/DarkMode";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Typewriter } from "react-simple-typewriter";
import Join from "../utils/Join";
import CreateRoom from "../utils/CreateRoom";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [join, setJoin] = useState(false);
  const [create, setCreate] = useState(false);
  const [open, setOpen] = useState(false);

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
      <div className={` ${localStorage.getItem("mode") === "black" && "dark"}`}>
        <div className="dark:bg-slate-800  bg-slate-300 ">
          {/* nav */}
          <div className="flex sm:fixed sm:top-0 sm:w-full items-center justify-between h-[80px] shadow-xl ">
            <div>
              <img
                className="sm:w-[320px] w-[240px]"
                src={
                  localStorage.getItem("mode") == "black"
                    ? "src/assets/blackLogo.png"
                    : "src/assets/whiteLogo.png"
                }
                alt="404"
              />
            </div>
            <div>
              <div className="sm:flex gap-6 mr-40  hidden">
                <p className="hover:scale-110 text-sky-600 font-bold cursor-pointer hover:underline dark:text-white">
                  Profile
                </p>
                <p className="hover:scale-110 text-sky-600 font-bold cursor-pointer hover:underline dark:text-white">
                  FeedBacks
                </p>
                <p className="hover:scale-110 text-sky-600 font-bold cursor-pointer hover:underline hover:text-red-600 dark:text-white dark:hover:text-red-600">
                  Logout
                </p>
              </div>

              {/* mobile responsive nav */}
              <div
                className={` mr-28  absolute top-[90px] transition-all duration-300 ease-in-out rounded-md right-[-101px] w-[150px] sm:hidden bg-slate-300 dark:bg-slate-800 z-20  ${
                  open ? "scale-100" : "scale-0"
                } `}
              >
                <p className=" text-sky-600 font-bold h-12 flex items-center justify-center  dark:text-white p-[0.1rem] shadow-sm border-b-2 mb-2 dark:border-black ">
                  Profile
                </p>
                <p className=" text-sky-600 font-bold h-12 flex items-center justify-center cursor-pointer p-2 border-b-2 mb-2 shdaow-sm dark:text-white dark:border-black ">
                  FeedBacks
                </p>
                <p className="  font-bold cursor-pointer h-12 flex items-center justify-center p-2 text-red-600 shdaow-sm  dark:border-black  ">
                  Logout
                </p>
              </div>
              <span onClick={() => setDarkMode(!darkMode)}>
                <DarkMode />
              </span>

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
      </div>
    </>
  );
};

export default Home;
