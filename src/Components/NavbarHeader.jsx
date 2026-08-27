import {
  Home,
  Menu,
  Moon,
  Sun,
  BookOpen,
  Users,
  Info,
  Mail,
} from "lucide-react";

import { useEffect, useState } from "react";
import { Link } from "react-router";
import NamazNavList from "./NamazNavList.jsx";
import UserProfileNavList from "./UserProfileNavList.jsx";

function NavbarHeader() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "islamic",
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "islamic" ? "dark" : "islamic"));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-base-300 bg-base-100/95 shadow-sm backdrop-blur">
      <div className="navbar mx-auto max-w-[1600px] px-4 md:px-6">
        {/* Logo */}

        <div className="flex-1">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-xl">
              🕌
            </span>

            <div className="hidden sm:block">
              <p className="text-lg font-bold leading-none text-primary">
                Furqan Life
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-widest opacity-50">
                Islamic Knowledge
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop */}

        <nav className="hidden lg:block">
          <ul className="menu menu-horizontal items-center gap-1">
            <li>
              <Link to="/">
                <Home size={18} />
                Home
              </Link>
            </li>

            <li>
              <Link to="/asma-ul-husna">
                <span className="text-lg">ﷲ</span>
                Asma ul Husna
              </Link>
            </li>

            <li>
              <Link to="/quran">
                <BookOpen size={18} />
                Quran
              </Link>
            </li>

            <li>
              <Link to="/prophets">
                <Users size={18} />
                Prophets
              </Link>
            </li>

            <NamazNavList />

            <li>
              <Link to="/about">
                <Info size={18} />
                About
              </Link>
            </li>

            <li>
              <Link to="/contact">
                <Mail size={18} />
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right */}

        <div className="flex items-center gap-1">
          {/* Theme */}


          {/* Mobile */}

          <div className="dropdown dropdown-end lg:hidden">
            <button tabIndex={0} className="btn btn-circle btn-ghost">
              <Menu size={22} />
            </button>

            <ul
              tabIndex={0}
              className="menu dropdown-content z-[60] mt-3 w-64 rounded-2xl border border-base-300 bg-base-100 p-3 shadow-xl"
            >
              <li>
                <Link to="/">
                  <Home size={18} />
                  Home
                </Link>
              </li>

              <li>
                <Link to="/asmaul-husna">ﷲ Asma ul Husna</Link>
              </li>

              <li>
                <Link to="/quran">
                  <BookOpen size={18} />
                  Quran
                </Link>
              </li>

              <li>
                <Link to="/prophets">
                  <Users size={18} />
                  Prophets
                </Link>
              </li>

              <NamazNavList />

              <li>
                <Link to="/about">
                  <Info size={18} />
                  About
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  <Mail size={18} />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* User */}

          <UserProfileNavList />
        </div>
      </div>
    </header>
  );
}

export default NavbarHeader;
