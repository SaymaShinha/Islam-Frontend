import { useState } from "react";
import Spinner from "../Components/Spinner";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL;

      const res = await fetch(`${apiUrl}/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setLoading(false);
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setLoading(false);
        alert("Failed to send message.");
      }
    } catch (error) {
      setLoading(false);
      throw error;
    } finally {
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4 text-gray-800">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full border border-l p-2 rounded bg-blue-100"
          required
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full border p-2 bg-blue-100"
          required
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          className="w-full border p-2 rounded bg-blue-100"
          required
        />

        <button
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {loading ? "Sending..." : "Send"}
        </button>

        {loading && <Spinner text="Sending message..."></Spinner>}
      </form>

      <h1>Furqan life</h1>
      <p>Email: furqanlife0912@gmail.com</p>
    </div>
  );
}
