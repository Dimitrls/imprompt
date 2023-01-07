import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
  model: "text-davinci:003",
  prompt: "Say a random short phrase",
  max_tokens: 7,
  temperature: 0.5,
});
console.log(response.data);

