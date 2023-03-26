// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { openai } from "@/lib/openai";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const songName = req.query.songName as string;
    console.log(songName);
    const response = await openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: `generate me a playlist based on this songs vibe "${songName}" from other artists and don't include songs with similar name and make it in json format and and give me a long and detailed Dall-E prompt to generate a picture for the playlist that represent the vibe of the playlist and include it in json with key dall . Don't include a message like 'Sure, here is the playlist based on..' in your response`,
        temperature: 0,
        max_tokens: 1000,
        top_p: 0,
        frequency_penalty: 0,
        presence_penalty: 0,
      }).then((data)=>{
        res.json(JSON.stringify(data.data));
      })
      
  }
}
