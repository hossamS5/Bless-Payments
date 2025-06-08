import { useStoreAuth } from "../../store/auth";
import { Link } from "react-router-dom";
import { useState } from "react";
import { UserMenu } from "../organisms/UserMenu";

export const Header = () => {
  const token = useStoreAuth((state) => state.token);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="px-4 shadow-lg navbar bg-base-100 md:px-8">
      <div className="flex-1">
        <Link to="/" className="gap-2 text-xl btn btn-ghost hover:bg-base-200">
          <span className="text-3xl">🐾</span>
          <span className="font-bold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
            PetShop
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        {token ? (
          <UserMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        ) : (
          <div className="flex gap-1 md:gap-2">
            <Link to="/login" className="text-xs btn btn-ghost md:text-base">
              Login
            </Link>
            <Link to="/signup" className="text-xs btn btn-primary md:text-base">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
