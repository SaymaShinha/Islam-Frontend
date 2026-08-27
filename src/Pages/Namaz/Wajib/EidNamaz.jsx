export default function EidNamaz() {
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="text-5xl mb-3">🌙</div>

        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          Eid Prayer (Salat al-Eid)
        </h1>

        <p className="mt-3 text-base-content/70 max-w-2xl mx-auto">
          A clear guide to Eid al-Fitr and Eid al-Adha prayer, including its
          time, rakahs, intention, takbirs, procedure, and important points.
        </p>
      </div>

      {/* Important Notice */}
      <div className="alert alert-success mb-6">
        <span>
          <strong>Eid prayer consists of 2 rakahs</strong> and is performed
          after sunrise and before noon. The khutbah is delivered after the
          prayer.
        </span>
      </div>

      {/* Basic Information */}
      <div className="card bg-base-100 border border-base-300 shadow-sm mb-6">
        <div className="card-body">
          <h2 className="card-title text-primary text-2xl">
            🕌 Basic Information
          </h2>

          <div className="overflow-x-auto mt-4">
            <table className="table table-zebra">
              <tbody>
                <tr>
                  <th>Prayer</th>
                  <td>Eid Prayer (Salat al-Eid)</td>
                </tr>

                <tr>
                  <th>Number of Rak‘ahs</th>
                  <td>2 Rak‘ahs</td>
                </tr>

                <tr>
                  <th>Time</th>
                  <td>
                    After the sun has risen sufficiently above the horizon until
                    before the time of Dhuhr.
                  </td>
                </tr>

                <tr>
                  <th>Khutbah</th>
                  <td>Delivered after the Eid prayer.</td>
                </tr>

                <tr>
                  <th>Adhan</th>
                  <td>No Adhan is called for Eid prayer.</td>
                </tr>

                <tr>
                  <th>Iqamah</th>
                  <td>No Iqamah is called for Eid prayer.</td>
                </tr>

                <tr>
                  <th>Prayer Type</th>
                  <td>Two-rak‘ah congregational prayer.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Eid Prayers */}
      <div className="grid md:grid-cols-2 gap-5 mb-6">
        <div className="card bg-base-100 border border-base-300 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-primary">🌙 Eid al-Fitr</h2>

            <p>
              Eid al-Fitr is celebrated on the first day of Shawwal after the
              completion of Ramadan.
            </p>

            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Perform Ghusl and prepare for Eid.</li>
              <li>Eat before going to the Eid prayer.</li>
              <li>Pay Zakat al-Fitr before the prayer if applicable.</li>
              <li>Go to the Eid prayer place.</li>
              <li>Perform the 2-rak‘ah Eid prayer.</li>
              <li>Listen to the khutbah after the prayer.</li>
            </ul>
          </div>
        </div>

        <div className="card bg-base-100 border border-base-300 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-primary">🐑 Eid al-Adha</h2>

            <p>Eid al-Adha is celebrated on the 10th of Dhul-Hijjah.</p>

            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Perform Ghusl and prepare for Eid.</li>
              <li>It is recommended not to eat before the prayer.</li>
              <li>Perform the 2-rak‘ah Eid prayer.</li>
              <li>Listen to the khutbah after the prayer.</li>
              <li>Animal sacrifice is performed after the Eid prayer.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Intention */}
      <div className="card bg-base-100 border border-base-300 shadow-sm mb-6">
        <div className="card-body">
          <h2 className="card-title text-primary text-2xl">
            🤲 Intention (Niyyah)
          </h2>

          <p className="mt-2">
            Make the intention in your heart to perform two rak‘ahs of Eid
            prayer behind the Imam.
          </p>

          <div className="bg-base-200 rounded-xl p-4 mt-4">
            <p className="font-semibold mb-2">Example intention:</p>

            <p className="text-base-content/80">
              “I intend to perform two rak‘ahs of Eid prayer for the sake of
              Allah, following the Imam.”
            </p>
          </div>

          <p className="text-sm opacity-70 mt-3">
            The intention is fundamentally an intention of the heart; a specific
            spoken formula is not required.
          </p>
        </div>
      </div>

      {/* Rak'ah 1 */}
      <div className="card bg-base-100 border border-base-300 shadow-sm mb-6">
        <div className="card-body">
          <h2 className="card-title text-primary text-2xl">1️⃣ First Rak‘ah</h2>

          <div className="space-y-4 mt-4">
            <Step
              number="1"
              title="Make the intention"
              text="Make the intention in your heart to perform two rak‘ahs of Eid prayer behind the Imam."
            />

            <Step
              number="2"
              title="Takbir al-Ihram"
              text="The Imam says Allahu Akbar. Raise your hands and begin the prayer."
            />

            <Step
              number="3"
              title="Recitation"
              text="The Imam recites the opening supplication according to the established practice, followed by additional takbirs before the Quranic recitation."
            />

            <Step
              number="4"
              title="Extra Takbirs"
              text="In the first rak‘ah, additional takbirs are performed according to the school of Islamic jurisprudence being followed."
            />

            <Step
              number="5"
              title="Quran Recitation"
              text="The Imam recites Surah al-Fatihah followed by another portion of the Quran."
            />

            <Step
              number="6"
              title="Complete the Rak‘ah"
              text="Perform Ruku, stand upright, perform two Sajdahs, and continue to the second rak‘ah."
            />
          </div>
        </div>
      </div>

      {/* Rak'ah 2 */}
      <div className="card bg-base-100 border border-base-300 shadow-sm mb-6">
        <div className="card-body">
          <h2 className="card-title text-primary text-2xl">2️⃣ Second Rak‘ah</h2>

          <div className="space-y-4 mt-4">
            <Step
              number="1"
              title="Stand for the second rak‘ah"
              text="Stand up after completing the first rak‘ah and follow the Imam."
            />

            <Step
              number="2"
              title="Quran Recitation"
              text="The Imam recites Surah al-Fatihah followed by another portion of the Quran."
            />

            <Step
              number="3"
              title="Extra Takbirs"
              text="Additional takbirs are performed in the second rak‘ah according to the school of jurisprudence being followed."
            />

            <Step
              number="4"
              title="Ruku and Sajdah"
              text="After the required takbirs and recitation, perform Ruku followed by the two Sajdahs."
            />

            <Step
              number="5"
              title="Final Sitting"
              text="Sit for Tashahhud, Durood and the appropriate supplications."
            />

            <Step
              number="6"
              title="Salam"
              text="The Imam ends the prayer by saying Salam to the right and left."
            />
          </div>
        </div>
      </div>

      {/* Takbir differences */}
      <div className="card bg-base-100 border border-warning/30 shadow-sm mb-6">
        <div className="card-body">
          <h2 className="card-title text-warning text-2xl">
            ⚠️ Important: Number of Extra Takbirs
          </h2>

          <p className="mt-2">
            The number and placement of the additional Eid takbirs differ
            between Islamic schools of jurisprudence.
          </p>

          <div className="overflow-x-auto mt-4">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>School</th>
                  <th>First Rak‘ah</th>
                  <th>Second Rak‘ah</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Hanafi</td>
                  <td>3 extra takbirs</td>
                  <td>3 extra takbirs</td>
                </tr>

                <tr>
                  <td>Shafi‘i</td>
                  <td>7 extra takbirs</td>
                  <td>5 extra takbirs</td>
                </tr>

                <tr>
                  <td>Maliki</td>
                  <td>6 extra takbirs</td>
                  <td>5 extra takbirs</td>
                </tr>

                <tr>
                  <td>Hanbali</td>
                  <td>6 extra takbirs</td>
                  <td>5 extra takbirs</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="alert alert-info mt-4">
            <span>
              If you are praying behind an Imam, simply follow the Imam's
              movements and instructions rather than trying to follow a
              different counting method.
            </span>
          </div>
        </div>
      </div>

      {/* Khutbah */}
      <div className="card bg-base-100 border border-base-300 shadow-sm mb-6">
        <div className="card-body">
          <h2 className="card-title text-primary text-2xl">📖 Eid Khutbah</h2>

          <div className="space-y-3 mt-3">
            <p>
              The Eid khutbah is delivered <strong>after</strong> the Eid
              prayer.
            </p>

            <p>
              Muslims should sit quietly and listen attentively to the khutbah.
            </p>

            <p>
              The khutbah may contain reminders about faith, worship, gratitude,
              charity, family, brotherhood and other important Islamic
              teachings.
            </p>
          </div>
        </div>
      </div>

      {/* Before Prayer */}
      <div className="card bg-base-100 border border-base-300 shadow-sm mb-6">
        <div className="card-body">
          <h2 className="card-title text-primary text-2xl">
            🌿 Sunnahs and Preparation for Eid
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <Checklist text="Perform Ghusl." />
            <Checklist text="Wear clean and good clothing." />
            <Checklist text="Use perfume for men where appropriate." />
            <Checklist text="Go to the prayer place." />
            <Checklist text="Recite Takbir on the way to Eid prayer." />
            <Checklist text="Take a different route when returning, where possible." />
          </div>
        </div>
      </div>

      {/* Eid al-Fitr vs Adha */}
      <div className="card bg-base-100 border border-base-300 shadow-sm mb-6">
        <div className="card-body">
          <h2 className="card-title text-primary text-2xl">
            🌙 Eid al-Fitr vs 🐑 Eid al-Adha
          </h2>

          <div className="overflow-x-auto mt-4">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th></th>
                  <th>Eid al-Fitr</th>
                  <th>Eid al-Adha</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>Day</th>
                  <td>1 Shawwal</td>
                  <td>10 Dhul-Hijjah</td>
                </tr>

                <tr>
                  <th>Before Prayer</th>
                  <td>Eating before prayer is recommended.</td>
                  <td>Not eating before prayer is recommended.</td>
                </tr>

                <tr>
                  <th>Special Action</th>
                  <td>Zakat al-Fitr</td>
                  <td>Qurbani / Udhiya</td>
                </tr>

                <tr>
                  <th>Prayer</th>
                  <td colSpan={2}>2 Rak‘ahs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Common mistakes */}
      <div className="card bg-base-100 border border-error/30 shadow-sm mb-6">
        <div className="card-body">
          <h2 className="card-title text-error text-2xl">
            ❌ Common Mistakes to Avoid
          </h2>

          <ul className="list-disc list-inside space-y-2 mt-3">
            <li>Thinking Eid prayer has an Adhan or Iqamah.</li>
            <li>Missing the extra takbirs because of confusion.</li>
            <li>
              Trying to follow a different school while praying behind an Imam.
            </li>
            <li>Talking during the khutbah.</li>
            <li>
              Arriving after the prayer has already finished without asking a
              qualified scholar what to do.
            </li>
            <li>
              Treating Eid prayer as identical to the normal daily prayers.
            </li>
          </ul>
        </div>
      </div>

      {/* Quick Summary */}
      <div className="card bg-primary text-primary-content shadow-lg">
        <div className="card-body">
          <h2 className="card-title text-2xl">✅ Quick Summary</h2>

          <ol className="list-decimal list-inside space-y-2 mt-3">
            <li>Perform Ghusl and prepare for Eid.</li>
            <li>Go to the Eid prayer place.</li>
            <li>Make the intention for Eid prayer.</li>
            <li>Pray 2 rak‘ahs with the Imam.</li>
            <li>Follow the Imam for the additional takbirs.</li>
            <li>Complete the prayer.</li>
            <li>Listen to the khutbah.</li>
            <li>Make dua and celebrate Eid in a halal manner.</li>
          </ol>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-6 text-sm opacity-70 text-center">
        <p>
          Islamic rulings and details can differ between schools of
          jurisprudence. This page provides general educational information. For
          specific rulings, consult a qualified Islamic scholar.
        </p>
      </div>
    </div>
  );
}

/* Reusable Step Component */
function Step({ number, title, text }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-primary-content flex items-center justify-center font-bold">
        {number}
      </div>

      <div>
        <h3 className="font-semibold text-lg">{title}</h3>

        <p className="text-base-content/70 mt-1">{text}</p>
      </div>
    </div>
  );
}

/* Reusable Checklist Component */
function Checklist({ text }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-base-200">
      <span className="text-success text-lg">✓</span>

      <span>{text}</span>
    </div>
  );
}
