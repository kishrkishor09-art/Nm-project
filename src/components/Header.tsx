import { CartSheet } from "./CartSheet";
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  onLogout?: () => void;
  showAuth?: boolean;
}

export const Header = ({ onLogout, showAuth = false }: HeaderProps) => {
  return (
    <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold">Affordable Price</h1>
        </Link>
        <div className="flex items-center gap-2">
          {showAuth && (
            <>
              <CartSheet />
              {onLogout && (
                <Button variant="ghost" size="icon" onClick={onLogout}>
                  <LogOut className="h-5 w-5" />
                </Button>
              )}
            </>
          )}
          {!showAuth && (
            <Link to="/auth">
              <Button variant="outline">
                <User className="mr-2 h-4 w-4" />
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
