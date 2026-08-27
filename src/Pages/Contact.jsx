import { useState } from "react";
import {
  Mail,
  Send,
  User,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Spinner from "../Components/Spinner.jsx";
import Divider from "../Components/Divider.jsx";

export default function Contact() {
  const userName = localStorage.getItem("userName") || "";
  const userEmail = localStorage.getItem("userEmail") || "";

  const [form, setForm] = useState({
    name: userName,
    email: userEmail,
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    // Remove previous message when user starts typing
    setStatus({
      type: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus({
      type: "",
      message: "",
    });

    try {
      const apiUrl = import.meta.env.VITE_API_URL;

      const res = await fetch(`${apiUrl}/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to send message.");
      }

      setStatus({
        type: "success",
        message: "Your message has been sent successfully. Thank you!",
      });

      setForm({
        name: userName,
        email: userEmail,
        message: "",
      });
    } catch (error) {
      console.error(error);

      setStatus({
        type: "error",
        message: "Unable to send your message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen px-4 py-10 md:py-14">
      {/* Header */}
      <section className="max-w-3xl mx-auto text-center mb-10">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-700 mb-4">
          <Mail size={28} />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">
          Contact Us
        </h1>

        <p className="text-base-content/70 max-w-xl mx-auto leading-relaxed">
          Have a question, suggestion, or feedback about Furqan Life? We would
          love to hear from you.
        </p>

        <Divider />
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Contact Information */}
        <div className="bg-base-100 rounded-2xl shadow-md border border-base-300 p-6 md:p-7">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
              <MessageSquare size={22} />
            </div>

            <div>
              <h2 className="font-bold text-lg">Get in Touch</h2>

              <p className="text-sm text-base-content/60">
                We are here to help
              </p>
            </div>
          </div>

          <p className="text-base-content/70 leading-relaxed mb-6">
            Your feedback helps us improve Furqan Life and make Islamic
            knowledge easier to access for everyone.
          </p>

          <div className="rounded-xl bg-green-50 p-4">
            <div className="flex items-start gap-3">
              <Mail size={20} className="text-green-700 mt-1 flex-shrink-0" />

              <div>
                <p className="text-sm text-base-content/60 mb-1">Email</p>

                <a
                  href="mailto:furqanlife0912@gmail.com"
                  className="font-medium text-green-700 hover:underline break-all"
                >
                  furqanlife0912@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-lg font-semibold text-primary">Furqan Life</p>

            <p className="text-sm text-base-content/60 mt-1">
              Learn • Reflect • Grow
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2 bg-base-100 rounded-2xl shadow-md border border-base-300 p-6 md:p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-primary">
              Send us a message
            </h2>

            <p className="text-sm text-base-content/60 mt-1">
              Fill out the form and we will get back to you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2"
              >
                Your Name
              </label>

              <div className="relative">
                <User
                  size={19}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40"
                />

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="input input-bordered w-full pl-10 rounded-xl focus:outline-none focus:border-green-600"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
              >
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={19}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40"
                />

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="input input-bordered w-full pl-10 rounded-xl focus:outline-none focus:border-green-600"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2"
              >
                Message
              </label>

              <div className="relative">
                <MessageSquare
                  size={19}
                  className="absolute left-3 top-3 text-base-content/40"
                />

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="6"
                  className="textarea textarea-bordered w-full pl-10 rounded-xl resize-none focus:outline-none focus:border-green-600"
                  required
                />
              </div>
            </div>

            {/* Status */}
            {status.message && (
              <div
                className={`flex items-start gap-3 rounded-xl p-4 ${
                  status.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle size={20} className="mt-0.5 flex-shrink-0" />
                ) : (
                  <AlertCircle size={20} className="mt-0.5 flex-shrink-0" />
                )}

                <p className="text-sm">{status.message}</p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="btn bg-green-600 hover:bg-green-700 text-white border-none rounded-xl px-6 w-full sm:w-auto min-w-36"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="loading loading-spinner loading-sm"></span>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send size={18} />
                  Send Message
                </span>
              )}
            </button>

            {loading && (
              <div className="hidden">
                <Spinner text="Sending message..." />
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
