export default function IstikharaNamaz() {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <Header />

      <div className="alert alert-info mb-6">
        Istikhara means seeking Allah's guidance when a person is considering a
        permissible matter and is uncertain about the best choice.
      </div>

      <Section title="Basic Information">
        <Table
          rows={[
            ["Type", "Nafl prayer"],
            ["Rak‘ahs", "2"],
            ["When", "Outside prohibited prayer times"],
            ["Purpose", "Seeking Allah's guidance"],
          ]}
        />
      </Section>

      <Section title="How to Perform Istikhara">
        <Step n="1" title="Consider the matter">
          The matter should be permissible. Istikhara is not used to decide
          whether an obligatory act should be performed or whether something
          clearly prohibited should be done.
        </Step>

        <Step n="2" title="Make intention">
          Intend to pray two rak‘ahs of Istikhara.
        </Step>

        <Step n="3" title="Pray two rak‘ahs">
          Perform two rak‘ahs of voluntary prayer.
        </Step>

        <Step n="4" title="Make the Istikhara dua">
          After the prayer, recite the authentic dua of Istikhara and mention
          the matter for which guidance is being sought.
        </Step>

        <Step n="5" title="Take appropriate action">
          After seeking Allah's guidance, use sound judgment, consultation and
          the available information when making your decision.
        </Step>
      </Section>

      <Section title="Does Istikhara Require a Dream?">
        <p>
          A dream is not a necessary condition for Istikhara. A person should
          not assume that Istikhara only works if a particular dream occurs.
        </p>
      </Section>
    </div>
  );
}

function Header() {
  return (
    <div className="text-center mb-8">
      <div className="text-5xl">🤲</div>
      <h1 className="text-4xl font-bold text-primary mt-3">
        Salat al-Istikhara
      </h1>
      <p className="opacity-70 mt-3">
        Seeking Allah's guidance when making a permissible decision.
      </p>
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
        <h3 className="font-semibold">{title}</h3>
        <p className="opacity-75 mt-1">{children}</p>
      </div>
    </div>
  );
}

function Table({ rows }) {
  return (
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
  );
}
