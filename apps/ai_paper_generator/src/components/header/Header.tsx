import { Logo } from "./Logo";
import { PaneNavigationButtons } from "./PaneNavigationButtons";
import { UserProfile } from "./UserProfile";
import { ModeToggle } from "./ModeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-6">
        <Logo />
        <PaneNavigationButtons />
        <div className="flex items-center gap-2">
          <ModeToggle />
          <UserProfile />
        </div>
      </div>
    </header>
  );
}
