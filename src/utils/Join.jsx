import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { validate } from "uuid";
import { useSocket } from "../context/SocketContext.jsx";
const Join = () => {
  const [roomId, setRoomId] = useState("");
  const [name, setName] = useState("");
  const {socket,user} = useSocket();
  const navigate = useNavigate();

const handleRoomJoin = useCallback((data)=>{
  console.log(`joined on this room ${data}`)
  navigate(`/room/${data}`);
  
},[navigate])
useEffect(()=>{
  socket.on("room-joined",handleRoomJoin)

  return ()=>{
    socket.off("room-joined",handleRoomJoin)
  }
},[handleRoomJoin, socket])



  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (name === "" && validate(roomId) == "") {
      toast.error("Fill All the Credentails");
      return;
    }

    if (name === "") {
      toast.error("Name field is required");
      return;
    }

    if (validate(roomId) == false) {
      toast.error("Please Enter Valid Room Id");
      return;
    }
    socket.emit("room-info",{user:user._id,roomId}) 
  }, [name,user, roomId, socket]);

  return (
    <>
      <div className="flex  flex-col sm:w-[500px] sm:h-[300px] rounded-xl shadow-xl dark:border-violet-500 border-4 bg-white dark:border-2  dark:bg-transparent ">
        <h3 className="p-2 text-2xl text-center font-bold  dark:text-white ">
          Join Room
        </h3>
        <div>
          <form className="flex flex-col p-6 " onSubmit={handleSubmit}>
            <input
              className="mb-4 p-2 hover:outline outline-2 dark:bg-slate-600 dark:text-white dark:hover:outline-yellow-500 outline-violet-800 border-2 rounded-xl "
              type="text"
              onChange={(e) => setRoomId(e.target.value)}
              value={roomId}
              placeholder="ROOM ID"
            />
            <input
              className="mb-4 p-2 hover:outline outline-2 dark:bg-slate-600 dark:text-white dark:hover:outline-yellow-500 outline-violet-800 border-2 rounded-xl"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="USERNAME"
            />
            <button className="text-white dark:bg-violet-500 hover:text-black  h-[40px] m-auto flex justify-center items-center rounded-xl p-4 w-40 mt-7 font-semibold bg-sky-500 ">
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
