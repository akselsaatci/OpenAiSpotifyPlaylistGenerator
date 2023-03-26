// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { openai } from "@/lib/openai";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const style = req.query.style as string;
    const body = JSON.parse(req.body);
    const prompt = req.body.prompt as string;
    console.log(style);
    console.log(prompt);
    openai
      .createImage({
        prompt: prompt + "in a style of " + style,
        n: 1,
        size: "512x512",
      })
      .then((response: any) => {
        res.json(JSON.stringify(response.data));
      });
  }
}
