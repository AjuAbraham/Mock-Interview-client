import { useClerk, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function UserMenuDropdown() {
  const { signOut } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut().then(() => {
      navigate("/login");
    });
  };

  const handleViewProfile = () => {
    navigate("/profile");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative rounded-full overflow-hidden"
        >
          {user ? (
            <Avatar>
              <AvatarImage src={user.imageUrl} alt={user.fullName || "User"} />
              <AvatarFallback>
                {user.firstName ? user.firstName[0] : "U"}
                {user.lastName ? user.lastName[0] : ""}
              </AvatarFallback>
            </Avatar>
          ) : (
            <User className="h-[1.2rem] w-[1.2rem]" />
          )}
          <span className="sr-only">User menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {user && (
          <div className="px-2 py-1.5 text-sm font-medium">
            {user.fullName ||
              user.username ||
              user.emailAddresses[0]?.emailAddress}
          </div>
        )}
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={handleViewProfile}
        >
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
