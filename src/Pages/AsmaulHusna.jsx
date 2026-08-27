import { useState, useEffect } from "react";
import {
  Search,
  Volume2,
  Languages,
  Heart,
  ArrowUp,
  Sparkles,
} from "lucide-react";

import { asmaUlHusna } from "../Functions/getDataFromAPI.js";
import Spinner from "../Components/Spinner.jsx";
import Divider from "../Components/Divider.jsx";

function AsmaulHusna() {
  const [names, setNames] = useState([]);
  const [lang, setLang] = useState("en");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [showTop, setShowTop] = useState(false);

  const languages = [
    { code: "am", name: "Amharic (አማርኛ)" },
    { code: "ar", name: "Arabic (العربية)" },
    { code: "az", name: "Azerbaijani (Azərbaycan)" },
    { code: "bg", name: "Bulgarian (Български)" },
    { code: "bn", name: "Bengali (বাংলা)" },
    { code: "bs", name: "Bosnian (Bosanski)" },
    { code: "cs", name: "Czech (Čeština)" },
    { code: "da", name: "Danish (Dansk)" },
    { code: "de", name: "German (Deutsch)" },
    { code: "dv", name: "Dhivehi (ދިވެހި)" },
    { code: "el", name: "Greek (Ελληνικά)" },
    { code: "en", name: "English" },
    { code: "es", name: "Spanish (Español)" },
    { code: "et", name: "Estonian (Eesti)" },
    { code: "fa", name: "Persian (فارسی)" },
    { code: "fi", name: "Finnish (Suomi)" },
    { code: "fr", name: "French (Français)" },
    { code: "gu", name: "Gujarati (ગુજરાતી)" },
    { code: "ha", name: "Hausa" },
    { code: "haw", name: "Hawaiian (ʻŌlelo Hawaiʻi)" },
    { code: "he", name: "Hebrew (עברית)" },
    { code: "hi", name: "Hindi (हिन्दी)" },
    { code: "hr", name: "Croatian (Hrvatski)" },
    { code: "hu", name: "Hungarian (Magyar)" },
    { code: "hy", name: "Armenian (Հայերեն)" },
    { code: "id", name: "Indonesian (Bahasa Indonesia)" },
    { code: "is", name: "Icelandic (Íslenska)" },
    { code: "it", name: "Italian (Italiano)" },
    { code: "ja", name: "Japanese (日本語)" },
    { code: "ka", name: "Georgian (ქართული)" },
    { code: "kk", name: "Kazakh (Қазақ тілі)" },
    { code: "km", name: "Khmer (ភាសាខ្មែរ)" },
    { code: "kn", name: "Kannada (ಕನ್ನಡ)" },
    { code: "ko", name: "Korean (한국어)" },
    { code: "ku", name: "Kurdish (کوردی)" },
    { code: "lo", name: "Lao (ລາວ)" },
    { code: "lt", name: "Lithuanian (Lietuvių)" },
    { code: "lv", name: "Latvian (Latviešu)" },
    { code: "mg", name: "Malagasy" },
    { code: "mi", name: "Maori (Te Reo Māori)" },
    { code: "ml", name: "Malayalam (മലയാളം)" },
    { code: "mr", name: "Marathi (मराठी)" },
    { code: "ms", name: "Malay (Bahasa Melayu)" },
    { code: "mt", name: "Maltese (Malti)" },
    { code: "my", name: "Burmese (မြန်မာဘာသာ)" },
    { code: "ne", name: "Nepali (नेपाली)" },
    { code: "nl", name: "Dutch (Nederlands)" },
    { code: "no", name: "Norwegian (Norsk)" },
    { code: "or", name: "Odia (ଓଡ଼ିଆ)" },
    { code: "pa", name: "Punjabi (ਪੰਜਾਬੀ)" },
    { code: "pl", name: "Polish (Polski)" },
    { code: "ps", name: "Pashto (پښتو)" },
    { code: "pt", name: "Portuguese (Português)" },
    { code: "ro", name: "Romanian (Română)" },
    { code: "ru", name: "Russian (Русский)" },
    { code: "sd", name: "Sindhi (سنڌي)" },
    { code: "si", name: "Sinhala (සිංහල)" },
    { code: "sk", name: "Slovak (Slovenčina)" },
    { code: "sl", name: "Slovenian (Slovenščina)" },
    { code: "so", name: "Somali (Soomaali)" },
    { code: "sq", name: "Albanian (Shqip)" },
    { code: "sr", name: "Serbian (Српски)" },
    { code: "sv", name: "Swedish (Svenska)" },
    { code: "sw", name: "Swahili (Kiswahili)" },
    { code: "ta", name: "Tamil (தமிழ்)" },
    { code: "te", name: "Telugu (తెలుగు)" },
    { code: "th", name: "Thai (ไทย)" },
    { code: "ti", name: "Tigrinya (ትግርኛ)" },
    { code: "tl", name: "Filipino" },
    { code: "tr", name: "Turkish (Türkçe)" },
    { code: "ug", name: "Uyghur (ئۇيغۇرچە)" },
    { code: "uk", name: "Ukrainian (Українська)" },
    { code: "ur", name: "Urdu (اردو)" },
    { code: "uz", name: "Uzbek (Oʻzbekcha)" },
    { code: "vi", name: "Vietnamese (Tiếng Việt)" },
    { code: "zh", name: "Chinese (中文)" },
  ];

  /* =====================================
     FETCH NAMES
  ===================================== */

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const result = await asmaUlHusna(lang);

        if (result?.data?.names) {
          setNames(result.data.names);
        } else {
          setNames([]);
        }
      } catch (error) {
        console.error("Failed to load Asma ul Husna:", error);
        setNames([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    localStorage.setItem("asmaLang", lang);
  }, [lang]);

  /* =====================================
     SCROLL TOP
  ===================================== */

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

  /* =====================================
     SEARCH
  ===================================== */

  const filteredNames = names.filter((name) => {
    const value = search.toLowerCase().trim();

    if (!value) return true;

    return (
      name.name?.toLowerCase().includes(value) ||
      name.transliteration?.toLowerCase().includes(value) ||
      name.translation?.toLowerCase().includes(value) ||
      name.meaning?.toLowerCase().includes(value)
    );
  });

  return (
    <div className="min-h-screen bg-base-200">
      {/* =====================================
          HERO
      ===================================== */}

      <section className="relative overflow-hidden bg-base-100">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-20 text-center">
          <div className="flex justify-center mb-5">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
              <Sparkles size={32} />
            </div>
          </div>

          <p className="text-primary font-semibold tracking-wide uppercase text-sm">
            Beautiful Names of Allah
          </p>

          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-base-content">
            Asma ul Husna
          </h1>

          <p className="mt-4 text-base-content/60 max-w-2xl mx-auto text-base md:text-lg">
            Explore the 99 beautiful names of Allah, their meanings,
            translations, and pronunciation.
          </p>

          <div className="mt-6">
            <Divider />
          </div>
        </div>
      </section>

      {/* =====================================
          STICKY TOOLBAR
      ===================================== */}

      <div className="sticky top-0 z-40 bg-base-100/95 backdrop-blur-md border-b border-base-300 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
            {/* Search */}

            <div className="relative flex-1">
              <Search
                size={19}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search a name or meaning..."
                className="input input-bordered w-full pl-10 rounded-xl focus:outline-none focus:border-primary"
              />
            </div>

            {/* Language */}

            <div className="relative">
              <Languages
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50 pointer-events-none"
              />

              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="select select-bordered w-full md:w-64 pl-10 rounded-xl"
                aria-label="Select language"
              >
                {languages.map((language) => (
                  <option key={language.code} value={language.code}>
                    {language.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Search count */}

          {search.trim() && (
            <p className="text-sm text-base-content/60 mt-3">
              <span className="font-semibold text-primary">
                {filteredNames.length}
              </span>{" "}
              {filteredNames.length === 1 ? "name" : "names"} found for{" "}
              <span className="font-semibold text-base-content">
                "{search}"
              </span>
            </p>
          )}
        </div>
      </div>

      {/* =====================================
          MAIN CONTENT
      ===================================== */}

      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* Loading */}

        {loading && (
          <div className="flex justify-center py-16">
            <Spinner text="Loading the beautiful names..." />
          </div>
        )}

        {/* Empty */}

        {!loading && filteredNames.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto rounded-full bg-base-300 flex items-center justify-center mb-4">
              <Search size={28} className="text-base-content/50" />
            </div>

            <h2 className="text-xl font-semibold">No names found</h2>

            <p className="text-base-content/60 mt-2">
              Try searching with another word.
            </p>
          </div>
        )}

        {/* =====================================
            CARDS
        ===================================== */}

        {!loading && filteredNames.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredNames.map((name) => (
              <article
                key={name.number}
                className="group bg-base-100 rounded-2xl border border-base-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Card header */}

                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                      {name.number}
                    </span>

                    <Heart
                      size={18}
                      className="text-base-content/20 group-hover:text-primary transition"
                    />
                  </div>

                  {/* Arabic / Main name */}

                  <div className="text-center py-6">
                    <h2
                      dir="rtl"
                      className="text-3xl md:text-4xl font-semibold text-primary leading-relaxed"
                    >
                      {name.name}
                    </h2>
                  </div>

                  {/* Transliteration */}

                  <p className="text-center font-medium text-base-content">
                    {name.transliteration}
                  </p>

                  {/* Translation */}

                  <p className="text-center text-primary mt-2 font-medium">
                    {name.translation}
                  </p>

                  {/* Meaning */}

                  <div className="mt-5 pt-4 border-t border-base-300">
                    <p className="text-sm leading-6 text-base-content/65 text-center">
                      {name.meaning}
                    </p>
                  </div>

                  {/* Audio */}

                  <div className="mt-5">
                    <div className="flex items-center gap-2 text-xs text-base-content/50 mb-2">
                      <Volume2 size={15} />
                      <span>Listen</span>
                    </div>

                    <audio controls preload="none" className="w-full h-9">
                      <source
                        src={`https://islamicapi.com/${name.audio}`}
                        type="audio/mp3"
                      />
                      Your browser does not support audio.
                    </audio>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* =====================================
          SCROLL TOP
      ===================================== */}

      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 btn btn-circle btn-primary shadow-lg no-print"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default AsmaulHusna;
