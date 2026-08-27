import {
  Heart,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Sparkles,
} from "lucide-react";

export default function NamazHome() {
  return (
    <main className="min-h-screen bg-base-100">
      {/* ================= HERO ================= */}
      <section className="px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles size={16} />
              The Importance of Salah
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              Namaz — A Connection With Allah
            </h1>

            <p className="text-base md:text-lg text-base-content/70 leading-8">
              There are five pillars of Islam, and Namaz is one of them. Namaz
              is a connection between Allah, the Creator, and the servant.
            </p>

            <p className="mt-4 text-base-content/70 leading-7">
              Muslims are obligated to perform five Farz prayers every day,
              creating a regular connection with Allah throughout the day.
            </p>
          </div>
        </div>
      </section>

      {/* ================= DIVIDER ================= */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      {/* ================= TWO CARDS ================= */}
      <section className="px-4 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Importance */}
          <div className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-lg transition duration-300">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Heart size={22} />
                </div>

                <h2 className="card-title text-xl">Importance of Namaz</h2>
              </div>

              <ol className="list-decimal list-inside space-y-4 text-base-content/75">
                <li>Connection between Creator and creation.</li>
                <li>Brings peace and tranquility.</li>
                <li>A key to Jannah.</li>
                <li>A means of seeking repentance.</li>
                <li>A source of rewards from Allah.</li>
              </ol>
            </div>
          </div>

          {/* Mandatory */}
          <div className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-lg transition duration-300">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                  <CheckCircle size={22} />
                </div>

                <h2 className="card-title text-xl">Essentials of Namaz</h2>
              </div>

              <ol className="list-decimal list-inside space-y-3 text-base-content/75">
                <li>Wudu — essential purity and cleanliness.</li>
                <li>Intention (Niyyah).</li>
                <li>Facing the Qibla.</li>
                <li>Performing the prayer within its proper time.</li>
                <li>Recitation of the Quran.</li>
                <li>Ruku.</li>
                <li>Sajdah.</li>
                <li>Final sitting.</li>
                <li>Maintaining the correct order.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QURAN VERSE ================= */}
      <section className="px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-primary/5 border border-primary/20 p-8 md:p-12 text-center">
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/10" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-primary/10" />

            <div className="relative">
              <Star className="mx-auto mb-5 text-yellow-500" size={28} />

              <blockquote className="text-xl md:text-2xl font-medium leading-9 text-base-content">
                “Indeed, prayer prohibits immorality and wrongdoing.”
              </blockquote>

              <p className="mt-5 text-sm font-semibold text-primary">
                Surah Al-Ankabut — 29:45
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FIVE PRAYERS CTA ================= */}
      <section className="px-4 py-12 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl bg-primary text-primary-content p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-white/15 flex items-center justify-center">
                <Clock size={24} />
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold">
                  The Five Daily Prayers
                </h2>

                <p className="mt-2 opacity-80">
                  Learn about the five Farz prayers and their Sunnah prayers.
                </p>
              </div>
            </div>

            <a
              href="/farz"
              className="btn bg-white text-primary hover:bg-white/90 border-0 rounded-xl px-6"
            >
              Explore Namaz
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
