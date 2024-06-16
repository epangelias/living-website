import OpenAI from "openai";

export interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

// const config = {
//   url: "http://localhost:11434/v1",
//   model: "superdrew100/llama3-abliterated",
//   key: "ollama",
// };

const config = {
  url: "https://api.groq.com/openai/v1",
  // model: "llama3-70b-8192",
  model: "llama3-8b-8192",
  key: "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",
};

const openai = new OpenAI({
  baseURL: config.url,
  apiKey: config.key,
});

export async function generatePrompt(messages: Message[]) {
  const data = { model: config.model, messages: messages };
  const res = await openai.chat.completions.create(data);
  return res.choices[0].message.content;
}
