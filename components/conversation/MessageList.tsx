import DateSeparator from "./DateSeparator";
import MessageBubble from "./MessageBubble";

export default function MessageList() {
  return (
    <div className="flex-1 space-y-4 overflow-y-auto p-6">
      <DateSeparator label="Today" />

      <MessageBubble text="Hello 👋" />

      <MessageBubble
        own
        text="Hey! What's up?"
      />

      <MessageBubble text="Building NexText" />
    </div>
  );
}