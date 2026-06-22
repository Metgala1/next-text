type Props = {
  icon: React.ReactNode;
};

export default function SidebarIcon({ icon }: Props) {
  return (
    <button className="flex h-12 w-12 items-center justify-center rounded-xl text-xl text-zinc-400 transition hover:bg-zinc-800 hover:text-white">
      {icon}
    </button>
  );
}