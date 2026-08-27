import { useNavigate } from "react-router";

function Prophets() {
  const navigate = useNavigate();

  const prophets = [
    {
      id: 1,
      name: "Adam",
      arabic: "آدم",
      description: "The first human and first prophet.",
      surah: "Al-Baqarah, 2:30–39",
    },
    {
      id: 2,
      name: "Idris",
      arabic: "إدريس",
      description: "A prophet described as truthful and elevated in rank.",
      surah: "Maryam, 19:56–57",
    },
    {
      id: 3,
      name: "Nuh",
      arabic: "نوح",
      description:
        "Called his people to worship Allah and warned them against disbelief.",
      surah: "Nuh, 71:1–28",
    },
    {
      id: 4,
      name: "Hud",
      arabic: "هود",
      description: "Sent to the people of 'Ad.",
      surah: "Hud, 11:50–60",
    },
    {
      id: 5,
      name: "Salih",
      arabic: "صالح",
      description: "Sent to the people of Thamud.",
      surah: "Ash-Shu'ara, 26:141–159",
    },
    {
      id: 6,
      name: "Lut",
      arabic: "لوط",
      description:
        "Called his people toward righteousness and obedience to Allah.",
      surah: "Hud, 11:77–83",
    },
    {
      id: 7,
      name: "Ibrahim",
      arabic: "إبراهيم",
      description: "A great prophet known for his unwavering faith in Allah.",
      surah: "Al-Baqarah, 2:124–132",
    },
    {
      id: 8,
      name: "Ismail",
      arabic: "إسماعيل",
      description:
        "Known for his patience, truthfulness and obedience to Allah.",
      surah: "Maryam, 19:54–55",
    },
    {
      id: 9,
      name: "Ishaq",
      arabic: "إسحاق",
      description: "Son of Ibrahim and a prophet of Allah.",
      surah: "Hud, 11:71–73",
    },
    {
      id: 10,
      name: "Yaqub",
      arabic: "يعقوب",
      description: "Also known as Israel and the father of Yusuf.",
      surah: "Al-Baqarah, 2:132–133",
    },
    {
      id: 11,
      name: "Yusuf",
      arabic: "يوسف",
      description: "Known for his patience, forgiveness and trust in Allah.",
      surah: "Surah Yusuf, 12:1–111",
    },
    {
      id: 12,
      name: "Shuayb",
      arabic: "شعيب",
      description:
        "Called his people to worship Allah and deal honestly in business.",
      surah: "Hud, 11:84–95",
    },
    {
      id: 13,
      name: "Ayyub",
      arabic: "أيوب",
      description: "An example of patience and perseverance during hardship.",
      surah: "Al-Anbiya, 21:83–84",
    },
    {
      id: 14,
      name: "Dhul-Kifl",
      arabic: "ذو الكفل",
      description:
        "Mentioned among the patient and righteous servants of Allah.",
      surah: "Al-Anbiya, 21:85–86",
    },
    {
      id: 15,
      name: "Musa",
      arabic: "موسى",
      description:
        "A major prophet who was sent to Pharaoh and the Children of Israel.",
      surah: "Ta-Ha, 20:9–98",
    },
    {
      id: 16,
      name: "Harun",
      arabic: "هارون",
      description:
        "Brother of Musa and a prophet who assisted him in his mission.",
      surah: "Ta-Ha, 20:29–36",
    },
    {
      id: 17,
      name: "Dawud",
      arabic: "داود",
      description:
        "A prophet and king whom Allah blessed with wisdom and the Zabur.",
      surah: "Sad, 38:17–26",
    },
    {
      id: 18,
      name: "Sulaiman",
      arabic: "سليمان",
      description:
        "A prophet and king granted great wisdom and authority by Allah.",
      surah: "An-Naml, 27:15–44",
    },
    {
      id: 19,
      name: "Ilyas",
      arabic: "إلياس",
      description: "Called his people to worship Allah alone.",
      surah: "As-Saffat, 37:123–132",
    },
    {
      id: 20,
      name: "Alyasa",
      arabic: "اليسع",
      description:
        "Mentioned among the chosen and righteous servants of Allah.",
      surah: "Al-An'am, 6:86",
    },
    {
      id: 21,
      name: "Yunus",
      arabic: "يونس",
      description: "Known for his repentance and supplication to Allah.",
      surah: "Al-Anbiya, 21:87–88",
    },
    {
      id: 22,
      name: "Zakariya",
      arabic: "زكريا",
      description:
        "A prophet who sincerely prayed to Allah for a righteous child.",
      surah: "Maryam, 19:2–15",
    },
    {
      id: 23,
      name: "Yahya",
      arabic: "يحيى",
      description: "Son of Zakariya, described as righteous and pure.",
      surah: "Maryam, 19:7–15",
    },
    {
      id: 24,
      name: "Isa",
      arabic: "عيسى",
      description: "A prophet and messenger of Allah, son of Maryam.",
      surah: "Maryam, 19:16–36",
    },
    {
      id: 25,
      name: "Muhammad ﷺ",
      arabic: "محمد",
      description: "The final prophet and messenger of Allah.",
      surah: "Al-Ahzab, 33:40",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100 px-4 py-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <div className="text-4xl mb-3">☪️</div>

        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          Prophets Mentioned in the Quran
        </h1>

        <p className="mt-3 text-base-content/70 leading-relaxed">
          The Quran mentions the names of twenty-five prophets. Explore their
          names and some of the places where they are mentioned in the Quran.
        </p>
      </div>

      {/* Prophet Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {prophets.map((prophet) => (
          <div
            key={prophet.id}
            className="card bg-base-100 border border-base-300 shadow-sm
                                   hover:shadow-lg hover:-translate-y-1
                                   transition-all duration-300"
          >
            <div className="card-body">
              {/* Number */}
              <div className="flex justify-between items-start">
                <span className="badge badge-primary badge-outline">
                  {prophet.id}
                </span>

                <span className="text-2xl font-semibold" dir="rtl">
                  {prophet.arabic}
                </span>
              </div>

              {/* Name */}
              <h2 className="card-title text-xl text-primary mt-2">
                {prophet.name}
              </h2>

              {/* Description */}
              <p className="text-sm text-base-content/70 leading-relaxed">
                {prophet.description}
              </p>

              {/* Reference */}
              <div className="mt-3 p-2 rounded-lg bg-base-200">
                <p className="text-xs font-medium">Quran Reference</p>

                <p className="text-xs text-base-content/70 mt-1">
                  {prophet.surah}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Note */}
      <div className="max-w-4xl mx-auto mt-10">
        <div className="alert alert-success">
          <div>
            <h3 className="font-bold">The Prophets of Allah</h3>

            <p className="text-sm leading-relaxed">
              Muslims believe in all of Allah's prophets and messengers. We do
              not reject any of the prophets sent by Allah.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prophets;
