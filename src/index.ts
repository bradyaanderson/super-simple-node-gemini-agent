import "dotenv/config";
import { GoogleGenerativeAI, Part } from "@google/generative-ai";
import * as readlineSync from "readline-sync";

class GeminiChat {
  private model: any;
  private messageHistory: Array<{ role: "user" | "model"; parts: Part[] }>;

  constructor() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY not found in environment variables");
    }

    // Initialize Gemini model
    const genAI = new GoogleGenerativeAI(apiKey);
    this.model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    this.messageHistory = [];
  }

  async getResponse(userInput: string): Promise<string> {
    try {
      // Add user input as a structured part
      this.messageHistory.push({ role: "user", parts: [{ text: userInput }] });

      // Send the conversation history to the Gemini API
      const chatSession = this.model.startChat({ history: this.messageHistory });
      const response = await chatSession.sendMessage(userInput);

      const aiResponse = response.response.text();
      this.messageHistory.push({ role: "model", parts: [{ text: aiResponse }] });

      return aiResponse;
    } catch (error) {
      return `Error: ${(error as Error).message}`;
    }
  }
}

// Main function to handle CLI interaction
async function main() {
  const chat = new GeminiChat();
  console.log("Welcome to Gemini Chat! (Type 'quit' to exit)");

  while (true) {
    const userInput = readlineSync.question("\nYou: ");
    if (userInput.toLowerCase() === "quit") break;

    const response = await chat.getResponse(userInput);
    console.log(`\nGemini: ${response}`);
  }
}

main().catch(console.error);
