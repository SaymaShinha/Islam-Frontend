import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Compass,
  Home,
  Search,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-16 text-gray-900 dark:bg-gray-950 dark:text-white">
      <div className="w-full max-w-3xl text-center">
        {/* 404 */}
        <div className="relative mx-auto flex h-40 w-40 items-center justify-center sm:h-48 sm:w-48">
          <div className="absolute inset-0 rounded-full bg-emerald-100 blur-2xl dark:bg-emerald-950/50" />

          <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-emerald-200 bg-white shadow-lg dark:border-emerald-900 dark:bg-gray-900 sm:h-40 sm:w-40">
            <span className="text-5xl font-black tracking-tight text-emerald-600 dark:text-emerald-400 sm:text-6xl">
              404
            </span>
          </div>
        </div>

        <div className="mt-10">
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
            <Compass className="h-4 w-4" />
            Page not found
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            This page seems to have wandered away.
          </h1>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600 dark:text-gray-400">
            The page you are looking for doesn't exist, may have been moved, or
            the address may have been entered incorrectly.
          </p>
        </div>

        {/* Requested URL */}
        <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-gray-200 bg-white p-4 text-left dark:border-gray-800 dark:bg-gray-900">
          <div className="flex items-start gap-3">
            <Search className="mt-0.5 h-5 w-5 shrink-0 text-gray-400" />

            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                Requested path
              </p>

              <p className="mt-1 break-all font-mono text-sm text-gray-700 dark:text-gray-300">
                {location.pathname}
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            <Home className="h-4 w-4" />
            Go Home
          </Link>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-emerald-800 dark:hover:text-emerald-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>
        </div>

        {/* Useful links */}
        <div className="mt-14 border-t border-gray-200 pt-8 dark:border-gray-800">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            You might want to explore
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <Link
              to="/quran"
              className="group rounded-2xl border border-gray-200 bg-white p-5 text-left transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-emerald-800"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                  <BookOpen className="h-5 w-5" />
                </div>

                <ArrowRight className="h-4 w-4 text-gray-400 transition group-hover:translate-x-1 group-hover:text-emerald-600" />
              </div>

              <h3 className="mt-4 font-semibold">Quran</h3>

              <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                Explore Islamic learning paths.
              </p>
            </Link>

            <Link
              to="/asma-ul-husna"
              className="group rounded-2xl border border-gray-200 bg-white p-5 text-left transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-emerald-800"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                  <Search className="h-5 w-5" />
                </div>

                <ArrowRight className="h-4 w-4 text-gray-400 transition group-hover:translate-x-1 group-hover:text-emerald-600" />
              </div>

              <h3 className="mt-4 font-semibold">Asma Ul Husna</h3>

              <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                Know Allah's 99 Names.
              </p>
            </Link>

            <Link
              to="/about"
              className="group rounded-2xl border border-gray-200 bg-white p-5 text-left transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-emerald-800"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                  <Compass className="h-5 w-5" />
                </div>

                <ArrowRight className="h-4 w-4 text-gray-400 transition group-hover:translate-x-1 group-hover:text-emerald-600" />
              </div>

              <h3 className="mt-4 font-semibold">About Furqan Life</h3>

              <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                Learn about the purpose behind the platform.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
