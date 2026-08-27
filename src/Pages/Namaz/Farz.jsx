import {
  Clock,
  BookOpen,
  Sunrise,
  Sun,
  Sunset,
  Moon,
  ArrowRight,
} from "lucide-react";
import Divider from "../../Components/Divider.jsx";

export default function Farz() {
  const farzNamazData = [
    {
      namaz: "Fajr",
      icon: Sunrise,
      description:
        "Starts at true dawn and ends when the first light of dawn appears.",
      farz: 2,
      beforeSunnah: 2,
      afterSunnah: 0,
    },
    {
      namaz: "Dhuhr",
      icon: Sun,
      description:
        "Starts when the sun passes its highest point and ends when the shadow of an object equals its height.",
      farz: 4,
      beforeSunnah: 4,
      afterSunnah: 2,
    },
    {
      namaz: "Asr",
      icon: Sun,
      description: "Starts after Dhuhr and ends just before sunset.",
      farz: 4,
      beforeSunnah: 0,
      afterSunnah: 0,
    },
    {
      namaz: "Maghrib",
      icon: Sunset,
      description:
        "Starts immediately after sunset and ends when the twilight disappears.",
      farz: 3,
      beforeSunnah: 0,
      afterSunnah: 2,
    },
    {
      namaz: "Isha",
      icon: Moon,
      description:
        "Starts after Maghrib and is preferred before one-third of the night, but remains valid until Fajr.",
      farz: 4,
      beforeSunnah: 0,
      afterSunnah: 2,
    },
  ];

  return (
    <main className="min-h-screen bg-base-100">
      {/* ================= HEADER ================= */}
      <section className="px-4 py-12 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <BookOpen size={17} />
            Salah Guide
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Five Daily Prayers
          </h1>

          <p className="mt-4 text-base-content/70 leading-7">
            Learn about the five obligatory prayers, their prayer times, Farz
            Rak'ahs, and associated Sunnah prayers.
          </p>
        </div>
      </section>

      <Divider />

      {/* ================= SUMMARY ================= */}
      <section className="px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {farzNamazData.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.namaz}
                  className="rounded-xl bg-base-200 p-4 text-center hover:bg-primary/10 transition"
                >
                  <Icon className="mx-auto mb-2 text-primary" size={24} />

                  <h2 className="font-semibold">{item.namaz}</h2>

                  <p className="text-sm text-base-content/60 mt-1">
                    {item.farz} Farz
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= DESKTOP TABLE ================= */}
      <section className="hidden md:block px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl border border-base-300 shadow-sm">
            <table className="table w-full">
              <thead>
                <tr className="bg-primary text-primary-content">
                  <th className="text-base">Prayer</th>

                  <th className="text-base">Prayer Time</th>

                  <th className="text-center text-base">Farz</th>

                  <th className="text-center text-base">Sunnah Before</th>

                  <th className="text-center text-base">Sunnah After</th>
                </tr>
              </thead>

              <tbody>
                {farzNamazData.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <tr key={item.namaz} className="hover:bg-primary/5">
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                            <Icon size={20} />
                          </div>

                          <span className="font-semibold">{item.namaz}</span>
                        </div>
                      </td>

                      <td className="max-w-md text-base-content/70">
                        {item.description}
                      </td>

                      <td className="text-center">
                        <span className="badge badge-primary badge-lg">
                          {item.farz}
                        </span>
                      </td>

                      <td className="text-center">
                        {item.beforeSunnah > 0 ? (
                          <span className="badge badge-success badge-lg">
                            {item.beforeSunnah}
                          </span>
                        ) : (
                          <span className="text-base-content/40">—</span>
                        )}
                      </td>

                      <td className="text-center">
                        {item.afterSunnah > 0 ? (
                          <span className="badge badge-success badge-lg">
                            {item.afterSunnah}
                          </span>
                        ) : (
                          <span className="text-base-content/40">—</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= MOBILE CARDS ================= */}
      <section className="md:hidden px-4 py-8">
        <div className="space-y-5">
          {farzNamazData.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.namaz}
                className="rounded-2xl border border-base-300 bg-base-100 shadow-sm p-5"
              >
                {/* Card Header */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon size={24} />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold">{item.namaz}</h2>

                    <p className="text-sm text-primary">
                      {item.farz} Farz Rak'ah
                    </p>
                  </div>
                </div>

                {/* Time */}
                <div className="mt-5 flex gap-3">
                  <Clock size={19} className="text-primary mt-1 shrink-0" />

                  <p className="text-sm leading-6 text-base-content/70">
                    {item.description}
                  </p>
                </div>

                {/* Rak'ah */}
                <div className="grid grid-cols-3 gap-2 mt-5">
                  <div className="rounded-lg bg-primary/10 p-3 text-center">
                    <p className="text-xs text-base-content/60">Farz</p>

                    <p className="text-lg font-bold text-primary">
                      {item.farz}
                    </p>
                  </div>

                  <div className="rounded-lg bg-success/10 p-3 text-center">
                    <p className="text-xs text-base-content/60">Before</p>

                    <p className="text-lg font-bold text-success">
                      {item.beforeSunnah || "—"}
                    </p>
                  </div>

                  <div className="rounded-lg bg-success/10 p-3 text-center">
                    <p className="text-xs text-base-content/60">After</p>

                    <p className="text-lg font-bold text-success">
                      {item.afterSunnah || "—"}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ================= FOOTER NOTE ================= */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-primary/5 border border-primary/20 p-6 md:p-8 text-center">
            <h2 className="text-xl font-bold text-primary">
              Make Salah a part of your daily journey
            </h2>

            <p className="mt-3 text-base-content/70 leading-7">
              Prayer provides an opportunity to pause, remember Allah, and
              reconnect throughout the day.
            </p>

            <a href="/quran" className="btn btn-primary mt-5 rounded-xl">
              Read Quran
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
