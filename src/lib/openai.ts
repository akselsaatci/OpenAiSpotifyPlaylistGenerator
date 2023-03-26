import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_SECRET as string,
});
const ai = new OpenAIApi(configuration);

export const openai = ai;
