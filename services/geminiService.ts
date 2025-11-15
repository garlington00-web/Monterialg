import { GoogleGenAI, Modality } from "@google/genai";
import { TopicId, ContentResult } from "../types.ts";
import { PROMPTS } from "../constants.ts";

const textModel = 'gemini-2.5-flash';
const imageModel = 'gemini-2.5-flash-image';

// Safely get API key, guarding against 'process' not being defined in the browser environment
function getApiKey(): string {
  if (typeof process === 'undefined' || !process.env || !process.env.API_KEY) {
    console.error("Gemini API key (process.env.API_KEY) is missing or 'process' is undefined.");
    throw new Error("Gemini API key is not configured correctly for this environment.");
  }
  return process.env.API_KEY;
}

async function generateText(prompt: string): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: getApiKey() }); 
  const response = await ai.models.generateContent({
    model: textModel,
    contents: prompt,
  });
  return response.text;
}

async function generateImage(prompt: string): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: getApiKey() });
  try {
    const response = await ai.models.generateContent({
        model: imageModel,
        contents: {
            parts: [{ text: prompt }],
        },
        config: {
            responseModalities: [Modality.IMAGE],
        },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
            return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        }
    }
    throw new Error("No image data found in response");
  } catch (error) {
    console.error(`Failed to generate image for prompt: "${prompt}"`, error);
    return "https://picsum.photos/512/512?grayscale";
  }
}

export const fetchTopicContent = async (topicId: TopicId): Promise<ContentResult> => {
  const prompts = PROMPTS[topicId];
  if (!prompts) {
    throw new Error(`No prompts found for topic: ${topicId}`);
  }

  const textPromise = generateText(prompts.text);
  
  const imagePromises = prompts.images.map(imagePrompt => generateImage(imagePrompt));
  
  const [text, images] = await Promise.all([textPromise, Promise.all(imagePromises)]);

  return { text, images };
};