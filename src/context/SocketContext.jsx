/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";
import Peer from "peerjs";


const SocketContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

export const SocketProvider = (props) => {
  const socket = useMemo(() => io(import.meta.env.VITE_SEREVER_HOST), []);
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    if (socket) {
      const peerInstance = new Peer(socket.id, {
        host: "localhost",
        port: 9000,
        path: "/myapp",
      });
      setUser(peerInstance);  
    }
  }, [socket]); 
  return (
    <SocketContext.Provider value={{ socket, user }}>
      {props.children}
    </SocketContext.Provider>
  );
};
