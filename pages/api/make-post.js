// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createClient } from "../../utils/apollo/client";

// the client is authenticated as the bot
const client = createClient(process.env.BOT_AUTH_KEY);

export default function handler(req, res) {
  if (req.method === "POST") {
    const secret = req.headers.authorization?.slice(7) || "";
    return res.status(200).json({ secret });
    // Process a POST request
  } else {
    // Handle any other HTTP method
    return res.status(200);
  }
}
