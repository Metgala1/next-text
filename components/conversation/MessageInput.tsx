export default function MessageInput() {
  return (
    <div className="border-t border-zinc-800 bg-zinc-900 p-4">
      <div className="flex gap-3">
        <button className="text-3xl text-zinc-400">
          +
        </button>

        <input
          placeholder="Type a message..."
          className="flex-1 rounded-full bg-zinc-800 px-5 py-3 outline-none"
        />

        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-black">
          🎤
        </button>
      </div>
    </div>
  );
}