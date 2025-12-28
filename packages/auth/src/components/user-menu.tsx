import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  LogOut,
  User,
  Settings,
} from "@skolist/ui";
import { useAuth } from "../context";

interface UserMenuProps {
  /**
   * Show settings option
   * @default true
   */
  showSettings?: boolean;
  /**
   * Callback when settings is clicked
   */
  onSettingsClick?: () => void;
}

/**
 * Dropdown menu showing user info and logout option
 * Shows avatar with user initials/image
 */
export function UserMenu({
  showSettings = true,
  onSettingsClick,
}: UserMenuProps) {
  const { user, signOut } = useAuth();

  if (!user) return null;

  // Get user initials for avatar fallback
  const initials = user.email
    ? user.email
        .split("@")[0]
        ?.slice(0, 2)
        .toUpperCase()
    : user.phone
      ? user.phone.slice(-2)
      : "U";

  const displayName =
    user.user_metadata?.full_name ||
    user.email ||
    user.phone ||
    "User";

  const avatarUrl = user.user_metadata?.avatar_url;

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            {avatarUrl && <AvatarImage src={avatarUrl} alt={displayName} />}
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{displayName}</p>
            {user.email && (
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            )}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        {showSettings && (
          <DropdownMenuItem onClick={onSettingsClick}>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
