"use client";

import { UseChatHelpers } from "@ai-sdk/react";
import { useRef } from "react";
import { Textarea } from "@/components/ui/textarea";

interface ChatFooterProps {
  input: string;
  handleInputChange: UseChatHelpers["handleInputChange"];
  handleSubmit: UseChatHelpers["handleSubmit"];
}

const ChatFooter = ({
  input,
  handleInputChange,
  handleSubmit,
}: ChatFooterProps) => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleEnterPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      formRef.current?.requestSubmit();
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <Textarea
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleEnterPress}
      ></Textarea>
    </form>
  );
};

export default ChatFooter;
