import { useState } from "react";

export default function OtherNamaz() {
  const [openPrayer, setOpenPrayer] = useState(null);

  const prayers = [
    {
      id: 1,
      name: "Janazah Salah",
      arabic: "صلاة الجنازة",
      category: "Funeral Prayer",
      time: "After the death of a Muslim and after the body has been prepared for burial, at a permissible time.",
      rakats: "No ruku or sujood. It consists of four Takbirs.",
      purpose:
        "To ask Allah to forgive and have mercy upon the deceased Muslim.",
      procedure: [
        "Make wudu and face the Qiblah.",
        "Stand in rows behind the Imam.",
        "Make the intention for Janazah prayer.",
        "The Imam says the first Takbir.",
        "After the first Takbir, recite Al-Fatihah according to the practice you follow.",
        "The second Takbir is followed by sending blessings upon Prophet Muhammad ﷺ.",
        "The third Takbir is followed by making dua for the deceased.",
        "The fourth Takbir is followed by salam.",
        "There is no ruku or sujood in Janazah Salah.",
      ],
      notes:
        "The detailed wording and placement of recitations can differ among schools of Islamic jurisprudence.",
    },

    {
      id: 2,
      name: "Salat al-Khusuf",
      arabic: "صلاة الخسوف",
      category: "Lunar Eclipse",
      time: "During a lunar eclipse, from the beginning of the eclipse until it ends.",
      rakats: "2 rak'ahs. The detailed method differs among scholars.",
      purpose:
        "To turn to Allah with prayer, remembrance and supplication during an eclipse.",
      procedure: [
        "Make wudu and prepare for prayer.",
        "Intend to pray the eclipse prayer.",
        "Pray two rak'ahs according to the eclipse-prayer method followed by your madhhab.",
        "Recite Qur'an and make dua.",
        "Continue worship until the eclipse ends.",
        "Give charity and increase remembrance of Allah.",
      ],
      notes:
        "The exact structure of the two rak'ahs differs in the scholarly descriptions of eclipse prayer.",
    },

    {
      id: 3,
      name: "Salat al-Kusuf",
      arabic: "صلاة الكسوف",
      category: "Solar Eclipse",
      time: "During a solar eclipse, from the beginning of the eclipse until it ends.",
      rakats: "2 rak'ahs with a special method described in authentic hadith.",
      purpose:
        "To remember Allah, pray and seek His mercy during a solar eclipse.",
      procedure: [
        "Make wudu.",
        "Face the Qiblah.",
        "Intend to pray the eclipse prayer.",
        "Pray the eclipse prayer according to the established Sunnah method.",
        "Make lengthy recitation, ruku and supplication according to the method being followed.",
        "Continue prayer, dua and remembrance until the eclipse ends.",
      ],
      notes:
        "The eclipse prayer has a special form and differs from ordinary two-rak'ah voluntary prayer.",
    },

    {
      id: 4,
      name: "Salat al-Qada",
      arabic: "صلاة القضاء",
      category: "Missed Prayer",
      time: "When an obligatory prayer has been missed, it should be made up according to the applicable fiqh ruling.",
      rakats:
        "The number of rak'ahs corresponds to the missed obligatory prayer.",
      purpose: "To make up an obligatory prayer that was missed.",
      procedure: [
        "Determine which obligatory prayer was missed.",
        "Make wudu.",
        "Make the intention to make up the missed prayer.",
        "Pray the same number of rak'ahs as the original obligatory prayer.",
        "Perform the prayer normally.",
        "If several prayers were missed, follow the appropriate order and ruling according to your madhhab.",
      ],
      notes:
        "The rules concerning intentionally missed prayers, forgetfulness, order and the number of prayers to make up require detailed fiqh guidance.",
    },

    {
      id: 5,
      name: "Salat al-Qasr",
      arabic: "صلاة القصر",
      category: "Traveller's Prayer",
      time: "During qualifying travel.",
      rakats:
        "Four-rak'ah obligatory prayers are shortened to two rak'ahs for a qualifying traveller.",
      purpose:
        "To provide the concession of shortening certain obligatory prayers during travel.",
      procedure: [
        "Determine whether your journey qualifies as travel according to your madhhab.",
        "For Dhuhr, Asr and Isha, pray two obligatory rak'ahs instead of four.",
        "Fajr remains two rak'ahs.",
        "Maghrib remains three rak'ahs.",
        "Follow the rules of your madhhab regarding combining prayers.",
      ],
      notes:
        "The distance, duration of travel, residence period and rules for combining prayers differ among schools of jurisprudence.",
    },

    {
      id: 6,
      name: "Salat al-Istisqa",
      arabic: "صلاة الاستسقاء",
      category: "Prayer for Rain",
      time: "When a community is affected by drought or lack of rain.",
      rakats: "Generally 2 rak'ahs.",
      purpose: "To ask Allah for beneficial rain and relief from drought.",
      procedure: [
        "The community gathers for the prayer.",
        "The prayer is performed according to the established method.",
        "The Imam gives a sermon and encourages repentance and charity.",
        "The people sincerely ask Allah for rain.",
        "Increase istighfar, dua and acts of charity.",
      ],
      notes:
        "The detailed procedure and sermon format can vary according to scholarly interpretation.",
    },

    {
      id: 7,
      name: "Salat al-Tawbah",
      arabic: "صلاة التوبة",
      category: "Repentance",
      time: "When a person sincerely repents from a sin, outside prohibited prayer times.",
      rakats: "2 rak'ahs.",
      purpose: "To seek Allah's forgiveness and sincerely repent.",
      procedure: [
        "Stop the sin.",
        "Feel sincere regret.",
        "Perform wudu.",
        "Pray two rak'ahs.",
        "Ask Allah sincerely for forgiveness.",
        "Resolve not to return to the sin.",
        "If another person's rights were violated, return their rights or seek appropriate forgiveness.",
      ],
      notes:
        "Sincere repentance involves turning back to Allah and correcting wrongdoing.",
    },

    {
      id: 8,
      name: "Salat al-Istikhara",
      arabic: "صلاة الاستخارة",
      category: "Seeking Guidance",
      time: "When seeking guidance concerning a permissible decision.",
      rakats: "2 rak'ahs.",
      purpose: "To ask Allah to guide you toward what is good.",
      procedure: [
        "Make wudu.",
        "Think about the permissible matter concerning which you seek guidance.",
        "Pray two rak'ahs of voluntary prayer.",
        "After the prayer, make the Istikhara dua.",
        "Ask Allah to facilitate what is good and turn away what is harmful.",
        "Proceed with the matter while relying upon Allah.",
      ],
      notes:
        "Istikhara is not necessarily about receiving a dream or supernatural sign. It is a supplication seeking Allah's guidance.",
    },

    {
      id: 9,
      name: "Salat al-Tahiyyatul Masjid",
      arabic: "تحية المسجد",
      category: "Greeting the Mosque",
      time: "When entering the mosque before sitting, subject to the rules concerning prohibited times.",
      rakats: "2 rak'ahs.",
      purpose: "To pray before sitting when entering the mosque.",
      procedure: [
        "Enter the mosque respectfully.",
        "Make wudu if necessary.",
        "Pray two rak'ahs before sitting.",
        "Then sit and engage in worship.",
      ],
      notes:
        "If the obligatory congregation is starting, join the congregation rather than delaying it for a separate prayer.",
    },
  ];

  return (
    <div className="min-h-screen bg-base-200 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-4xl mb-3">🕌</div>

          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Special & Other Salah
          </h1>

          <p className="mt-3 max-w-3xl mx-auto text-base-content/70">
            Information about special prayers and situations such as Janazah,
            eclipses, Qada, Qasr and Istisqa.
          </p>
        </div>

        <div className="alert alert-warning mb-8">
          <div>
            <h3 className="font-bold">Important Fiqh Note</h3>

            <p className="text-sm">
              Some details of these prayers differ between Islamic schools of
              jurisprudence. This page is intended as an educational overview
              and should not replace qualified scholarly guidance.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {prayers.map((prayer) => {
            const isOpen = openPrayer === prayer.id;

            return (
              <div
                key={prayer.id}
                className="card bg-base-100 shadow-md border border-base-300"
              >
                <button
                  onClick={() => setOpenPrayer(isOpen ? null : prayer.id)}
                  className="w-full p-5 flex items-center justify-between text-left hover:bg-base-200 transition rounded-xl"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-xl font-bold text-primary">
                        {prayer.name}
                      </h2>

                      <span className="badge badge-outline">
                        {prayer.category}
                      </span>
                    </div>

                    <p className="text-lg mt-1 opacity-70">{prayer.arabic}</p>
                  </div>

                  <span
                    className={`text-2xl transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ↓
                  </span>
                </button>

                <div className="px-5 pb-5">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-base-200 rounded-xl p-4">
                      <h3 className="font-bold text-primary">When?</h3>

                      <p className="text-sm mt-2">{prayer.time}</p>
                    </div>

                    <div className="bg-base-200 rounded-xl p-4">
                      <h3 className="font-bold text-primary">Rak'ahs</h3>

                      <p className="text-sm mt-2">{prayer.rakats}</p>
                    </div>

                    <div className="bg-base-200 rounded-xl p-4">
                      <h3 className="font-bold text-primary">Purpose</h3>

                      <p className="text-sm mt-2">{prayer.purpose}</p>
                    </div>
                  </div>
                </div>

                {isOpen && (
                  <div className="border-t border-base-300 p-5">
                    <h3 className="text-xl font-bold text-primary mb-4">
                      How to Offer
                    </h3>

                    <ol className="space-y-3">
                      {prayer.procedure.map((step, index) => (
                        <li key={index} className="flex gap-3">
                          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-content flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </span>

                          <p className="leading-relaxed">{step}</p>
                        </li>
                      ))}
                    </ol>

                    <div className="alert alert-info mt-6">
                      <div>
                        <h3 className="font-bold">Note</h3>

                        <p className="text-sm">{prayer.notes}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
