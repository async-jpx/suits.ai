"use client";

import ChatFooter from "@/components/chat/ChatFooter";
import Messages from "@/components/chat/Messages";
import { useChat } from "@ai-sdk/react";
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <main className="relative w-screen min-h-screen flex flex-col flex-grow items-center">
      <div className="mx-auto flex flex-col flex-1 text-base gap-4 min-w-xl md:gap-5 lg:gap-6 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem]  focus-visible:outline-hidden overflow-y-auto  p-2 pb-48">
        <Messages messages={messages} />
      </div>
      <div className="fixed w-full bottom-0 p-5 bg-background min-w-2xl md:gap-5 lg:gap-6 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem]">
        <ChatFooter
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </main>
  );
}
