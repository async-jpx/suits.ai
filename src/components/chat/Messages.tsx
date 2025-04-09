import { UIMessage } from "ai";
import { Shrimp } from "lucide-react";

interface MessagesProps {
  messages: UIMessage[];
}

const Messages = ({ messages }: MessagesProps) => {
  return (
    <>
      {messages.map((message) => (
        <div key={message.id} className="whitespace-pre-wrap">
          {message.role === "user" ? (
            <UserMessage message={message} />
          ) : (
            <AIMessage message={message} />
          )}
        </div>
      ))}
    </>
  );
};

interface MessageProps {
  message: UIMessage;
}

const UserMessage = ({ message }: MessageProps) => {
  return (
    <div
      key={message.id}
      className="whitespace-pre-wrap px-4 py-2 rounded-3xl bg-accent flex w-fit max-w-[80%]  ml-auto  "
    >
      {message.parts.map((part, i) => {
        switch (part.type) {
          case "text":
            return <div key={`${message.id}-${i}`}>{part.text}</div>;
        }
      })}
    </div>
  );
};

const AIMessage = ({ message }: MessageProps) => {
  return (
    <article
      key={message.id}
      className="whitespace-pre-wrap p-2 gap-2 flex w-fit   mr-auto text-red "
    >
      {message.parts.map((part, i) => {
        switch (part.type) {
          case "text":
            return (
              <div key={`${message.id}-${i}`}>
                <Shrimp className="inline  rounded-full  size-5 mr-2" />
                {part.text}
              </div>
            );
        }
      })}
    </article>
  );
};

export default Messages;
