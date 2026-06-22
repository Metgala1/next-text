type Props = {
  count: number;
};

export default function UnreadBadge({ count }: Props) {
  return (
    <div className="flex h-6 min-w-6 items-center justify-center rounded-full bg-green-500 px-2 text-xs font-bold text-black">
      {count}
    </div>
  );
}