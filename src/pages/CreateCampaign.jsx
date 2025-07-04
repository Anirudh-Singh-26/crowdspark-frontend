import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateCampaign() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    goalAmount: "",
    image: "",
    deadline: "",
    category: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await axios.post(`${import.meta.env.VITE_BACKEND}/campaigns`, form, {
        withCredentials: true,
      });

      setSuccess("🎉 Campaign launched successfully!");
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to launch campaign");
    }
  };

  return (
    <div className="relative max-w-3xl mx-auto px-6 py-20 text-green-900">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-50 via-white to-green-100 blur-xl opacity-70" />

      <h1 className="text-4xl font-extrabold mb-12 text-center text-green-800 tracking-tight drop-shadow-md">
        ✍️ Start a New Campaign
      </h1>

      <form
        className="space-y-8 bg-white/80 backdrop-blur-xl border border-green-200 rounded-3xl shadow-2xl p-10 transition hover:shadow-green-300"
        onSubmit={handleSubmit}
      >
        <div className="relative group">
          <label className="block text-sm font-bold text-green-800 mb-2">
            Campaign Title
          </label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="E.g., Fund Solar Lights in Rural Areas"
            required
            className="w-full px-5 py-3 rounded-xl border border-green-200 bg-white/90 text-black placeholder-black/60 shadow-md focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

        <div className="relative group">
          <label className="block text-sm font-bold text-green-800 mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Describe the purpose, impact, and who it helps..."
            required
            rows="4"
            className="w-full px-5 py-3 rounded-xl border border-green-200 bg-white/90 text-black placeholder-black/60 shadow-md resize-none focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

        <div className="relative group">
          <label className="block text-sm font-bold text-green-800 mb-2">
            Goal Amount (₹)
          </label>
          <input
            type="number"
            name="goalAmount"
            value={form.goalAmount}
            onChange={handleChange}
            placeholder="E.g., 10000"
            required
            className="w-full px-5 py-3 rounded-xl border border-green-200 bg-white/90 text-black placeholder-black/60 shadow-md focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

        <div className="relative group">
          <label className="block text-sm font-bold text-green-800 mb-2">
            Deadline
          </label>
          <input
            type="date"
            name="deadline"
            value={form.deadline}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 rounded-xl border border-green-200 bg-white/90 text-black shadow-md focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

        <div className="relative group">
          <label className="block text-sm font-bold text-green-800 mb-2">
            Category
          </label>
          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="E.g., Health, Education, Environment"
            required
            className="w-full px-5 py-3 rounded-xl border border-green-200 bg-white/90 text-black shadow-md focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

        <div className="relative group">
          <label className="block text-sm font-bold text-green-800 mb-2">
            Cover Image URL
          </label>
          <input
            type="url"
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="E.g., https://images.unsplash.com/..."
            required
            className="w-full px-5 py-3 rounded-xl border border-green-200 bg-white/90 text-black placeholder-black/60 shadow-md focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

        {error && <p className="text-red-600 font-medium">{error}</p>}
        {success && <p className="text-green-600 font-medium">{success}</p>}

        <div className="text-center pt-6">
          <button
            type="submit"
            className="px-10 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg rounded-full shadow-lg hover:from-green-600 hover:to-green-700 transition-transform transform hover:scale-105"
          >
            🚀 Launch Campaign
          </button>
        </div>
      </form>
    </div>
  );
}
