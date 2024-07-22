import { useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
const UserVideo = ({ video }) => {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current && video) {
      videoRef.current.srcObject = video;
    }
  }, [video]);
  return <video ref={videoRef} autoPlay className="w-[400px] h-[200px]" />;
};

export default UserVideo;
