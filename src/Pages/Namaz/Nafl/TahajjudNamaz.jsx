export default function TahajjudNamaz() {
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6">
      <Header
        icon="🌙"
        title="Tahajjud Prayer"
        subtitle="A voluntary night prayer and an opportunity for quiet worship."
      />

      <Info type="success">
        Tahajjud is a voluntary prayer performed during the night after
        sleeping. Its time continues until the beginning of Fajr.
      </Info>

      <Section title="Basic Information">
        <Table
          rows={[
            ["Type", "Nafl / voluntary prayer"],
            ["Time", "After Isha and preferably after sleeping, until Fajr"],
            ["Rak‘ahs", "At least 2; additional rak‘ahs may be prayed"],
            ["Congregation", "Normally prayed individually"],
            ["Best Time", "The last third of the night"],
          ]}
        />
      </Section>

      <Section title="How to Pray Tahajjud">
        <Step n="1" title="Sleep and wake">
          Tahajjud is traditionally understood as night prayer performed after
          sleeping and waking during the night.
        </Step>

        <Step n="2" title="Make intention">
          Make the intention in your heart to pray Tahajjud for Allah.
        </Step>

        <Step n="3" title="Pray two rak‘ahs">
          Begin with two rak‘ahs. You may pray additional rak‘ahs afterward.
        </Step>

        <Step n="4" title="Recitation">
          Recite Surah al-Fatihah followed by another portion of the Quran.
        </Step>

        <Step n="5" title="Complete the prayer">
          Perform Ruku, Sajdah and the remaining actions normally.
        </Step>

        <Step n="6" title="Make dua">
          Take time after the prayer to make sincere dua to Allah.
        </Step>
      </Section>

      <Section title="Important Points">
        <List
          items={[
            "Tahajjud is not one of the five obligatory prayers.",
            "There is no fixed requirement to pray a specific number of rak‘ahs.",
            "Pray according to your ability.",
            "Witr is generally prayed after the night prayer.",
          ]}
        />
      </Section>
    </div>
  );
}

/* Components */

function Header({ icon, title, subtitle }) {
  return (
    <div className="text-center mb-8">
      <div className="text-5xl">{icon}</div>
      <h1 className="text-4xl font-bold text-primary mt-3">{title}</h1>
      <p className="mt-3 opacity-70 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="card bg-base-100 border border-base-300 shadow-sm mb-6">
      <div className="card-body">
        <h2 className="card-title text-primary text-2xl">{title}</h2>
        <div className="mt-3">{children}</div>
      </div>
    </section>
  );
}

function Step({ n, title, children }) {
  return (
    <div className="flex gap-4 mb-5">
      <span className="w-9 h-9 rounded-full bg-primary text-primary-content flex items-center justify-center font-bold shrink-0">
        {n}
      </span>

      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="opacity-75 mt-1">{children}</p>
      </div>
    </div>
  );
}

function List({ items }) {
  return (
    <ul className="list-disc list-inside space-y-2">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Table({ rows }) {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <tbody>
          {rows.map(([a, b]) => (
            <tr key={a}>
              <th>{a}</th>
              <td>{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Info({ children, type }) {
  return <div className={`alert alert-${type} mb-6`}>{children}</div>;
}
