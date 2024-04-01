import { useState } from "react";
import DarkMode from "../utils/DarkMode";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegCopy } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { Typewriter } from "react-simple-typewriter";
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
      <div className={` ${darkMode && "dark"}`}>
        <div className="dark:bg-slate-800  bg-zinc-200 ">
          <div className="flex items-center justify-between h-[80px] shadow-xl ">
            <div>
              <img
                className="sm:w-[320px] w-[240px]"
                src={
                  darkMode
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
                className={` mr-40 absolute top-[90px] rounded-md right-[-101px] w-[150px] sm:hidden bg-white dark:bg-slate-800 ${
                  open ? "sidebar-action" : "hidden"
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

          <div className="grid sm:grid-cols-2 sm:h-[623px] h-[700px] bg-white dark:bg-slate-900 ">
            <div className="absolute">
              <p className="font-bold sm:text-6xl sm:mt-32 mt-24 ml-14 text-4xl dark:text-white">
                Mock Sync Studio
              </p>
              <div className="sm:text-4xl text-2xl ml-14 mt-6  text-sky-500">
                <Typewriter
                  words={[
                    " A mock interview platform ",
                    " Provides personal virtual rooms",
                    " Provides features like Video calls, Code editor etc",
                    " Helps to build confidence",
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
            <div className="flex items-center justify-center sm:mt-24 mt-60">
              <div
                className="m-5 w-40 dark:hover:bg-violet-800 dark:bg-violet-500 dark:border-none text-white px-8 text-center py-4 rounded-xl  cursor-pointer border-2 border-blue-800 bg-sky-500 font-bold hover:bg-sky-600"
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

            <div className="flex  items-center justify-center ">
              {join === true ? (
                <div className="flex  flex-col sm:w-[500px] sm:h-[300px] rounded-xl shadow-xl dark:border-violet-500 border-4 bg-white dark:border-2  dark:bg-transparent ">
                  <h3 className="p-2 text-2xl text-center font-bold  dark:text-white ">
                    Join Room
                  </h3>
                  <div>
                    <form className="flex flex-col p-6 ">
                      <input
                        className="mb-4 p-2 hover:outline outline-2 dark:bg-slate-600 dark:text-white dark:hover:outline-yellow-500 outline-violet-800 border-2 rounded-xl "
                        type="text"
                        placeholder="ROOM ID"
                      />
                      <input
                        className="mb-4 p-2 hover:outline outline-2 dark:bg-slate-600 dark:text-white dark:hover:outline-yellow-500 outline-violet-800 border-2 rounded-xl"
                        type="text"
                        placeholder="USERNAME"
                      />
                      <button className="text-white dark:bg-violet-500 hover:text-black  h-[40px] m-auto flex justify-center items-center rounded-xl p-4 w-40 mt-7 font-semibold bg-sky-500 ">
                        Join
                      </button>
                    </form>
                  </div>
                </div>
              ) : null}
              {create === true ? (
                <div className="flex flex-col sm:w-[500px] border-4  bg-white sm:h-[300px] rounded-xl shadow-xl dark:border-2 dark:border-violet-500 dark:bg-transparent ">
                  <h3 className="p-2 text-2xl text-center font-semibold dark:text-white ">
                    Create Room
                  </h3>
                  <form className="flex flex-col p-6">
                    <span className="flex gap-x-2 ">
                      <input
                        className="mb-4 p-2 w-full hover:outline outline-2 outline-violet-800 border-2 rounded-xl dark:bg-slate-600 dark:text-white dark:hover:outline-yellow-500"
                        type="text"
                        placeholder="ROOM ID"
                      />
                      <FaRegCopy className="mt-3 cursor-pointer dark:text-white" />
                    </span>
                    <input
                      className="mb-4 p-2 hover:outline outline-2 outline-violet-800 border-2 rounded-xl dark:bg-slate-600 dark:text-white dark:hover:outline-yellow-500"
                      type="text"
                      placeholder="USERNAME"
                    />
                    <button className=" h-[40px] m-auto text-white flex justify-center items-center rounded-xl p-4 w-40 mt-7 font-semibold bg-sky-500 dark:bg-violet-500 hover:text-black ">
                      Create
                    </button>
                  </form>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
