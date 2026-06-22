type Props = {
  own?: boolean;
  text: string;
};

export default function MessageBubble({
  own,
  text,
}: Props) {
  return (
    <div
      className={`max-w-sm rounded-2xl px-4 py-3 ${
        own
          ? "ml-auto bg-green-600 text-white"
          : "bg-zinc-800 text-white"
      }`}
    >
      {text}
    </div>
  );
}