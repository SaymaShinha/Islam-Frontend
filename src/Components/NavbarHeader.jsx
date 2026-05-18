import { useHref, useNavigate } from "react-router";
import NamazNavList from "./NamazNavList";
import { useState, useEffect } from "react";

function NavbarHeader() {
  const navigate = useNavigate();

  const [theme, setTheme] = useState("islamic");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "islamic" ? "dark" : "islamic");
  };
  return (
    <>
      <div className="navbar bg-base-100 shadow-md px-4">
        {/* Left: Logo */}
        <div className="flex-1">
          <a className="text-xl font-bold text-primary" href="/">
            🕌 Furqan Life
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/asmaul-husna">
                <img className="w-5 h-5" src="/allah.svg" alt="allah" />
                Asma Ul Husna
              </a>
            </li>
            <li>
              <a href="/quran">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  id="quran"
                >
                  <path
                    fill="#37b678"
                    d="M5.5 25.5v-23a2 2 0 0 1 2-2h19v23"
                  ></path>
                  <path
                    fill="#00a653"
                    d="M6.5 2.5a2 2 0 0 1 2-2h-1a2 2 0 0 0-2 2v23l1-.095Z"
                  ></path>
                  <path
                    fill="#e0e0e2"
                    d="M7.5 23.5h19v5h-19a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2Z"
                  ></path>
                  <path
                    fill="#d9d8da"
                    d="M6.5 26.5v-1a2 2 0 0 1 2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 1-2-2Z"
                  ></path>
                  <path fill="#e5303e" d="m11.5 31.5-2-1-2 1v-5h4v5z"></path>
                  <path fill="#b72732" d="M8.5 26.5h-1v5l1-.5v-4.5z"></path>
                  <path
                    fill="#fdd402"
                    d="M7.5 4.5v14a2 2 0 0 1 2 2 1.98 1.98 0 0 1-.277 1h12.554a1.98 1.98 0 0 1-.277-1 2 2 0 0 1 2-2 1.98 1.98 0 0 1 1 .277V4.223a1.98 1.98 0 0 1-1 .277 2 2 0 0 1-2-2h-12a2 2 0 0 1-2 2Z"
                  ></path>
                  <path
                    fill="#fbbf13"
                    d="M8.5 18.5v-14a2 2 0 0 0 2-2h-1a2 2 0 0 1-2 2v14a2 2 0 0 1 2 2 1.98 1.98 0 0 1-.277 1h1a1.98 1.98 0 0 0 .277-1 2 2 0 0 0-2-2Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M12.576 7.68a4.922 4.922 0 0 1 2.093-.634 4.943 4.943 0 0 0 4.473 7.747 4.963 4.963 0 1 1-6.566-7.113Z"
                  ></path>
                  <path
                    fill="#e0e0e2"
                    d="M11.757 14.469a4.97 4.97 0 0 1 1.82-6.789 4.719 4.719 0 0 1 .964-.417c.044-.072.08-.148.128-.217a4.958 4.958 0 1 0 .91 9.873 4.953 4.953 0 0 1-3.822-2.45Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="m18.639 8.797.787-1.634.758 1.648 1.725.28-1.261 1.265.279 1.807-1.537-.866-1.553.836.311-1.8-1.239-1.29 1.73-.246z"
                  ></path>
                  <path
                    fill="#e0e0e2"
                    d="m18.699 11.669.188-1.092-1.239-1.289 1.73-.247.466-.968-.418-.91-.787 1.634-1.73.246 1.239 1.29-.311 1.8.862-.464z"
                  ></path>
                </svg>
                Quran
              </a>
            </li>
            <li>
              <a href="/prophets">
                <img className="w-5 h-5" src="/prophet.png" alt="prophet" />
                Prophets
              </a>
            </li>
            <NamazNavList></NamazNavList>
            <li>
              <a href="/about">
                <img className="w-5 h-5" src="/about.svg" alt="contact" />
                About
              </a>
            </li>
            <li>
              <a href="/contact">
                <img className="w-5 h-5" src="/contact.png" alt="contact" />
                Contact
              </a>
            </li>
            <li>
              <a>Hadith</a>
            </li>
          </ul>
        </div>

        {/* Right side */}
        <div className="flex-none gap-2">
          {/* Mobile Menu */}
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              ☰
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/asmaul-husna">
                  <img className="w-5 h-5" src="/allah.svg" alt="allah" />
                  Asma Ul Husna
                </a>
              </li>
              <li>
                <a href="/quran">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    id="quran"
                  >
                    <path
                      fill="#37b678"
                      d="M5.5 25.5v-23a2 2 0 0 1 2-2h19v23"
                    ></path>
                    <path
                      fill="#00a653"
                      d="M6.5 2.5a2 2 0 0 1 2-2h-1a2 2 0 0 0-2 2v23l1-.095Z"
                    ></path>
                    <path
                      fill="#e0e0e2"
                      d="M7.5 23.5h19v5h-19a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2Z"
                    ></path>
                    <path
                      fill="#d9d8da"
                      d="M6.5 26.5v-1a2 2 0 0 1 2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 1-2-2Z"
                    ></path>
                    <path fill="#e5303e" d="m11.5 31.5-2-1-2 1v-5h4v5z"></path>
                    <path fill="#b72732" d="M8.5 26.5h-1v5l1-.5v-4.5z"></path>
                    <path
                      fill="#fdd402"
                      d="M7.5 4.5v14a2 2 0 0 1 2 2 1.98 1.98 0 0 1-.277 1h12.554a1.98 1.98 0 0 1-.277-1 2 2 0 0 1 2-2 1.98 1.98 0 0 1 1 .277V4.223a1.98 1.98 0 0 1-1 .277 2 2 0 0 1-2-2h-12a2 2 0 0 1-2 2Z"
                    ></path>
                    <path
                      fill="#fbbf13"
                      d="M8.5 18.5v-14a2 2 0 0 0 2-2h-1a2 2 0 0 1-2 2v14a2 2 0 0 1 2 2 1.98 1.98 0 0 1-.277 1h1a1.98 1.98 0 0 0 .277-1 2 2 0 0 0-2-2Z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M12.576 7.68a4.922 4.922 0 0 1 2.093-.634 4.943 4.943 0 0 0 4.473 7.747 4.963 4.963 0 1 1-6.566-7.113Z"
                    ></path>
                    <path
                      fill="#e0e0e2"
                      d="M11.757 14.469a4.97 4.97 0 0 1 1.82-6.789 4.719 4.719 0 0 1 .964-.417c.044-.072.08-.148.128-.217a4.958 4.958 0 1 0 .91 9.873 4.953 4.953 0 0 1-3.822-2.45Z"
                    ></path>
                    <path
                      fill="#fff"
                      d="m18.639 8.797.787-1.634.758 1.648 1.725.28-1.261 1.265.279 1.807-1.537-.866-1.553.836.311-1.8-1.239-1.29 1.73-.246z"
                    ></path>
                    <path
                      fill="#e0e0e2"
                      d="m18.699 11.669.188-1.092-1.239-1.289 1.73-.247.466-.968-.418-.91-.787 1.634-1.73.246 1.239 1.29-.311 1.8.862-.464z"
                    ></path>
                  </svg>
                  Quran
                </a>
              </li>
              <li>
                <a href="/prophets">
                  <img className="w-5 h-5" src="/prophet.png" alt="prophet" />
                  Prophets
                </a>
              </li>
              <NamazNavList></NamazNavList>
              <li>
                <a href="/about">
                  <img className="w-5 h-5" src="/about.svg" alt="contact" />
                  About
                </a>
              </li>
              <li>
                <a href="/contact">
                  <img className="w-5 h-5" src="/contact.png" alt="contact" />
                  Contact
                </a>
              </li>
              <li>
                <a>Hadith</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarHeader;
