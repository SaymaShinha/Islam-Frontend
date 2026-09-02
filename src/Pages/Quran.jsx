import { useLoaderData, useNavigate } from "react-router";
import { useEffect, useState } from "react";

import { getTransQuranData } from "../Functions/getDataFromJsonFile.js";
import existingQuranDataInfo from "../JsonData/ExistingQuranDataInfo.json";

import Spinner from "../components/Spinner.jsx";

import getSurahAyahNumber from "../utils/getSurahAyahNumber.js";
import scrollToTop from "../utils/scrollToTop.js";

function Quran() {
  const { quranData } = useLoaderData();

  const data = [...quranData.data].sort(
    (a, b) => a.ayah_number - b.ayah_number,
  );

  /*
   * ==========================================
   * LANGUAGE
   * ==========================================
   */

  const [lang, setLang] = useState(() => {
    const savedLang = localStorage.getItem("transLang");

    return savedLang || "en__saheeh__international";
  });

  const [surahData, setSurahData] = useState(data);
  const [quran, setQuran] = useState([]);
  const [searchedQuranAyah, setSearchedQuranAyah] = useState([]);
  const [searchedWord, setSearchedWord] = useState("");
  const [loading, setLoading] = useState(false);
  const [showTop, setShowTop] = useState(false);

  /*
   * Translation dropdown
   */

  const [translationOpen, setTranslationOpen] = useState(false);
  const [translationSearch, setTranslationSearch] = useState("");

  const navigate = useNavigate();

  /*
   * ==========================================
   * INITIAL SURAH DATA
   * ==========================================
   */

  useEffect(() => {
    scrollToTop();
    setSurahData(data);
  }, []);

  /*
   * ==========================================
   * LOAD QURAN TRANSLATION
   * ==========================================
   */

  useEffect(() => {
    if (!lang) return;

    const fetchData = async () => {
      try {
        setLoading(true);

        const quranArray = await getTransQuranData(lang);

        const translationData = quranArray?.quranData || [];

        setQuran(translationData);
        setSearchedQuranAyah(translationData);
      } catch (error) {
        console.error("Failed to load Quran:", error);

        setQuran([]);
        setSearchedQuranAyah([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [lang]);

  /*
   * ==========================================
   * SELECTED TRANSLATION
   * ==========================================
   */

  const selectedTranslation = existingQuranDataInfo.find(
    (item) => item.value_double === lang,
  );

  /*
   * ==========================================
   * FILTER TRANSLATIONS
   * ==========================================
   */

  const filteredTranslations = existingQuranDataInfo.filter((item) => {
    const search = translationSearch.toLowerCase().trim();

    if (!search) return true;

    return (
      item.language?.toLowerCase().includes(search) ||
      item.name?.toLowerCase().includes(search) ||
      item.value_double?.toLowerCase().includes(search)
    );
  });

  /*
   * ==========================================
   * CHANGE LANGUAGE
   * ==========================================
   */

  const handleLanguageChange = (value) => {
    if (!value) return;

    setLang(value);

    localStorage.setItem("transLang", value);

    setSearchedWord("");

    setTranslationOpen(false);
    setTranslationSearch("");
  };

  /*
   * ==========================================
   * SCROLL TO TOP
   * ==========================================
   */

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  /*
   * ==========================================
   * SORTING
   * ==========================================
   */

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

  /*
   * ==========================================
   * SEARCH SURAH
   * ==========================================
   */

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

  /*
   * ==========================================
   * SEARCH AYAH
   * ==========================================
   */

  const searchWordAyah = (e) => {
    const value = e.target.value;

    setSearchedWord(value);

    if (!value.trim()) {
      setSearchedQuranAyah([]);
      return;
    }

    const filteredData = quran.filter((ayah) =>
      ayah.text?.toLowerCase().includes(value.toLowerCase()),
    );

    setSearchedQuranAyah(filteredData);
  };

  return (
    <>
      <div className="drawer lg:drawer-open min-h-screen w-full max-w-full overflow-x-hidden bg-base-200">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        {/* =====================================
            MAIN CONTENT
        ===================================== */}

        <div className="drawer-content min-w-0 w-full">
          {/* =====================================
              TOP NAVBAR
          ===================================== */}

          <nav className="navbar sticky top-0 z-40 w-full max-w-full border-b border-base-300 bg-base-100/95 px-4 shadow-sm backdrop-blur-md">
            {/* Mobile menu */}

            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-4"
                className="btn btn-square btn-ghost"
                aria-label="Open Quran menu"
              >
                ☰
              </label>
            </div>

            {/* Logo */}

            <div className="min-w-0 flex-1">
              <a
                href="/"
                className="flex items-center gap-2 text-xl font-bold text-primary"
              >
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-green-600 text-lg">
                  🕌
                </span>

                <span className="truncate">Furqan Life</span>
              </a>
            </div>

            {/* Page title */}

            <div className="hidden shrink-0 items-center gap-2 text-base-content/70 md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-book-open"
                aria-hidden="true"
              >
                <path d="M12 5v16"></path>
                <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"></path>
              </svg>
              <span>Quran</span>
            </div>
          </nav>

          {/* =====================================
              STICKY TOOLBAR
          ===================================== */}

          <div className="sticky top-[64px] z-30 w-full max-w-full border-b border-base-300 bg-base-100/95 shadow-sm backdrop-blur-md">
            <div className="mx-auto w-full max-w-7xl px-4 py-3">
              <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
                {/* Search Ayah */}

                <div className="relative min-w-0 flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50">
                    🔍
                  </span>

                  <input
                    type="text"
                    value={searchedWord}
                    onChange={searchWordAyah}
                    placeholder="Search Quran verses..."
                    className="input input-bordered w-full rounded-xl pl-10 focus:border-primary focus:outline-none"
                  />
                </div>

                {/* =================================
                    SEARCHABLE TRANSLATION
                ================================= */}

                <div className="relative w-full md:w-64">
                  <button
                    type="button"
                    onClick={() => setTranslationOpen((previous) => !previous)}
                    className="flex h-12 w-full items-center justify-between gap-2 rounded-xl border border-base-300 bg-base-100 px-4 text-left"
                  >
                    <span className="min-w-0 flex-1 truncate">
                      {selectedTranslation
                        ? `${selectedTranslation.language} — ${selectedTranslation.name}`
                        : "Select Translation"}
                    </span>

                    <span className="flex-none">
                      {translationOpen ? "▲" : "▼"}
                    </span>
                  </button>

                  {translationOpen && (
                    <div className="absolute left-0 top-full z-[100] mt-2 w-full overflow-hidden rounded-xl border border-base-300 bg-base-100 shadow-xl">
                      {/* Search */}

                      <div className="border-b border-base-300 p-2">
                        <div className="flex items-center rounded-lg border border-base-300 px-3">
                          <span className="text-base-content/50">🔍</span>

                          <input
                            type="text"
                            value={translationSearch}
                            onChange={(e) =>
                              setTranslationSearch(e.target.value)
                            }
                            placeholder="Search translation..."
                            className="w-full bg-transparent px-2 py-2 text-sm outline-none"
                            autoFocus
                          />
                        </div>
                      </div>

                      {/* Translation list */}

                      <div className="max-h-72 overflow-y-auto p-1">
                        {filteredTranslations.length > 0 ? (
                          filteredTranslations.map((item) => (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() =>
                                handleLanguageChange(item.value_double)
                              }
                              className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm hover:bg-base-200 ${
                                lang === item.value_double
                                  ? "bg-primary/10 text-primary"
                                  : ""
                              }`}
                            >
                              <span className="min-w-0 truncate">
                                <span className="font-medium">
                                  {item.language}
                                </span>

                                <span className="opacity-70">
                                  {" "}
                                  — {item.name}
                                </span>
                              </span>

                              {lang === item.value_double && (
                                <span className="ml-2 flex-none font-bold">
                                  ✓
                                </span>
                              )}
                            </button>
                          ))
                        ) : (
                          <div className="px-3 py-6 text-center text-sm text-base-content/60">
                            No translation found
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Print */}

                <button
                  onClick={() => window.print()}
                  className="btn btn-primary rounded-xl no-print"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-printer"
                    aria-hidden="true"
                  >
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                    <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path>
                    <rect x="6" y="14" width="12" height="8" rx="1"></rect>
                  </svg>
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

          <main className="mx-auto w-full max-w-7xl min-w-0 px-4 py-8">
            {loading && (
              <div className="flex justify-center py-10">
                <Spinner text="Loading Quran..." />
              </div>
            )}

            {/* =================================
                SEARCH RESULTS
            ================================= */}

            {searchedWord.trim() ? (
              <section className="print-content space-y-4">
                {searchedQuranAyah.length === 0 && !loading && (
                  <div className="py-20 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-base-300">
                      <span className="text-2xl">🔍</span>
                    </div>

                    <h2 className="text-xl font-semibold">No verses found</h2>

                    <p className="mt-2 text-base-content/60">
                      Try searching with another word or phrase.
                    </p>
                  </div>
                )}

                {searchedQuranAyah.map((ayah) => (
                  <article
                    key={ayah.id}
                    onClick={() =>
                      navigate(
                        `/Surah/${ayah.surah_number}/${getSurahAyahNumber(
                          quran,
                          ayah.ayah_number,
                          ayah.surah_number,
                        )}`,
                      )
                    }
                    className="group cursor-pointer rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg md:p-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h2 className="font-semibold text-primary transition group-hover:text-green-700">
                          {ayah.surah_number}. {ayah.surah_en_name}
                        </h2>

                        <p className="mt-1 text-xs text-base-content/50">
                          Ayah{" "}
                          {getSurahAyahNumber(
                            quran,
                            ayah.ayah_number,
                            ayah.surah_number,
                          )}
                        </p>
                      </div>

                      <span className="badge badge-primary badge-outline shrink-0">
                        {getSurahAyahNumber(
                          quran,
                          ayah.ayah_number,
                          ayah.surah_number,
                        )}
                      </span>
                    </div>

                    <p className="mt-4 break-words leading-8 text-base-content/80">
                      {ayah.text}
                    </p>
                  </article>
                ))}
              </section>
            ) : (
              /* =================================
                  DEFAULT QURAN LANDING
              ================================= */

              <section className="print-content">
                <div className="mb-8">
                  <div className="mb-2 flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-book-open"
                      aria-hidden="true"
                    >
                      <path d="M12 5v16"></path>
                      <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"></path>
                    </svg>

                    <h1 className="text-2xl font-bold md:text-3xl">Quran</h1>
                  </div>

                  <p className="text-base-content/60">
                    Explore the Quran by Surah, revelation, or search for a
                    specific chapter.
                  </p>
                </div>

                {/* Surah cards */}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {surahData.map((surah) => (
                    <article
                      key={surah.id}
                      onClick={() => navigate(`/surah/${surah.surah_number}`)}
                      className="group cursor-pointer rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex min-w-0 items-center gap-3">
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary/10 font-bold text-primary">
                            {surah.surah_number}
                          </div>

                          <div className="min-w-0">
                            <h2 className="truncate font-semibold transition group-hover:text-primary">
                              {surah.surah_en_name}
                            </h2>

                            <p className="truncate text-xs text-base-content/50">
                              {surah.surah_en_name_translation}
                            </p>
                          </div>
                        </div>

                        <span className="shrink-0 text-xl">
                          {surah.surah_ar_name}
                        </span>
                      </div>

                      <div className="mt-4 flex justify-between border-t border-base-300 pt-4 text-xs text-base-content/60">
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

          <aside className="min-h-full w-80 border-r border-base-300 bg-base-100">
            {/* Sidebar header */}

            <div className="sticky top-0 z-10 border-b border-base-300 bg-base-100 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-book-open"
                    aria-hidden="true"
                  >
                    <path d="M12 5v16"></path>
                    <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"></path>
                  </svg>

                  <h2 className="text-lg font-bold">Surahs</h2>
                </div>

                <label
                  htmlFor="my-drawer-4"
                  className="btn btn-sm btn-circle btn-ghost lg:hidden"
                >
                  ✕
                </label>
              </div>

              {/* Search Surah */}

              <div className="relative mt-4">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50">
                  🔍
                </span>

                <input
                  type="text"
                  onChange={searchQuran}
                  placeholder="Search Surah..."
                  className="input input-bordered input-sm w-full rounded-lg pl-9"
                />
              </div>
            </div>

            {/* Sorting */}

            <div className="border-b border-base-300 p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
                <span>☷</span>
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

            <ul className="menu gap-1 p-3">
              {surahData.map((surah) => (
                <li key={surah.id}>
                  <a
                    href={`/surah/${surah.surah_number}`}
                    className="rounded-xl"
                  >
                    <div className="flex w-full min-w-0 items-center gap-3">
                      <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                        {surah.surah_number}
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="truncate font-medium">
                          {surah.surah_en_name}
                        </div>

                        <div className="truncate text-xs text-base-content/50">
                          {surah.surah_en_name_translation}
                        </div>
                      </div>

                      <span className="shrink-0 text-lg">
                        {surah.surah_ar_name}
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>

      {/* =====================================
          SCROLL TO TOP
      ===================================== */}

      {showTop && (
        <button
          onClick={scrollToTop}
          className="btn btn-circle btn-primary no-print fixed bottom-6 right-6 z-50 shadow-lg"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
}

export default Quran;
