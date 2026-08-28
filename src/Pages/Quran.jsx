import { useLoaderData, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Printer,
  Menu,
  X,
  BookOpen,
  ArrowUp,
} from "lucide-react";

import { getTransQuranData } from "../Functions/getDataFromJsonFile.js";
import existingQuranDataInfo from "../JsonData/ExistingQuranDataInfo.json";

import Spinner from "../Components/Spinner.jsx";

function Quran() {
  const { quranData } = useLoaderData();

  const data = [...quranData.data].sort(
    (a, b) => a.ayah_number - b.ayah_number,
  );

  const [surahData, setSurahData] = useState(data);
  const [quran, setQuran] = useState([]);
  const [searchedQuranAyah, setSearchedQuranAyah] = useState([]);
  const [lang, setLang] = useState("");
  const [searchedWord, setSearchedWord] = useState("");
  const [loading, setLoading] = useState(false);
  const [showTop, setShowTop] = useState(false);

  const navigate = useNavigate();

  /* --------------------------------
     Initial data
  -------------------------------- */

  useEffect(() => {
    setSurahData(data);
  }, []);

  /* --------------------------------
     Load Quran translation
  -------------------------------- */

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        let quranArray = [];

        quranArray = await getTransQuranData(lang);

        setQuran(quranArray.quranData || []);
        setSearchedQuranAyah(quranArray.quranData || []);
      } catch (error) {
        console.error("Failed to load Quran:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    localStorage.setItem("transLang", lang);
  }, [lang]);

  /* --------------------------------
     Scroll to top button
  -------------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* --------------------------------
     Sorting
  -------------------------------- */

  const getSurahByTraditionalOrder = () => {
    setSurahData(data);
  };

  const getSurahAccordingToRevelation = async () => {
    try {
      const res = await fetch(
        "https://raw.githubusercontent.com/SaymaShinha/islamDB/refs/heads/master/islam_public_quran__info__according__to__revelation.json",
      );

      if (!res.ok) {
        throw new Error("Failed to fetch Quran data According To Revelation.");
      }

      const jsonData = await res.json();

      const sorted = [...jsonData].sort(
        (a, b) => a.chronological_order - b.chronological_order,
      );

      setSurahData(sorted);
    } catch (error) {
      console.error(error);
    }
  };

  const getSurahByDescSurahName = () => {
    const sorted = [...data].sort((a, b) =>
      a.surah_en_name.localeCompare(b.surah_en_name),
    );

    setSurahData(sorted);
  };

  const getSurahByMinToMaxSurahTotalAyah = () => {
    const sorted = [...data].sort((a, b) => a.total_ayah - b.total_ayah);

    setSurahData(sorted);
  };

  const getSurahByMaxToMinSurahTotalAyah = () => {
    const sorted = [...data].sort((a, b) => b.total_ayah - a.total_ayah);

    setSurahData(sorted);
  };

  const getMeccanSurah = () => {
    setSurahData(data.filter((surah) => surah.revelation_type === "Meccan"));
  };

  const getMedinanSurah = () => {
    setSurahData(data.filter((surah) => surah.revelation_type === "Medinan"));
  };

  /* --------------------------------
     Search Surah
  -------------------------------- */

  const searchQuran = (e) => {
    const value = e.target.value.toLowerCase().trim();

    if (!value) {
      setSurahData(data);
      return;
    }

    const filtered = data.filter(
      (surah) =>
        surah.surah_en_name?.toLowerCase().includes(value) ||
        surah.surah_en_name_translation?.toLowerCase().includes(value) ||
        surah.surah_ar_name?.includes(value),
    );

    setSurahData(filtered);
  };

  /* --------------------------------
     Search Ayah
  -------------------------------- */

  const searchWordAyah = (e) => {
    const value = e.target.value;

    setSearchedWord(value);

    if (!value.trim()) {
      setSearchedQuranAyah([]);
      return;
    }

    setLoading(true);

    const filteredData = quran.filter((ayah) =>
      ayah.text?.toLowerCase().includes(value.toLowerCase()),
    );

    setSearchedQuranAyah(filteredData);

    setLoading(false);
  };

  return (
    <>
      <div className="drawer lg:drawer-open bg-base-200 min-h-screen">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        {/* =====================================
            MAIN CONTENT
        ===================================== */}

        <div className="drawer-content">
          {/* ================================
              TOP NAVBAR
          ================================= */}

          <nav className="navbar sticky top-0 z-40 bg-base-100/95 backdrop-blur-md border-b border-base-300 px-4 shadow-sm">
            {/* Mobile menu */}
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-4"
                className="btn btn-square btn-ghost"
                aria-label="Open Quran menu"
              >
                <Menu size={22} />
              </label>
            </div>
            {/* Logo */}
            <div className="flex-1">
              <a
                href="/"
                className="flex items-center gap-2 text-xl font-bold text-primary"
              >
                <span className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center text-lg">
                  🕌
                </span>

                <span>Furqan Life</span>
              </a>
            </div>
            {/* Page title */}
            <div className="hidden md:flex items-center gap-2 text-base-content/70">
              <BookOpen size={20} />
              <span>Quran</span>
            </div>
          </nav>

          {/* =====================================
              STICKY TOOLBAR
          ===================================== */}

          <div className="sticky top-[64px] z-30 bg-base-100/95 backdrop-blur-md border-b border-base-300 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-3">
              <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
                {/* Search Ayah */}

                <div className="relative flex-1">
                  <Search
                    size={19}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50"
                  />

                  <input
                    type="text"
                    value={searchedWord}
                    onChange={searchWordAyah}
                    placeholder="Search Quran verses..."
                    className="input input-bordered w-full pl-10 rounded-xl focus:outline-none focus:border-primary"
                  />
                </div>

                {/* Language */}

                <select
                  value={lang}
                  onChange={(e) => setLang(e.target.value)}
                  className="select select-bordered w-full md:w-64 rounded-xl"
                  aria-label="Quran translation"
                >
                  <option value="">Select Translation</option>

                  {existingQuranDataInfo.map((item) => (
                    <option key={item.id} value={item.value_double}>
                      {item.language} — {item.name}
                    </option>
                  ))}
                </select>

                {/* Print */}

                <button
                  onClick={() => window.print()}
                  className="btn btn-primary rounded-xl no-print"
                >
                  <Printer size={18} />
                  <span>Print</span>
                </button>
              </div>

              {/* Search result information */}

              {searchedWord.trim() && (
                <div className="mt-3 text-sm text-base-content/70">
                  <span className="font-semibold text-primary">
                    {searchedQuranAyah.length}
                  </span>{" "}
                  verses found for{" "}
                  <span className="font-semibold text-base-content">
                    "{searchedWord}"
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* =====================================
              CONTENT
          ===================================== */}

          <main className="max-w-7xl mx-auto w-full px-4 py-8">
            {loading && (
              <div className="flex justify-center py-10">
                <Spinner text="Loading Quran..." />
              </div>
            )}

            {/* ================================
                SEARCH RESULTS
            ================================= */}

            {searchedWord.trim() ? (
              <section className="space-y-4 print-content">
                {searchedQuranAyah.length === 0 && !loading && (
                  <div className="text-center py-20">
                    <div className="w-16 h-16 mx-auto rounded-full bg-base-300 flex items-center justify-center mb-4">
                      <Search size={28} className="text-base-content/50" />
                    </div>

                    <h2 className="text-xl font-semibold">No verses found</h2>

                    <p className="text-base-content/60 mt-2">
                      Try searching with another word or phrase.
                    </p>
                  </div>
                )}

                {searchedQuranAyah.map((ayah) => (
                  <article
                    key={ayah.id}
                    onClick={() =>
                      navigate(
                        `/Surah/${ayah.surah_number}/${ayah.ayah_number}`,
                      )
                    }
                    className="group bg-base-100 rounded-2xl border border-base-300 p-5 md:p-6 cursor-pointer shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-200"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="font-semibold text-primary group-hover:text-green-700 transition">
                          {ayah.surah_number}. {ayah.surah_en_name}
                        </h2>

                        <p className="text-xs text-base-content/50 mt-1">
                          Ayah {ayah.ayah_number}
                        </p>
                      </div>

                      <span className="badge badge-primary badge-outline">
                        {ayah.ayah_number}
                      </span>
                    </div>

                    <p className="mt-4 leading-8 text-base-content/80">
                      {ayah.text}
                    </p>
                  </article>
                ))}
              </section>
            ) : (
              /* ================================
                  DEFAULT QURAN LANDING
              ================================= */

              <section className="print-content">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <BookOpen className="text-primary" size={28} />

                    <h1 className="text-2xl md:text-3xl font-bold">Quran</h1>
                  </div>

                  <p className="text-base-content/60">
                    Explore the Quran by Surah, revelation, or search for a
                    specific chapter.
                  </p>
                </div>

                {/* Surah cards */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {surahData.map((surah) => (
                    <article
                      key={surah.id}
                      onClick={() => navigate(`/surah/${surah.surah_number}`)}
                      className="group bg-base-100 border border-base-300 rounded-2xl p-5 cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-primary/40 transition-all duration-200"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                            {surah.surah_number}
                          </div>

                          <div>
                            <h2 className="font-semibold group-hover:text-primary transition">
                              {surah.surah_en_name}
                            </h2>

                            <p className="text-xs text-base-content/50">
                              {surah.surah_en_name_translation}
                            </p>
                          </div>
                        </div>

                        <span className="text-xl">{surah.surah_ar_name}</span>
                      </div>

                      <div className="mt-4 pt-4 border-t border-base-300 flex justify-between text-xs text-base-content/60">
                        <span>{surah.total_ayah} Ayahs</span>

                        <span>{surah.revelation_type}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}
          </main>
        </div>

        {/* =====================================
            SIDEBAR
        ===================================== */}

        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-4"
            aria-label="Close sidebar"
            className="drawer-overlay"
          />

          <aside className="w-80 min-h-full bg-base-100 border-r border-base-300">
            {/* Sidebar header */}

            <div className="sticky top-0 z-10 bg-base-100 border-b border-base-300 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen size={22} className="text-primary" />

                  <h2 className="font-bold text-lg">Surahs</h2>
                </div>

                <label
                  htmlFor="my-drawer-4"
                  className="btn btn-sm btn-circle btn-ghost lg:hidden"
                >
                  <X size={18} />
                </label>
              </div>

              {/* Search Surah */}

              <div className="relative mt-4">
                <Search
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50"
                />

                <input
                  type="text"
                  onChange={searchQuran}
                  placeholder="Search Surah..."
                  className="input input-bordered input-sm w-full pl-9 rounded-lg"
                />
              </div>
            </div>

            {/* Sorting */}

            <div className="p-4 border-b border-base-300">
              <div className="flex items-center gap-2 mb-3 text-sm font-semibold">
                <SlidersHorizontal size={17} />
                Sort Surahs
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={getSurahByTraditionalOrder}
                  className="btn btn-sm btn-outline"
                >
                  Traditional
                </button>

                <button
                  onClick={getSurahAccordingToRevelation}
                  className="btn btn-sm btn-outline"
                >
                  Revelation
                </button>

                <button
                  onClick={getSurahByDescSurahName}
                  className="btn btn-sm btn-outline"
                >
                  A-Z
                </button>

                <button
                  onClick={getSurahByMinToMaxSurahTotalAyah}
                  className="btn btn-sm btn-outline"
                >
                  Ayah ↑
                </button>

                <button
                  onClick={getSurahByMaxToMinSurahTotalAyah}
                  className="btn btn-sm btn-outline"
                >
                  Ayah ↓
                </button>

                <button
                  onClick={getMeccanSurah}
                  className="btn btn-sm btn-outline"
                >
                  Meccan
                </button>

                <button
                  onClick={getMedinanSurah}
                  className="btn btn-sm btn-outline"
                >
                  Medinan
                </button>
              </div>
            </div>

            {/* Sidebar Surah list */}

            <ul className="menu p-3 gap-1">
              {surahData.map((surah) => (
                <li key={surah.id}>
                  <a
                    href={`/surah/${surah.surah_number}`}
                    className="rounded-xl"
                  >
                    <div className="flex items-center gap-3 w-full">
                      <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                        {surah.surah_number}
                      </span>

                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">
                          {surah.surah_en_name}
                        </div>

                        <div className="text-xs text-base-content/50 truncate">
                          {surah.surah_en_name_translation}
                        </div>
                      </div>

                      <span className="text-lg">{surah.surah_ar_name}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>

      {/* Scroll to top */}

      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 btn btn-circle btn-primary shadow-lg no-print"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}

export default Quran;
