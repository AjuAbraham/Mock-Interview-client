import { StreamClient } from "@stream-io/node-sdk";
import asyncHandler from "../utils/asyncHandler.js";

export const getStreamToken = asyncHandler(async (req, res) => {
  const { userid } = req.user;

  if (!userid) {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  try {
    // Initialize Stream client with API key and secret
    const streamClient = new StreamClient(
      process.env.STREAM_API_KEY,
      process.env.STREAM_API_SECRET
    );

    // Generate a token for the user
    const token = streamClient.createToken(userid);

    // Return the token to the client
    return res.status(200).json({ token });
  } catch (error) {
    console.error("Error generating Stream token:", error);
    return res.status(500).json({
      message: "Failed to generate Stream token",
      error: error.message,
    });
  }
});
