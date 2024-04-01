import { useState } from "react";
import DarkMode from "../utils/DarkMode";
import { FaRegCopy } from "react-icons/fa6";
const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [join, setJoin] = useState(false);
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
      <div className="dark:bg-slate-800">
        <div className="flex items-center justify-between h-[80px] shadow-xl">
          <div>
            <img className="w-[320px]" src="src/assets/logo.png" alt="404" />
          </div>
          <div>
            <span onClick={() => setDarkMode(!darkMode)}>
              <DarkMode />
            </span>
            <img
              className="w-[60px] h-[60px] rounded-full mr-24 cursor-pointer"
              src="src/assets/dem1.jpg"
              alt="404"
            />

            <div className="absolute top-20 right-36 hidden ">
              <p className="p-2 w-[200px]">Profile</p>
              <p className="p-2">FeedBacks</p>
              <p className="p-2">Logout</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 h-[620px]">
          <div className="flex flex-col items-center justify-center">
            <div
              className="m-5 px-8 py-6 rounded-xl shadow-xl cursor-pointer"
              onClick={updateStateA}
            >
              Join
            </div>
            <div
              className="m-5 p-6 rounded-xl shadow-xl cursor-pointer"
              onClick={updateStateB}
            >
              Create
            </div>
          </div>
          <div className="flex  items-center justify-center">
            {join === true ? (
              <div className="flex flex-col w-[500px] h-[300px] rounded-xl shadow-xl border-black border-2">
                <h3 className="p-2 text-2xl">Join</h3>
                <div>
                  <p className="mb-4 ml-4">Paste your Room Id</p>
                  <form className="flex flex-col p-6">
                    <input className="mb-4" type="text" placeholder="ROOM ID" />
                    <input
                      className="mb-4"
                      type="text"
                      placeholder="USERNAME"
                    />
                    <button className=" w-[60px] h-[40px] m-auto flex justify-center items-center rounded-xl p-4 ">
                      Join
                    </button>
                  </form>
                </div>
              </div>
            ) : null}
            {create === true ? (
              <div className="flex flex-col w-[500px] h-[300px] rounded-xl shadow-xl border-black border-2">
                <h3 className="p-2 text-2xl">Create</h3>
                <p className="mb-4 ml-4">Paste your Room Id</p>
                <form className="flex flex-col p-6">
                  <span className="flex gap-x-2">
                    <input
                      className="mb-4 w-full"
                      type="text"
                      placeholder="ROOM ID"
                    />
                    <FaRegCopy className="" />
                  </span>
                  <input className="mb-4" type="text" placeholder="USERNAME" />
                  <button className=" w-[60px] h-[40px] m-auto flex justify-center items-center rounded-xl p-4 ">
                    Create
                  </button>
                </form>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
