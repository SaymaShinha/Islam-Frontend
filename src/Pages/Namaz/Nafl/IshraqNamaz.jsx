export default function IshraqNamaz() {
  return (
    <PrayerPage
      icon="🌅"
      title="Ishraq Prayer"
      subtitle="A voluntary prayer performed after sunrise."
      time="After the sun has risen and the prohibited sunrise period has passed, until before Zawal."
      rakahs="2 or more"
      steps={[
        "Wait until after sunrise and the prohibited period immediately around sunrise has ended.",
        "Make the intention in your heart for Ishraq prayer.",
        "Pray two rak‘ahs.",
        "Recite Surah al-Fatihah followed by another portion of the Quran.",
        "Complete Ruku, Sajdah and the remaining actions normally.",
      ]}
    />
  );
}

function PrayerPage({ icon, title, subtitle, time, rakahs, steps }) {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <div className="text-center mb-8">
        <div className="text-5xl">{icon}</div>
        <h1 className="text-4xl font-bold text-primary mt-3">{title}</h1>
        <p className="opacity-70 mt-3">{subtitle}</p>
      </div>

      <div className="card bg-base-100 border border-base-300 shadow-sm mb-6">
        <div className="card-body">
          <h2 className="card-title text-primary">Basic Information</h2>

          <div className="overflow-x-auto mt-3">
            <table className="table table-zebra">
              <tbody>
                <tr>
                  <th>Time</th>
                  <td>{time}</td>
                </tr>

                <tr>
                  <th>Rak‘ahs</th>
                  <td>{rakahs}</td>
                </tr>

                <tr>
                  <th>Type</th>
                  <td>Nafl</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 border border-base-300 shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-primary">How to Pray</h2>

          <div className="mt-4">
            {steps.map((step, index) => (
              <div className="flex gap-4 mb-5" key={step}>
                <span className="w-9 h-9 shrink-0 rounded-full bg-primary text-primary-content flex items-center justify-center font-bold">
                  {index + 1}
                </span>

                <p className="pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
