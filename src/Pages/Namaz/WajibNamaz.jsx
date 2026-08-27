import { useState } from "react";
import { useNavigate } from "react-router";

export default function WajibNamaz() {
  const [openPrayer, setOpenPrayer] = useState(null);
  const navigate = useNavigate();

  const wajibPrayers = [
    {
      id: 1,
      name: "Witr",
      arabic: "صلاة الوتر",
      classification: "Wajib according to the Hanafi school",
      time: "After Isha until the beginning of Fajr.",
      link: "watib-namaz",
      rakats: "3 rak'ahs according to the Hanafi method.",
      purpose:
        "A highly emphasized night prayer and the final prayer of the night according to the common practice.",
      procedure: [
        "Pray Isha first.",
        "Make the intention for Witr.",
        "According to the Hanafi method, pray three rak'ahs together.",
        "In the third rak'ah, recite Al-Fatihah followed by another portion of the Qur'an.",
        "Then say Takbir and raise the hands according to the Hanafi method.",
        "Recite Dua al-Qunut.",
        "Complete the ruku, sujood and remaining parts of the prayer.",
        "Complete the prayer with salam.",
      ],
      notes:
        "The classification and detailed method of Witr differ among schools of jurisprudence. The three-rak'ah Witr described here follows the Hanafi method.",
    },

    {
      id: 2,
      name: "Eid al-Fitr Salah",
      arabic: "صلاة عيد الفطر",
      classification: "Classification differs among scholars",
      time: "After sunrise when the prayer time begins until before Zawal.",
      link: "eid-namaz",
      rakats:
        "2 rak'ahs with additional Takbirs according to the school being followed.",
      purpose: "The special congregational prayer marking the end of Ramadan.",
      procedure: [
        "Perform ghusl or ensure cleanliness and make wudu.",
        "Wear clean and appropriate clothing.",
        "Go to the Eid prayer place or mosque.",
        "Make the intention for Eid prayer.",
        "Follow the Imam's Takbirs and movements.",
        "Pray two rak'ahs according to the method of your madhhab.",
        "Listen to the Eid khutbah after the prayer.",
        "Increase Takbir, praise and remembrance of Allah.",
      ],
      notes:
        "The number and placement of additional Takbirs differ among the schools of jurisprudence.",
    },

    {
      id: 3,
      name: "Eid al-Adha Salah",
      arabic: "صلاة عيد الأضحى",
      classification: "Classification differs among scholars",
      time: "After sunrise when the prayer time begins until before Zawal.",
      link: "eid-namaz",
      rakats:
        "2 rak'ahs with additional Takbirs according to the school being followed.",
      purpose: "The special congregational prayer on Eid al-Adha.",
      procedure: [
        "Perform ghusl or make wudu.",
        "Wear clean clothing.",
        "Go to the Eid prayer.",
        "Make the intention for Eid prayer.",
        "Follow the Imam's additional Takbirs.",
        "Complete the two-rak'ah Eid prayer.",
        "Listen to the khutbah.",
        "Increase Takbir and remembrance of Allah.",
      ],
      notes:
        "The detailed number and timing of additional Takbirs differ among schools.",
    },
  ];

  return (
    <div className="min-h-screen bg-base-200 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-4xl mb-3">🤲</div>

          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Wajib Salah
          </h1>

          <p className="max-w-3xl mx-auto mt-3 text-base-content/70">
            A guide to prayers classified as Wajib in some schools of Islamic
            jurisprudence.
          </p>
        </div>

        {/* Fiqh Notice */}
        <div className="alert alert-warning mb-8">
          <div>
            <h3 className="font-bold">Important Fiqh Note</h3>

            <p className="text-sm">
              The classification of some prayers as Wajib, Sunnah Mu'akkadah or
              another category differs between schools of Islamic jurisprudence.
              The information below identifies those differences rather than
              presenting one school as universal.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="space-y-4">
          {wajibPrayers.map((prayer) => {
            const isOpen = openPrayer === prayer.id;

            return (
              <div
                key={prayer.id}
                className="card bg-base-100 shadow-md border border-base-300"
                onClick={() => navigate(`/${prayer.link}`)}
              >
                {/* Header */}
                <button
                  onClick={() => setOpenPrayer(isOpen ? null : prayer.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-base-200 transition rounded-xl"
                >
                  <div>
                    <h2 className="text-xl font-bold text-primary">
                      {prayer.name}
                    </h2>

                    <p className="text-lg opacity-70 mt-1">{prayer.arabic}</p>

                    <span className="badge badge-warning mt-2">
                      {prayer.classification}
                    </span>
                  </div>

                  <span
                    className={`text-2xl transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ↓
                  </span>
                </button>

                {/* Basic Info */}
                <div className="px-5 pb-5">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-base-200 rounded-xl p-4">
                      <h3 className="font-bold text-primary">Time</h3>

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

                {/* Procedure */}
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

        {/* Wajib vs Farz */}
        <div className="card bg-base-100 shadow-md mt-8">
          <div className="card-body">
            <h2 className="card-title text-primary">Farz vs Wajib</h2>

            <div className="overflow-x-auto mt-3">
              <table className="table table-zebra">
                <thead>
                  <tr>
                    <th></th>
                    <th>Farz</th>
                    <th>Wajib</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th>Meaning</th>
                    <td>An obligatory act established with strong evidence.</td>

                    <td>
                      A legally required act in schools that distinguish Wajib
                      from Farz.
                    </td>
                  </tr>

                  <tr>
                    <th>Example</th>
                    <td>The five daily obligatory prayers.</td>

                    <td>Witr according to the Hanafi school.</td>
                  </tr>

                  <tr>
                    <th>Fiqh</th>
                    <td>Obligatory.</td>

                    <td>
                      The terminology and legal consequences vary by madhhab.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
