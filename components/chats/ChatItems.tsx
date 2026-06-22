import UnreadBadge from "./UnreadBadge";

export default function ChatItem() {
  return (
    <button className="flex w-full items-center gap-3 rounded-xl p-3 transition hover:bg-zinc-800">
      <div className="h-12 w-12 rounded-full bg-zinc-700" />

      <div className="flex-1 text-left">
        <h3 className="font-medium text-white">
          John Doe
        </h3>

        <p className="truncate text-sm text-zinc-400">
          Hey, how are you?
        </p>
      </div>

      <UnreadBadge count={3} />
    </button>
  );
}