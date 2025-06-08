import { useStoreAuth } from "../../store/auth";
import { Link } from "react-router-dom";
import { useState } from "react";
import { UserMenu } from "./UserMenu";

export const Header = () => {
  const token = useStoreAuth((state) => state.token);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 shadow-lg px-4 md:px-8">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl gap-2 hover:bg-base-200">
          <span className="text-3xl">🐾</span>
          <span className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            PetShop
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        {token ? (
          <UserMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        ) : (
          <div className="flex gap-1 md:gap-2">
            <Link to="/login" className="btn btn-ghost text-xs md:text-base">
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary text-xs md:text-base">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
