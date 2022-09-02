// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createClient } from "../../../../utils/apollo/client";
import { isAuthorizedToWrite } from "../../../../utils/beb/isAuthorizedToWrite";
import { createPost } from "../../../../utils/beb/createPost";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const secret = req.headers.authorization?.slice(7) || "";
    // This client is authenticated as the actual user
    const userClient = createClient(secret);
    // this client is authenticated as the bot
    const botClient = createClient(process.env.BOT_AUTH_KEY);
    try {
      // 1. check if the user is authorized to write to the community
      const community = await isAuthorizedToWrite(userClient, {
        bebdomain: req.query.bebdomain,
      });

      // 2. create the post on behalf of the user
      const post = await createPost(botClient, {
        contentRaw: req.body.contentRaw,
        communityId: community._id,
      });

      return res.status(200).json({ post });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: e.message });
    }
  } else {
    return res.status(200);
  }
}
