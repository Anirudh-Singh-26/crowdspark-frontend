export default function CreateCampaign() {
  return (
    <div className="relative max-w-3xl mx-auto px-6 py-20 text-green-900">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-50 via-white to-green-100 blur-xl opacity-70" />

      <h1 className="text-4xl font-extrabold mb-12 text-center text-green-800 tracking-tight drop-shadow-md">
        ✍️ Start a New Campaign
      </h1>

      <form className="space-y-8 bg-white/80 backdrop-blur-xl border border-green-200 rounded-3xl shadow-2xl p-10 transition hover:shadow-green-300">
        <div className="relative group">
          <label className="block text-sm font-bold text-green-800 mb-2 transition-all group-focus-within:text-green-600">
            Campaign Title
          </label>
          <input
            type="text"
            placeholder="E.g., Fund Solar Lights in Rural Areas"
            className="w-full px-5 py-3 rounded-xl border border-green-200 bg-white/90 text-black placeholder-black/60 shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

        <div className="relative group">
          <label className="block text-sm font-bold text-green-800 mb-2">Description</label>
          <textarea
            placeholder="Describe the purpose, impact, and who it helps..."
            className="w-full px-5 py-3 rounded-xl border border-green-200 bg-white/90 text-black placeholder-black/60 shadow-md resize-none focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            rows="4"
          />
        </div>

        <div className="relative group">
          <label className="block text-sm font-bold text-green-800 mb-2">Goal Amount (₹)</label>
          <input
            type="number"
            placeholder="E.g., 10000"
            className="w-full px-5 py-3 rounded-xl border border-green-200 bg-white/90 text-black placeholder-black/60 shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

        <div className="relative group">
          <label className="block text-sm font-bold text-green-800 mb-2">Cover Image URL</label>
          <input
            type="url"
            placeholder="E.g., https://images.unsplash.com/..."
            className="w-full px-5 py-3 rounded-xl border border-green-200 bg-white/90 text-black placeholder-black/60 shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

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