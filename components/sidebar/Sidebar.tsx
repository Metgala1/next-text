import SidebarIcon from "./SidebarIcon";
import UserProfile from "./UserProfile";

export default function Sidebar() {
  return (
    <aside className="flex w-20 flex-col items-center border-r border-zinc-800 bg-zinc-950">
      <div className="mt-4 flex flex-col gap-4">
        <SidebarIcon icon="💬" />
        <SidebarIcon icon="📞" />
        <SidebarIcon icon="⭐" />
        <SidebarIcon icon="⚙️" />
      </div>

      <div className="mt-auto mb-4">
        <UserProfile />
      </div>
    </aside>
  );
}