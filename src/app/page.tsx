"use client";

import { useChat } from "@ai-sdk/react";

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();
    return (
        <main className="w-screen h-screen flex flex-col flex-grow ">
            <div className="relative flex flex-col h-full w-full overflow-y-auto max-h-full  max-w-md py-24 mx-auto">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className="whitespace-pre-wrap">
                        {message.role === "user" ? "User: " : "AI: "}
                        {message.parts.map((part, i) => {
                            switch (part.type) {
                                case "text":
                                    return (
                                        <div key={`${message.id}-${i}`}>
                                            {part.text}
                                        </div>
                                    );
                            }
                        })}
                    </div>
                ))}
                <form
                    onSubmit={handleSubmit}
                     className="sticky bottom-0 "
                    >
                    <input
                        className="  dark:bg-zinc-900  w-full max-w-md p-2  border border-zinc-300 dark:border-zinc-800 rounded shadow-xl"
                        value={input}
                        placeholder="Say something..."
                        onChange={handleInputChange}
                    />
                </form>
            </div>
        </main>
    );
}
