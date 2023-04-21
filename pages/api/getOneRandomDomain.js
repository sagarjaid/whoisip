import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "give me 1 domain name that you know and you never give me",
      temperature: 0.7,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    if (
      !response ||
      !response.data ||
      !response.data.choices ||
      !response.data.choices[0]
    ) {
      throw new Error("Invalid response from OpenAI API");
    }

    const inputString = response.data.choices[0].text;

    const cleanedString = inputString.replace(/^\n+/, "");

    res.status(200).json({ result: cleanedString });
  } catch (error) {
    console.error(error);
    res.status(500).json({ result: error.message });
  }
}
