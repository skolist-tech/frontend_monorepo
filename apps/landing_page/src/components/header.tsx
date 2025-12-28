import { Link } from "react-router-dom";
import { Button } from "@skolist/ui";
import { useAuth, UserMenu } from "@skolist/auth";

export function Header() {
  const { isAuthenticated } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <img 
              src="/logo_with_name.png" 
              alt="Skolist Logo" 
              className="h-10"
            />
          </Link>
        </div>
        <nav className="flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            to="/vision"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Vision
          </Link>
          <Link
            to="/product"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Product
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
          {isAuthenticated ? (
            <UserMenu />
          ) : (
            <Button asChild>
              <Link to="/login">Sign Up</Link>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
