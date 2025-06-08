import { useStoreAuth } from "../../store/auth";
import { Link } from "react-router-dom";

export const Header = () => {
  const token = useStoreAuth((state) => state.token);

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
      <div className="flex items-center gap-4">
        {token ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  alt="User avatar"
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=user"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/profile" className="flex items-center gap-2">
                  <span className="material-icons">person</span>
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/orders" className="flex items-center gap-2">
                  <span className="material-icons">shopping_bag</span>
                  Orders
                </Link>
              </li>
              <div className="divider my-1"></div>
              <li>
                <Link
                  to="/logout"
                  className="text-error flex items-center gap-2"
                >
                  <span className="material-icons">logout</span>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="/login" className="btn btn-ghost">
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
