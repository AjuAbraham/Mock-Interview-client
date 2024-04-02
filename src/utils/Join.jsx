

const Join = () => {
  return (
    <>
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
    </>
  )
}

export default Join
