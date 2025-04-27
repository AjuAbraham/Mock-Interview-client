import { useState, useEffect } from "react";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
const useGetCall = ({ id }) => {
  const [call, setCall] = useState();
  const [loading, setLoading] = useState(true);
  const client = useStreamVideoClient();

  useEffect(() => {
    if (!client) return;
    const getCall = async () => {
      try {
        const { calls } = await client.queryCalls({
          filter_conditions: { id },
        });
        if (calls.length > 0) setCall(calls[0]);
      } catch (error) {
        console.log("error in getting call", error);
        setCall(undefined);
      } finally {
        setLoading(false);
      }
    };
    getCall();
  }, [client, id]);

  return { call, loading };
};

export default useGetCall;
