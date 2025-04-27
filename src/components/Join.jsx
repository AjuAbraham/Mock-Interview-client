import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { validate } from "uuid";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
const Join = () => {
  const [roomId, setRoomId] = useState("");
  const client = useStreamVideoClient();
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      if (!client) return;
      if (validate(roomId) == "") {
        toast.error("room ID is required");
        return;
      }
      if (validate(roomId) == false) {
        toast.error("Please Enter Valid Room Id");
        return;
      }
      navigate(`/room/${roomId}`);
    } catch (error) {
      toast.error("Unable to join room");
    }
  };

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
              onChange={(e) => setRoomId(e.target.value)}
              value={roomId}
              placeholder="ROOM ID"
            />

            <button
              onClick={handleSubmit}
              className="text-white dark:bg-violet-500 hover:text-black  h-[40px] m-auto flex justify-center items-center rounded-xl p-4 w-40 mt-7 font-semibold bg-sky-500 "
            >
              Join
            </button>
          </form>
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
        </div>
      </div>
    </>
  );
};

export default Join;
