import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Languages,
  ArrowUp,
} from "lucide-react";

import {
  getTransSurahData,
  getEnglishTransliteration,
} from "../Functions/getDataFromJsonFile.js";

import scrollToTop from "../utils/scrollToTop.js";

const Surah = () => {
  const { surahData } = useLoaderData();

  const getSurah = surahData.getSurah;

  const surah = getSurah[0];

  const surahNumber = surah.surah_number;

  const navigate = useNavigate();

  const { ayahNumber } = useParams();

  const [transSurah, setTransSurah] = useState([]);
  const [englishTransliterationData, setEnglishTransliterationData] = useState(
    [],
  );

  const [transLang, setTranslang] = useState(
    localStorage.getItem("transLang") || "en__saheeh__international",
  );

  const [loading, setLoading] = useState(true);

  /* --------------------------------
     Transliteration
  -------------------------------- */
  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEnglishTransliteration(surahNumber);

        setEnglishTransliterationData(data?.englishTransliteration || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [surahNumber]);

  /* --------------------------------
     Translation
  -------------------------------- */

  useEffect(() => {
    const lang =
      localStorage.getItem("transLang") || "en__saheeh__international";

    setTranslang(lang);

    const fetchData = async () => {
      try {
        setLoading(true);

        const result = await getTransSurahData(lang, surahNumber);

        setTransSurah(result?.quranData || []);
      } catch (error) {
        console.error("Translation error:", error);
        setTransSurah([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [surahNumber]);

  /* --------------------------------
     Scroll to selected Ayah
  -------------------------------- */

  useEffect(() => {
    if (!ayahNumber) return;

    const scrollToAyah = () => {
      const element = document.getElementById(`ayah-${ayahNumber}`);

      if (!element) {
        console.log(`Ayah ${ayahNumber} not found`);
        return;
      }

      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    };

    const timeout = setTimeout(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(scrollToAyah);
      });
    }, 500);

    return () => clearTimeout(timeout);
  }, [ayahNumber]);

  const previousSurah = surahNumber === 1 ? 114 : surahNumber - 1;

  const nextSurah = surahNumber === 114 ? 1 : surahNumber + 1;

  return (
    <main className="min-h-screen bg-base-200">
      {/* --------------------------------
          Surah Header
      -------------------------------- */}

      <section className="border-b border-base-300 bg-base-100">
        <div className="mx-auto max-w-5xl px-4 py-8 md:py-12">
          {/* Navigation */}

          <div className="mb-7 flex items-center justify-between">
            <button
              onClick={() => navigate(`/surah/${previousSurah}`)}
              className="btn btn-outline btn-sm rounded-xl"
            >
              <ChevronLeft size={18} />

              <span className="hidden sm:inline">Previous</span>
            </button>

            <button
              onClick={() => navigate(`/surah/${nextSurah}`)}
              className="btn btn-outline btn-sm rounded-xl"
            >
              <span className="hidden sm:inline">Next</span>

              <ChevronRight size={18} />
            </button>
          </div>

          {/* Surah information */}

          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Surah {surahNumber}
            </span>

            <h1 className="mt-3 text-4xl font-bold md:text-3xl">
              {surah.surah_en_name}
            </h1>

            <p className="mt-2 text-4xl font-semibold text-primary md:text-3xl">
              {surah.surah_ar_name}
            </p>

            <p className="mt-4 text-sm opacity-60">
              {surah.surah_en_name_translation}
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <span className="badge badge-outline">
                {surah.revelation_type}
              </span>

              <span className="badge badge-outline">
                {getSurah.length} Ayahs
              </span>
            </div>

            {surah.note && (
              <p className="mx-auto mt-4 max-w-2xl text-sm italic opacity-50">
                {surah.note}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* --------------------------------
          Reader
      -------------------------------- */}

      <section className="mx-auto max-w-5xl px-4 py-8 md:py-12">
        {/* Bismillah */}

        <div className="mb-8 rounded-2xl border border-primary/10 bg-primary/5 p-7 text-center">
          <p className="mb-4 text-sm opacity-60">
            أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ
          </p>

          {surahNumber !== 9 && (
            <p className="text-3xl font-semibold leading-loose text-primary">
              بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
            </p>
          )}
        </div>

        {/* Translation indicator */}

        <div className="mb-5 flex items-center justify-between rounded-xl border border-base-300 bg-base-100 px-4 py-3">
          <div className="flex items-center gap-2 text-sm">
            <Languages size={17} className="text-primary" />

            <span className="font-medium">Translation</span>
          </div>

          <span className="badge badge-primary badge-outline">{transLang}</span>
        </div>

        {/* Ayahs */}

        <div className="space-y-5">
          {getSurah.map((ayah, i) => (
            <article
              key={ayah.id}
              id={`ayah-${i + 1}`}
              className={`
                scroll-mt-28
                rounded-2xl
                border
                bg-base-100
                p-5
                shadow-sm
                transition
                md:p-7
                ${
                  String(ayahNumber) === String(ayah.ayah_number)
                    ? "border-primary/50 ring-2 ring-primary/10"
                    : "border-base-300"
                }
              `}
            >
              {/* Ayah number */}

              <div className="mb-6 flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {i + 1}
                </span>

                <span className="text-xs uppercase tracking-wider opacity-40">
                  Ayah
                </span>
              </div>

              {/* Arabic */}

              <p
                dir="rtl"
                className="text-right text-3xl font-medium leading-[2.2] md:text-2xl"
              >
                {ayah.text}
              </p>

              {/* Transliteration */}

              {englishTransliterationData[i]?.text && (
                <div className="mt-7 rounded-xl bg-primary/5 p-4">
                  <p className="text-sm leading-7 italic text-primary/80">
                    {englishTransliterationData[i]?.text}
                  </p>
                </div>
              )}

              {/* Translation */}

              {transSurah[i]?.text && (
                <div className="mt-4">
                  <p className="text-base leading-8 opacity-75 md:text-lg">
                    {transSurah[i]?.text}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Bottom navigation */}

        <div className="mt-10 flex items-center justify-between">
          <button
            onClick={() => navigate(`/surah/${previousSurah}`)}
            className="btn btn-outline rounded-xl"
          >
            <ChevronLeft size={18} />
            Previous
          </button>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="btn btn-circle btn-ghost"
            title="Back to top"
          >
            <ArrowUp size={18} />
          </button>

          <button
            onClick={() => navigate(`/surah/${nextSurah}`)}
            className="btn btn-primary rounded-xl"
          >
            Next
            <ChevronRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Surah;
