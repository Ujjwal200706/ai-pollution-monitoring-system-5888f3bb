import { Play, Home, BarChart3, BookOpen, Bell, Settings } from "lucide-react";

const icons = [
  { icon: Play, label: "Dashboard" },
  { icon: Home, label: "Home" },
  { icon: BarChart3, label: "Analytics" },
  { icon: BookOpen, label: "Reports" },
  { icon: Bell, label: "Alerts" },
  { icon: Settings, label: "Settings" },
];

const Sidebar = () => {
  return (
    <aside className="w-16 bg-dash-sidebar flex flex-col items-center py-4 gap-6">
      {icons.map(({ icon: Icon, label }, i) => (
        <button
          key={label}
          className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
            i === 0
              ? "bg-dash-sidebar-icon-hover/20 text-dash-sidebar-icon-hover"
              : "text-dash-sidebar-icon hover:text-dash-sidebar-icon-hover"
          }`}
          title={label}
        >
          <Icon className="w-5 h-5" />
        </button>
      ))}
    </aside>
  );
};

export default Sidebar;
