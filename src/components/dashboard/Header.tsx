import { ChevronDown, User } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-header px-6 py-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-header-foreground/20 rounded-full flex items-center justify-center">
          <span className="text-header-foreground text-lg">🤖</span>
        </div>
        <h1 className="text-header-foreground text-xl font-bold tracking-wide">
          AI Pollution Monitoring System
        </h1>
      </div>
      <div className="flex items-center gap-2 text-header-foreground">
        <div className="w-8 h-8 bg-header-foreground/20 rounded-full flex items-center justify-center">
          <User className="w-5 h-5" />
        </div>
        <span className="font-medium">Welcome, Admin</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </header>
  );
};

export default Header;
