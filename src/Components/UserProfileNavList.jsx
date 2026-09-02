import { User, LogOut, UserRound } from "lucide-react";
import { Link, useNavigate } from "react-router";

export default function UserProfileNavList() {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");

    navigate("/auth/login");
  };

  return (
    <div className="dropdown dropdown-left">
      <button
        tabIndex={0}
        className="btn btn-circle btn-ghost"
        aria-label="User menu"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
          <User size={19} />
        </div>
      </button>

      <ul
        tabIndex={0}
        className="menu dropdown-content z-[9999] mt-2 w-56 rounded-box border border-base-300 bg-base-100 p-2 shadow-xl"
      >
        <li>
          <Link to="/user-profile">
            <UserRound size={17} />
            Profile
          </Link>
        </li>

        <li>
          <button onClick={logOut}>
            <LogOut size={17} />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}
