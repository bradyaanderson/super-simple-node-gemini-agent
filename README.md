# Super Simple Node Gemini Agent

A minimalist implementation of a conversational AI agent using Google's Gemini model. This agent maintains conversation history to provide contextual responses while keeping the codebase as simple as possible.

## Features

- Conversational memory (maintains chat history)
- Simple agent loop (receive input → process → respond)
- Easy-to-understand implementation
- Environment variable configuration

## Prerequisites

- Node.js 18+
- npm (or an alternative package manager like yarn or pnpm)
- [Gemini API key](https://aistudio.google.com/app/apikey)

## Installation

1. Clone the repository:

   ```sh
   git clone git@github.com:bradyaanderson/super-simple-node-gemini-agent.git
   cd super-simple-node-gemini-agent
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the project root and add your Gemini API key:

   ```sh
   GEMINI_API_KEY=your_api_key_here
   ```

## Usage

Run the chat agent:

```sh
npm start
```

Type 'quit' to exit the conversation.

## How It Works

The agent operates as a simple loop:

1. Receives user input
2. Maintains a history of the conversation
3. Sends the full conversation history to Gemini for context
4. Returns Gemini's response
5. Repeats

## Limitations

- No long-term memory (history is lost when the program exits)
- No ability to use external tools or APIs
- Limited to text-only interactions
- No explicit goal setting or planning capabilities
- No error recovery for API failures
- No support for streaming responses
