export default function WatirbNamaz() {
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6">
      <PageHeader
        icon="🕌"
        title="Wajib Namaz"
        subtitle="Prayers and prayer-related obligations commonly classified as wajib in Hanafi fiqh."
      />

      {/* Important */}
      <InfoBox type="warning">
        The classification of some prayers differs between Islamic schools of
        jurisprudence. This page primarily follows the Hanafi classification.
      </InfoBox>

      {/* Witr */}
      <Section title="1. Witr Prayer">
        <p>
          Witr is a highly emphasized prayer performed after Isha and before
          Fajr. In Hanafi fiqh, Witr is considered wajib.
        </p>

        <InfoTable
          rows={[
            ["Time", "After Isha until the beginning of Fajr"],
            ["Rak‘ahs", "3"],
            ["Status", "Wajib according to Hanafi fiqh"],
            [
              "Best Time",
              "The latter part of the night for someone confident they will wake up",
            ],
          ]}
        />
      </Section>

      {/* Witr procedure */}
      <Section title="How to Perform 3-Rak‘ah Witr">
        <Step number="1" title="Make intention">
          Make the intention in your heart to perform Witr prayer.
        </Step>

        <Step number="2" title="First Rak‘ah">
          Perform the first rak‘ah like a normal prayer, including Surah
          al-Fatihah and another surah.
        </Step>

        <Step number="3" title="Second Rak‘ah">
          Perform the second rak‘ah and sit for Tashahhud.
        </Step>

        <Step number="4" title="Third Rak‘ah">
          Stand for the third rak‘ah and recite Surah al-Fatihah followed by
          another surah.
        </Step>

        <Step number="5" title="Takbir and Qunut">
          In the Hanafi method, raise the hands for an additional takbir before
          the Qunut supplication and then recite Dua al-Qunut.
        </Step>

        <Step number="6" title="Complete the prayer">
          Continue with Ruku, Sajdah, final sitting and Salam.
        </Step>
      </Section>

      <InfoBox type="info">
        There are differences between madhhabs regarding the method and status
        of Witr. Follow the method taught by a qualified scholar in your
        community.
      </InfoBox>
    </div>
  );
}

/* ---------- Components ---------- */

function PageHeader({ icon, title, subtitle }) {
  return (
    <div className="text-center mb-8">
      <div className="text-5xl mb-3">{icon}</div>
      <h1 className="text-3xl md:text-4xl font-bold text-primary">{title}</h1>
      <p className="mt-3 text-base-content/70 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="card bg-base-100 border border-base-300 shadow-sm mb-6">
      <div className="card-body">
        <h2 className="card-title text-primary text-2xl mb-3">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Step({ number, title, children }) {
  return (
    <div className="flex gap-4 mb-5">
      <div className="w-9 h-9 shrink-0 rounded-full bg-primary text-primary-content flex items-center justify-center font-bold">
        {number}
      </div>

      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="mt-1 text-base-content/75">{children}</p>
      </div>
    </div>
  );
}

function InfoBox({ children, type = "info" }) {
  return (
    <div className={`alert alert-${type} mb-6`}>
      <span>{children}</span>
    </div>
  );
}

function InfoTable({ rows }) {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="table table-zebra">
        <tbody>
          {rows.map(([title, value]) => (
            <tr key={title}>
              <th>{title}</th>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
