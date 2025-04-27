import LoaderUI from "@/components/LoaderUI";
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import useGetCall from "@/hooks/useGetCall";
import { useUser } from "@clerk/clerk-react";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Room = () => {
  const { id } = useParams();
  const { isLoaded } = useUser();
  const { call, isCallLoading } = useGetCall({ id });
  const [setupComplete, setSetupComplete] = useState(false);

  if (!isLoaded || isCallLoading) return <LoaderUI />;
  if (!call) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-2xl font-semibold">Meeting Not found</p>
      </div>
    );
  }
  return (
    <StreamCall call={call}>
      <StreamTheme>
        {!setupComplete ? (
          <MeetingSetup onSetUpComplete={() => setSetupComplete(true)} />
        ) : (
          <MeetingRoom roomId={id} />
        )}
      </StreamTheme>
    </StreamCall>
  );
};

export default Room;
