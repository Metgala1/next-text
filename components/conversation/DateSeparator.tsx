type Props = {
  label: string;
};

export default function DateSeparator({
  label,
}: Props) {
  return (
    <div className="flex justify-center py-4">
      <span className="rounded-full bg-zinc-800 px-4 py-1 text-sm text-zinc-400">
        {label}
      </span>
    </div>
  );
}