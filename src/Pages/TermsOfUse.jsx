import {
  FileText,
  BookOpen,
  ShieldCheck,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";
import Divider from "../Components/Divider.jsx";

export default function TermsOfUse() {
  return (
    <main className="min-h-screen px-4 py-10 md:py-14">
      {/* Header */}
      <section className="max-w-3xl mx-auto text-center mb-10">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-700 mb-4">
          <FileText size={28} />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">
          Terms of Use
        </h1>

        <p className="text-base-content/70 max-w-xl mx-auto leading-relaxed">
          Please read these terms carefully before using Furqan Life.
        </p>

        <Divider />
      </section>

      {/* Terms Content */}
      <section className="max-w-4xl mx-auto">
        <div className="bg-base-100 border border-base-300 shadow-md rounded-2xl overflow-hidden">
          {/* Introduction */}
          <div className="bg-blue-50 border-b border-blue-200 p-5 md:p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <FileText size={22} />
              </div>

              <div>
                <h2 className="font-bold text-lg text-blue-800 mb-1">
                  Welcome to Furqan Life
                </h2>

                <p className="text-sm text-blue-900/80 leading-relaxed">
                  By accessing and using this website, you agree to comply with
                  the following terms and conditions.
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
                  Educational Content
                </h2>

                <p className="text-base-content/70 leading-7">
                  All content provided on this website, including Asmaul Husna,
                  Quranic verses, translations, and Islamic information, is
                  intended for educational and informational purposes only.
                </p>
              </div>
            </article>

            <div className="border-t border-base-300" />

            {/* Section 2 */}
            <article className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                <ShieldCheck size={20} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-primary mb-2">
                  Acceptable Use
                </h2>

                <p className="text-base-content/70 leading-7">
                  Users must not misuse, copy, or redistribute content from this
                  website for harmful, misleading, or commercial purposes
                  without appropriate permission.
                </p>
              </div>
            </article>

            <div className="border-t border-base-300" />

            {/* Section 3 */}
            <article>
              <h2 className="text-xl font-bold text-primary mb-2">
                Accuracy of Information
              </h2>

              <p className="text-base-content/70 leading-7">
                We strive to provide accurate and reliable information, but we
                do not guarantee that all content is completely error-free or
                complete. Users are encouraged to verify religious information
                with qualified Islamic scholars.
              </p>
            </article>

            <div className="border-t border-base-300" />

            {/* Section 4 */}
            <article className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <AlertTriangle size={20} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-primary mb-2">
                  Limitation of Liability
                </h2>

                <p className="text-base-content/70 leading-7">
                  We are not responsible for any loss, misunderstanding, or
                  damage resulting from the use of this website or its content.
                  Users access and use the website at their own discretion.
                </p>
              </div>
            </article>

            <div className="border-t border-base-300" />

            {/* Section 5 */}
            <article className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
                <RefreshCw size={20} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-primary mb-2">
                  Changes to These Terms
                </h2>

                <p className="text-base-content/70 leading-7">
                  We reserve the right to update or modify these terms at any
                  time without prior notice. Any changes will become effective
                  when the updated terms are published on this website.
                </p>
              </div>
            </article>

            {/* Agreement */}
            <div className="rounded-xl bg-base-200/60 p-5">
              <h2 className="text-lg font-bold text-primary mb-2">
                Your Agreement
              </h2>

              <p className="text-base-content/70 leading-7">
                By continuing to access or use Furqan Life, you acknowledge that
                you have read, understood, and agreed to these Terms of Use.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-sm text-base-content/50 leading-relaxed">
            Thank you for using Furqan Life responsibly and respectfully.
          </p>
        </div>
      </section>
    </main>
  );
}
