import { streamText } from "ai";
import { google } from "@ai-sdk/google";
export const maxDuration = 30;

export async function POST(req: Request) {
    const { messages } = await req.json();

    const result = streamText({
        model: google("gemini-2.0-flash-001"),
        messages,
        onError: (error) => {
            console.error(error);
        },
    });

    return result.toDataStreamResponse();
}
