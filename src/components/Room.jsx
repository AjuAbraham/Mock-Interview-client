import  { useEffect, useReducer, useState } from 'react'
import { useSocket } from '../context/SocketContext.jsx'
import UserVideo from '../utils/UserVideo.jsx';
import { peerReducer } from '../reducers/peerReducer.js';
import { ADD_PEER, REMOVE_PEER } from '../actions/userPeerAction.js';
const Room = () => {
  const [stream,setStream] =useState(null);
  const {socket,user} = useSocket();
  const [state,dispatch] = useReducer(peerReducer,{});
  const handleStream = async ()=>{
    const stream = await navigator.mediaDevices.getUserMedia({video:true,audio:false});
    setStream(stream);
  }

   useEffect(()=>{
     handleStream();
   },[])

   useEffect(()=>{
    if(!user || !stream) return ;

    socket.on("user-notification",({peerId})=>{                  // sending the call and receiving the stream from another user
      const call = user.call(peerId,stream);
      console.log("calling the new peer",peerId);
      call.on("stream",(remoteStream)=>{
        console.log("remote stream is: ",remoteStream);
        dispatch({type:ADD_PEER,payload:{peerId: call.peer,stream: remoteStream}})
      })
    })

    user.on("call",(call)=>{                     //receiving the call and sending stream from other user  
      console.log("receiving call");
      call.answer(stream);
      call.on("stream",(remoteStream)=>{
        dispatch({type:ADD_PEER,payload:{peerId: call.peer,stream: remoteStream}})
      })
    });
    
    

    socket.emit("ready")

    return ()=>{
      dispatch({type:REMOVE_PEER,payload:{peerId:user}})
      socket.disconnect();
    }
   },[user, stream, socket])

  return (
    <div>
      room
      <div> our feed 
      {stream && <UserVideo video={stream} />}
        </div>
        <div>
          other user feed
         {
          Object.keys(state).map((userId)=>(
            <UserVideo key={userId} video={state[userId].stream}/>
          ))
         } 
          </div>      
    </div>
  )
}

export default Room


