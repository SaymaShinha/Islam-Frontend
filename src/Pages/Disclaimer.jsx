import { AlertTriangle, BookOpen, ShieldCheck } from "lucide-react";
import Divider from "../Components/Divider.jsx";

export default function Disclaimer() {
  return (
    <main className="min-h-screen px-4 py-10 md:py-14">
      {/* Header */}
      <section className="max-w-3xl mx-auto text-center mb-10">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-100 text-amber-600 mb-4">
          <AlertTriangle size={28} />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">
          Disclaimer
        </h1>

        <p className="text-base-content/70 max-w-xl mx-auto leading-relaxed">
          Important information about the use and interpretation of content
          available on Furqan Life.
        </p>

        <Divider />
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto">
        <div className="bg-base-100 border border-base-300 shadow-md rounded-2xl overflow-hidden">
          {/* Important Notice */}
          <div className="bg-amber-50 border-b border-amber-200 p-5 md:p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <AlertTriangle size={22} />
              </div>

              <div>
                <h2 className="font-bold text-lg text-amber-800 mb-1">
                  Please Read Carefully
                </h2>

                <p className="text-sm text-amber-900/80 leading-relaxed">
                  The information provided on Furqan Life is intended for
                  educational and informational purposes.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            {/* Section 1 */}
            <article className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
                <BookOpen size={20} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-primary mb-2">
                  Accuracy of Information
                </h2>

                <p className="text-base-content/70 leading-7">
                  The information provided on this website is for educational
                  and informational purposes only. While we strive to ensure the
                  accuracy and authenticity of Islamic content, including Asmaul
                  Husna, Quranic verses, translations, and related materials, we
                  do not guarantee that all information is completely free from
                  errors or inaccuracies.
                </p>
              </div>
            </article>

            <div className="border-t border-base-300" />

            {/* Section 2 */}
            <article className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
                <ShieldCheck size={20} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-primary mb-2">
                  Primary Sources
                </h2>

                <p className="text-base-content/70 leading-7">
                  The primary source of Islamic guidance is the Holy Quran and
                  the authentic Sunnah of Prophet Muhammad (ﷺ). Users are
                  encouraged to verify information with qualified Islamic
                  scholars before making religious decisions or interpretations.
                </p>
              </div>
            </article>

            <div className="border-t border-base-300" />

            {/* Section 3 */}
            <article>
              <h2 className="text-xl font-bold text-primary mb-2">
                Educational Purpose
              </h2>

              <p className="text-base-content/70 leading-7">
                This website does not intend to replace scholarly Islamic
                teaching or certified religious guidance. Any action taken based
                on the information found on this site is strictly at the user’s
                own discretion and responsibility.
              </p>
            </article>

            {/* Section 4 */}
            <article className="rounded-xl bg-base-200/60 p-5">
              <h2 className="text-xl font-bold text-primary mb-2">
                Limitation of Liability
              </h2>

              <p className="text-base-content/70 leading-7">
                We are not liable for any misunderstandings, misinterpretations,
                or consequences arising from the use of the content provided on
                this website.
              </p>
            </article>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-sm text-base-content/50 leading-relaxed">
            For matters requiring religious judgment or detailed interpretation,
            please consult a qualified Islamic scholar.
          </p>
        </div>
      </section>
    </main>
  );
}
