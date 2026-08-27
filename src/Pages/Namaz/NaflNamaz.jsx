import { useState } from "react";
import { useNavigate } from "react-router";

export default function NaflNamaz() {
  const [openPrayer, setOpenPrayer] = useState(null);
  const navigate = useNavigate();

  const naflNamaz = [
    {
      id: 1,
      name: "Tahajjud",
      arabic: "صلاة التهجد",
      time: "After Isha and sleeping, preferably in the last third of the night until Fajr.",
      rakats: "Minimum 2 rak'ahs. It may be prayed in sets of 2.",
      bestTime: "The last third of the night is especially virtuous.",
      procedure: [
        "Make wudu and have the intention to pray Tahajjud.",
        "Pray 2 rak'ahs at a time.",
        "In each rak'ah, recite Surah Al-Fatihah followed by another portion of the Qur'an.",
        "Perform ruku, sujood and the remaining actions normally.",
        "Complete the prayer with salam.",
        "You may pray additional sets of 2 rak'ahs according to your ability.",
      ],
      notes:
        "Tahajjud is a voluntary night prayer. It is especially encouraged during the last part of the night.",
      link: "tahajjud-namaz",
    },

    {
      id: 2,
      name: "Ishraq",
      arabic: "صلاة الإشراق",
      time: "After sunrise, once the sun has risen sufficiently above the horizon.",
      rakats: "2 rak'ahs.",
      bestTime:
        "Approximately 15–20 minutes after sunrise, depending on local calculation.",
      procedure: [
        "Wait until the prohibited period immediately around sunrise has ended.",
        "Make wudu and intend to pray Ishraq.",
        "Pray 2 rak'ahs like any other voluntary prayer.",
        "Recite Al-Fatihah and another portion of the Qur'an in each rak'ah.",
        "Complete the prayer with salam.",
      ],
      notes:
        "Ishraq is commonly understood as the early Duha prayer. Scholars differ on whether Ishraq and Duha should be treated as separate prayers or as the same voluntary prayer at different times.",
      link: "ishraq-namaz",
    },

    {
      id: 3,
      name: "Duha / Chasht",
      arabic: "صلاة الضحى",
      time: "After the sun has risen sufficiently until shortly before Zawal (when the sun reaches its highest point).",
      rakats:
        "Minimum 2 rak'ahs. More may be prayed according to scholarly opinions.",
      bestTime:
        "Later in the morning, before midday, is considered especially virtuous.",
      procedure: [
        "Make wudu and intend to pray Duha.",
        "Pray at least 2 rak'ahs.",
        "Pray in sets of 2 rak'ahs.",
        "Recite Al-Fatihah and another portion of the Qur'an in each rak'ah.",
        "Perform the prayer normally and finish with salam.",
      ],
      notes:
        "Duha is a voluntary daytime prayer and should not be prayed during the prohibited period around Zawal.",
      link: "/#",
    },

    {
      id: 4,
      name: "Awwabin",
      arabic: "صلاة الأوابين",
      time: "After Maghrib until Isha.",
      rakats:
        "The term Awwabin is used differently by scholars. Some use it for the Duha prayer, while others use it for additional voluntary prayers after Maghrib.",
      bestTime: "After Maghrib and before Isha.",
      procedure: [
        "Pray the obligatory Maghrib prayer first.",
        "Pray the regular Sunnah after Maghrib if you follow it.",
        "You may then offer additional voluntary rak'ahs.",
        "Voluntary prayers are generally prayed two rak'ahs at a time.",
        "Complete each two-rak'ah prayer with salam.",
      ],
      notes:
        "There are different scholarly usages of the term Awwabin. For this reason, this page does not present one particular number of rak'ahs as universally established.",
      link: "",
    },

    {
      id: 5,
      name: "Tahiyyatul Masjid",
      arabic: "تحية المسجد",
      time: "When entering a masjid, before sitting, outside prohibited prayer times.",
      rakats: "2 rak'ahs.",
      bestTime: "Immediately after entering the masjid before sitting down.",
      procedure: [
        "Enter the masjid respectfully.",
        "Make wudu if needed.",
        "Intend to pray Tahiyyatul Masjid.",
        "Pray 2 rak'ahs.",
        "Complete the prayer with salam.",
        "Then sit and engage in worship, Qur'an recitation or other beneficial activity.",
      ],
      notes:
        "If you enter the masjid when the congregational prayer is beginning, join the congregation rather than praying a separate prayer.",
      link: "",
    },

    {
      id: 6,
      name: "Salat al-Tawbah",
      arabic: "صلاة التوبة",
      time: "Whenever a person sincerely repents, outside prohibited prayer times.",
      rakats: "2 rak'ahs.",
      bestTime: "As soon as possible after sincere repentance.",
      procedure: [
        "Make sincere tawbah to Allah.",
        "Perform wudu.",
        "Intend to pray 2 rak'ahs of repentance.",
        "Pray 2 rak'ahs normally.",
        "After the prayer, sincerely ask Allah for forgiveness.",
        "Leave the sin and resolve not to return to it.",
      ],
      notes:
        "Sincere repentance includes regretting the sin, stopping it, seeking Allah's forgiveness and resolving not to return to it.",
      link: "",
    },

    {
      id: 7,
      name: "Salat al-Istikhara",
      arabic: "صلاة الاستخارة",
      time: "It may be prayed when seeking Allah's guidance regarding a permissible decision, outside prohibited prayer times.",
      rakats: "2 rak'ahs.",
      bestTime: "Any suitable time outside prohibited prayer times.",
      procedure: [
        "Make wudu.",
        "Have the intention to seek Allah's guidance.",
        "Pray 2 rak'ahs of voluntary prayer.",
        "After completing the prayer, recite the Istikhara supplication.",
        "Ask Allah to make the matter easy if it is good and turn it away if it is harmful.",
        "Then proceed with the matter while relying upon Allah.",
      ],
      notes:
        "Istikhara is not a method of predicting the future. It is a supplication asking Allah to guide you toward what is best.",
      link: "istikhara-namaz",
    },

    {
      id: 8,
      name: "Salat al-Hajah",
      arabic: "صلاة الحاجة",
      time: "For a need or difficulty, when voluntary prayer is permissible.",
      rakats:
        "The details of Salat al-Hajah are subject to scholarly discussion.",
      bestTime: "A permissible time for voluntary prayer.",
      procedure: [
        "Make wudu.",
        "Pray voluntary prayer according to the established method.",
        "After prayer, make sincere dua to Allah for your need.",
        "Ask Allah for what is good and beneficial.",
      ],
      notes:
        "There is scholarly disagreement concerning the authenticity of specific narrations describing a distinct Salat al-Hajah. It is safer to present this as a matter of scholarly discussion rather than a universally established Sunnah.",
      link: "",
    },

    {
      id: 9,
      name: "Tahajjud / Qiyam al-Layl",
      arabic: "قيام الليل",
      time: "From after Isha until Fajr.",
      rakats: "2 or more rak'ahs, prayed in sets of 2.",
      bestTime: "The final third of the night.",
      procedure: [
        "Sleep after Isha if intending specifically for Tahajjud.",
        "Wake before Fajr.",
        "Make wudu.",
        "Pray 2 rak'ahs at a time.",
        "Recite Qur'an and perform the prayer calmly.",
        "Continue according to your ability.",
        "If praying Witr, it is commonly offered as the final prayer of the night.",
      ],
      notes:
        "Qiyam al-Layl is the broader term for voluntary night worship. Tahajjud is commonly used for night prayer after sleeping.",
      link: "",
    },

    {
      id: 10,
      name: "Salat al-Wudu",
      arabic: "صلاة الوضوء",
      time: "After making wudu, outside prohibited prayer times.",
      rakats: "2 rak'ahs.",
      bestTime: "After completing wudu.",
      procedure: [
        "Complete your wudu.",
        "Intend to pray 2 voluntary rak'ahs.",
        "Pray normally.",
        "Finish with salam.",
      ],
      notes:
        "This is associated with the virtue of praying after performing wudu.",
      link: "",
    },

    {
      id: 11,
      name: "Nafl after Isha",
      arabic: "النوافل بعد العشاء",
      time: "After Isha and before Fajr.",
      rakats: "2 or more voluntary rak'ahs.",
      bestTime: "During the night, especially the later part.",
      procedure: [
        "After Isha, make the intention for voluntary prayer.",
        "Pray 2 rak'ahs at a time.",
        "Recite Al-Fatihah and another portion of the Qur'an.",
        "Complete each prayer with salam.",
        "You may finish the night with Witr according to your practice.",
      ],
      notes:
        "The exact number of voluntary rak'ahs is not fixed in the same way as the obligatory prayers.",
      link: "",
    },

    {
      id: 12,
      name: "Nafl after Maghrib",
      arabic: "النوافل بعد المغرب",
      time: "After Maghrib and before Isha.",
      rakats: "2 or more voluntary rak'ahs.",
      bestTime: "After the regular Sunnah prayer following Maghrib.",
      procedure: [
        "Pray the 3 obligatory rak'ahs of Maghrib.",
        "Pray the regular Sunnah after Maghrib.",
        "Additional voluntary rak'ahs may then be offered.",
        "Pray voluntary salah two rak'ahs at a time.",
        "Finish each prayer with salam.",
      ],
      notes:
        "Additional voluntary prayers should not be confused with the established Sunnah prayers connected to Maghrib.",
      link: "",
    },
  ];

  const togglePrayer = (id) => {
    setOpenPrayer(openPrayer === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-base-200 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <span className="text-3xl">🕌</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Nafl Namaz
          </h1>

          <p className="mt-3 text-base-content/70 max-w-2xl mx-auto">
            A guide to voluntary prayers, their times, rak'ahs and basic
            procedures.
          </p>
        </div>

        {/* Important Notice */}
        <div className="alert alert-info mb-8">
          <div>
            <h3 className="font-bold">Important</h3>
            <p className="text-sm">
              Nafl prayers are voluntary. Some prayer names, rak'ah counts,
              timings and classifications have differences among Islamic
              scholars and schools of jurisprudence. This page provides a
              general educational overview.
            </p>
          </div>
        </div>

        {/* Prayer Cards */}
        <div className="space-y-4">
          {naflNamaz.map((prayer) => {
            const isOpen = openPrayer === prayer.id;

            return (
              <div
                key={prayer.id}
                className="card bg-base-100 shadow-md border border-base-300"
              >
                {/* Card Header */}
                <button
                  onClick={() => togglePrayer(prayer.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-base-200 transition rounded-xl"
                >
                  <div>
                    <h2 className="text-xl font-bold text-primary">
                      {prayer.id}. {prayer.name}
                    </h2>

                    <p className="text-lg mt-1 opacity-80">{prayer.arabic}</p>
                  </div>

                  <span
                    className={`text-2xl transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ↓
                  </span>
                </button>

                {/* Basic Information */}
                <div className="px-5 pb-5">
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-base-200 rounded-lg p-4">
                      <p className="text-sm font-semibold text-primary">Time</p>
                      <p className="text-sm mt-1">{prayer.time}</p>
                    </div>

                    <div className="bg-base-200 rounded-lg p-4">
                      <p className="text-sm font-semibold text-primary">
                        Rak'ahs
                      </p>
                      <p className="text-sm mt-1">{prayer.rakats}</p>
                    </div>

                    <div className="bg-base-200 rounded-lg p-4">
                      <p className="text-sm font-semibold text-primary">
                        Best Time
                      </p>
                      <p className="text-sm mt-1">{prayer.bestTime}</p>
                    </div>
                  </div>
                </div>

                {/* Expanded Procedure */}
                {isOpen && (
                  <div className="border-t border-base-300 p-5 space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-3">
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
                    </div>

                    <div className="alert alert-warning">
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

        {/* General Procedure */}
        <div className="card bg-base-100 shadow-md mt-8">
          <div className="card-body">
            <h2 className="card-title text-primary">
              General Procedure for Nafl Salah
            </h2>

            <div className="space-y-3 mt-3">
              <p>1. Perform wudu and ensure cleanliness.</p>
              <p>2. Wear clean and appropriate clothing.</p>
              <p>3. Face the Qiblah.</p>
              <p>4. Make the intention for the particular voluntary prayer.</p>
              <p>5. Begin the prayer with Takbir.</p>
              <p>6. Recite Al-Fatihah and additional Qur'an recitation.</p>
              <p>7. Perform ruku and sujood correctly.</p>
              <p>8. Complete the required number of rak'ahs.</p>
              <p>9. End the prayer with salam.</p>
              <p>10. Make dua to Allah.</p>
            </div>
          </div>
        </div>

        {/* Prohibited Times */}
        <div className="card bg-base-100 shadow-md mt-6">
          <div className="card-body">
            <h2 className="card-title text-error">
              Be Careful About Prayer Times
            </h2>

            <p className="mt-2">
              Voluntary prayers should generally be avoided during the
              prohibited prayer periods established in Islamic jurisprudence,
              including the period around sunrise, when the sun is at its
              highest point around Zawal, and around sunset.
            </p>

            <p className="mt-3 text-sm opacity-70">
              Exact rulings can differ depending on the prayer and madhhab.
              Consult a qualified scholar for detailed fiqh questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
