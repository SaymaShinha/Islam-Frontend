import {
  ShieldCheck,
  Mail,
  Cookie,
  ExternalLink,
  FileCheck,
} from "lucide-react";
import Divider from "../Components/Divider.jsx";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen px-4 py-10 md:py-14">
      {/* Header */}
      <section className="max-w-3xl mx-auto text-center mb-10">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-700 mb-4">
          <ShieldCheck size={28} />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">
          Privacy Policy
        </h1>

        <p className="text-base-content/70 max-w-xl mx-auto leading-relaxed">
          Your privacy matters to us. Learn how Furqan Life handles information
          when you use our website.
        </p>

        <Divider />
      </section>

      {/* Privacy Content */}
      <section className="max-w-4xl mx-auto">
        <div className="bg-base-100 border border-base-300 shadow-md rounded-2xl overflow-hidden">
          {/* Introduction */}
          <div className="bg-green-50 border-b border-green-200 p-5 md:p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
                <ShieldCheck size={22} />
              </div>

              <div>
                <h2 className="font-bold text-lg text-green-800 mb-1">
                  Your Privacy Is Important
                </h2>

                <p className="text-sm text-green-900/80 leading-relaxed">
                  We respect your privacy and are committed to protecting
                  information you may provide while using Furqan Life.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            {/* Personal Information */}
            <article className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <Mail size={20} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-primary mb-2">
                  Information We Collect
                </h2>

                <p className="text-base-content/70 leading-7">
                  This website does not collect sensitive personal data unless
                  you voluntarily submit it through our contact forms.
                  Information such as your name, email address, and message may
                  be collected when you contact us.
                </p>
              </div>
            </article>

            <div className="border-t border-base-300" />

            {/* How Information Is Used */}
            <article>
              <h2 className="text-xl font-bold text-primary mb-2">
                How We Use Your Information
              </h2>

              <p className="text-base-content/70 leading-7">
                Information submitted through our contact forms may be used only
                to respond to your inquiries, questions, suggestions, or
                feedback.
              </p>
            </article>

            <div className="border-t border-base-300" />

            {/* Third Parties */}
            <article>
              <h2 className="text-xl font-bold text-primary mb-2">
                Sharing of Information
              </h2>

              <p className="text-base-content/70 leading-7">
                We do not sell, trade, or intentionally share your personal
                information with third parties for their own purposes.
              </p>
            </article>

            <div className="border-t border-base-300" />

            {/* Cookies */}
            <article className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Cookie size={20} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-primary mb-2">
                  Cookies & Analytics
                </h2>

                <p className="text-base-content/70 leading-7">
                  Basic analytics or cookies may be used to understand website
                  usage, improve performance, and provide a better user
                  experience.
                </p>
              </div>
            </article>

            <div className="border-t border-base-300" />

            {/* External Links */}
            <article className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                <ExternalLink size={20} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-primary mb-2">
                  External Websites
                </h2>

                <p className="text-base-content/70 leading-7">
                  Furqan Life may contain links to external websites. We are not
                  responsible for the privacy policies, content, or practices of
                  third-party websites. We encourage you to review their privacy
                  policies before providing personal information.
                </p>
              </div>
            </article>

            {/* Agreement */}
            <div className="rounded-xl bg-base-200/60 p-5 flex gap-4">
              <div className="flex-shrink-0 text-green-700">
                <FileCheck size={22} />
              </div>

              <div>
                <h2 className="text-lg font-bold text-primary mb-2">
                  Your Agreement
                </h2>

                <p className="text-base-content/70 leading-7">
                  By using Furqan Life, you acknowledge and agree to the terms
                  described in this Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-base-content/50">
            We are committed to keeping Furqan Life a safe and respectful place
            for everyone seeking Islamic knowledge.
          </p>
        </div>
      </section>
    </main>
  );
}
