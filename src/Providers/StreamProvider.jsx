import { useEffect, useState } from "react";
import { StreamVideoClient, StreamVideo } from "@stream-io/video-react-sdk";
import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";
import LoaderUI from "@/components/LoaderUI";

const StreamProvider = ({ children }) => {
  const { getToken } = useAuth();
  const [streamVideoClient, setStreamVideoClient] = useState();
  const { user, isLoaded } = useUser();
  const streamTokenProvider = async () => {
    try {
      const token = await getToken();
      const response = await axios.get(
        "http://localhost:3000/api/v1/stream/token",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data.token;
    } catch (error) {
      console.error("Failed to get Stream token:", error);
      throw error;
    }
  };
  useEffect(() => {
    if (!isLoaded || !user) return;
    const client = new StreamVideoClient({
      apiKey: import.meta.env.VITE_STREAM_KEY,
      user: {
        id: user?.id,
        name:
          `${user?.firstName || ""} ${user?.lastName || ""}`.trim() || user?.id,
        image: user?.imageUrl,
      },
      tokenProvider: streamTokenProvider,
    });

    setStreamVideoClient(client);

    // Clean up function to disconnect client when component unmounts
    return () => {
      client.disconnectUser();
    };
  }, [user, isLoaded]);
``
  if (!streamVideoClient) return <LoaderUI />;
  return <StreamVideo client={streamVideoClient}>{children}</StreamVideo>;
};

export default StreamProvider;
