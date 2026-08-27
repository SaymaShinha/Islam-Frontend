import {
  BookOpen,
  Search,
  Languages,
  Users,
  Heart,
  Sparkles,
} from "lucide-react";

import Divider from "../Components/Divider.jsx";

function About() {
  return (
    <main className="min-h-screen bg-base-100">
      {/* ================= HERO ================= */}
      <section className="px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Sparkles size={16} />
            About Furqan Life
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-primary">
            A Simple Place to Explore Islamic Knowledge
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-base-content/70 leading-8">
            Furqan Life is designed to make Quran reading and Islamic learning
            simple, accessible, and organized for everyone.
          </p>
        </div>
      </section>

      <Divider />

      {/* ================= ABOUT CONTENT ================= */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {/* Introduction */}
            <div className="rounded-2xl border border-base-300 bg-base-100 shadow-sm p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <BookOpen size={22} />
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-3">Our Purpose</h2>

                  <p className="text-base-content/70 leading-7">
                    Furqan Life is a website created for gaining Islamic
                    knowledge. It is designed to be easy to use, accessible, and
                    efficiently organized so that users can explore Islamic
                    content without unnecessary complexity.
                  </p>
                </div>
              </div>
            </div>

            {/* Quran */}
            <div className="rounded-2xl border border-base-300 bg-base-100 shadow-sm p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-green-500/10 text-green-600 flex items-center justify-center">
                  <Heart size={22} />
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-3">Explore the Quran</h2>

                  <p className="text-base-content/70 leading-7">
                    The Quran is essential for every Muslim and is also
                    important for anyone who wants to understand the message of
                    Islam. Furqan Life provides tools to explore the Quran in a
                    clear and accessible way.
                  </p>

                  <p className="mt-4 text-base-content/70 leading-7">
                    Users can explore Asmaul Husna, search for Quranic verses,
                    read Surahs, explore translations, and discover related
                    Quranic content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="px-4 py-12 bg-base-200/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              What You Can Explore
            </h2>

            <p className="mt-3 text-base-content/60">
              Tools designed to make learning and reading easier.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Search */}
            <div className="p-6 rounded-2xl bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition">
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Search size={22} />
              </div>

              <h3 className="font-bold text-lg mb-2">Quran Search</h3>

              <p className="text-sm text-base-content/65 leading-6">
                Search Quranic verses using words from multiple languages and
                quickly find relevant Ayahs.
              </p>
            </div>

            {/* Translation */}
            <div className="p-6 rounded-2xl bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition">
              <div className="w-11 h-11 rounded-xl bg-green-500/10 text-green-600 flex items-center justify-center mb-4">
                <Languages size={22} />
              </div>

              <h3 className="font-bold text-lg mb-2">Translations</h3>

              <p className="text-sm text-base-content/65 leading-6">
                Read Quranic content with translations and pronunciation options
                to support understanding.
              </p>
            </div>

            {/* Surahs */}
            <div className="p-6 rounded-2xl bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition">
              <div className="w-11 h-11 rounded-xl bg-yellow-500/10 text-yellow-600 flex items-center justify-center mb-4">
                <BookOpen size={22} />
              </div>

              <h3 className="font-bold text-lg mb-2">Explore Surahs</h3>

              <p className="text-sm text-base-content/65 leading-6">
                Sort Surahs using different options and quickly find the Surah
                you are looking for.
              </p>
            </div>

            {/* Prophets */}
            <div className="p-6 rounded-2xl bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition">
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4">
                <Users size={22} />
              </div>

              <h3 className="font-bold text-lg mb-2">Prophets</h3>

              <p className="text-sm text-base-content/65 leading-6">
                Learn about the 25 prophets mentioned in the Quran and explore
                their stories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LANGUAGES ================= */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-7 md:p-10">
            <div className="flex flex-col md:flex-row gap-5 items-start">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Languages size={24} />
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary">
                  Accessible for Knowledge Seekers
                </h2>

                <p className="mt-3 text-base-content/70 leading-7">
                  Furqan Life aims to provide Islamic content in a simple and
                  understandable format. Multiple language and translation
                  options help users explore Quranic knowledge according to
                  their needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CLOSING ================= */}
      <section className="px-4 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center">
            <Heart size={22} />
          </div>

          <p className="mt-5 text-lg leading-8 text-base-content/70 italic">
            May Allah help those with good intentions, increase us in beneficial
            knowledge, and guide us to the righteous path.
          </p>

          <p className="mt-4 font-semibold text-primary">— Furqan Life</p>
        </div>
      </section>
    </main>
  );
}

export default About;
