import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from "../constants";

let client: GoogleGenAI | null = null;

const getClient = (): GoogleGenAI => {
  if (!client) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("API_KEY is missing in environment variables.");
      // We will handle this gracefully in the UI, but strictly speaking we shouldn't ask user.
      // For this demo code to be valid, we assume it exists.
      throw new Error("API_KEY not found");
    }
    client = new GoogleGenAI({ apiKey });
  }
  return client;
};

export const sendMessageToAIWIS = async (message: string): Promise<string> => {
  try {
    const ai = getClient();
    
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "Lo siento, no pude procesar tu solicitud en este momento.";
  } catch (error) {
    console.error("Error communicating with AIWIS AI:", error);
    return "Hubo un error de conexión con la inteligencia de AIWIS. Por favor verifica tu API Key o intenta más tarde.";
  }
};