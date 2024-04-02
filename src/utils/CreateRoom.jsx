import { FaRegCopy } from "react-icons/fa6";

const CreateRoom = () => {
  return (
    <>
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
    </>
  )
}

export default CreateRoom
