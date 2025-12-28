import { Link } from "react-router-dom";
import { Button } from "@skolist/ui";
import { AuthButton } from "@skolist/auth";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">Skolist</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="https://qgen.skolist.com"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              AI Paper Generator
            </a>
            <a
              href="https://aitutor.skolist.com"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              AI Tutor
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <AuthButton loginPath="/login" />
        </div>
      </div>
    </header>
  );
}
