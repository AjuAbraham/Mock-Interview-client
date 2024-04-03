import { useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateRoom = () => {
  const [roomId, setRoomId] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleMark = () => {
    navigator.clipboard
      .writeText(roomId)
      .then(() => {
        toast.success("Room Id Copied !!");
      })
      .catch((error) => {
        console.error("Error copying text: ", error);
      });
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  useEffect(() => {
    const generatedId = uuidv4();
    setRoomId(generatedId);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      toast.error("Enter your Username");
      return;
    }
    navigate(`/room/${roomId}`);
  };
  return (
    <>
      <div className="flex flex-col sm:w-[500px] border-4  bg-white sm:h-[300px] rounded-xl shadow-xl dark:border-2 dark:border-violet-500 dark:bg-transparent ">
        <h3 className="p-2 text-2xl text-center font-semibold dark:text-white ">
          Create Room
        </h3>
        <form className="flex flex-col p-6" onSubmit={handleSubmit}>
          <span className="flex gap-x-2 ">
            <input
              className="mb-4 p-2 w-full hover:outline outline-2 outline-violet-800 border-2 rounded-xl dark:bg-slate-600 dark:text-white dark:hover:outline-yellow-500"
              type="text"
              placeholder="ROOM ID"
              value={roomId}
            />
            <FaRegCopy
              className="mt-3 cursor-pointer dark:text-white"
              onClick={handleMark}
            />
          </span>
          <input
            className="mb-4 p-2 hover:outline outline-2 outline-violet-800 border-2 rounded-xl dark:bg-slate-600 dark:text-white dark:hover:outline-yellow-500"
            type="text"
            onChange={handleName}
            placeholder="USERNAME"
          />
          <button
            type="submit"
            className=" h-[40px] m-auto text-white flex justify-center items-center rounded-xl p-4 w-40 mt-7 font-semibold bg-sky-500 dark:bg-violet-500 hover:text-black "
          >
            Create
          </button>
        </form>
      </div>
      <Toaster 
        toastOptions={{
          className: "darkElement",
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
        }}
      />
    </>
  );
};

export default CreateRoom;
