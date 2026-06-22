export default function ChatHeader() {
  return (
    <header className="flex items-center gap-4 border-b border-zinc-800 bg-zinc-900 px-6 py-4">
      <div className="h-12 w-12 rounded-full bg-zinc-700" />

      <div>
        <h2 className="font-semibold text-white">
          John Doe
        </h2>

        <p className="text-sm text-green-500">
          Online
        </p>
      </div>
    </header>
  );
}