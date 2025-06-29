import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SupportPage() {
  const { id } = useParams();

  const [campaign, setCampaign] = useState(null);

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const res = await axios.get(`${import.meta.env.BACKEND_URL}/api/campaigns/${id}`);
        if (res.data && res.data._id) {
          setCampaign(res.data);
          return;
        }
      } catch (err) {
        console.warn("Backend fetch failed. Using fallback.");
      }

      setCampaign({
        _id: id,
        title: "Empower Girls Through Education",
        raised: 5600,
        goal: 8000,
      });
    };

    fetchCampaign();
  }, [id]);

  if (!campaign) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="relative max-w-2xl mx-auto px-6 py-20 text-green-900">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-50 via-white to-green-100 blur-xl opacity-70" />

      <h1 className="text-4xl font-extrabold mb-10 text-center text-green-800 tracking-tight drop-shadow-md">
        🌱 Support This Campaign
      </h1>

      <div className="bg-white/60 backdrop-blur-md border border-green-200 rounded-3xl shadow-2xl p-8 mb-12 transition hover:shadow-green-200">
        <h2 className="text-2xl font-semibold mb-2 text-green-800">{campaign?.title}</h2>
        <p className="text-sm text-gray-500 mb-4">Campaign ID: {id}</p>

        <div className="h-3 w-full bg-green-100 rounded-full overflow-hidden mb-2">
          <div
            className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-1000"
            style={{
              width: `${(campaign?.raised / campaign?.goal) * 100}%`,
            }}
          />
        </div>
        <p className="text-sm text-green-800 font-medium">
          ₹{campaign?.raised} raised of ₹{campaign?.goal} goal
        </p>
      </div>

      <form className="space-y-6 bg-white/70 backdrop-blur-lg border border-green-100 rounded-3xl shadow-lg p-8">
        <div>
          <label className="block text-sm font-semibold text-green-800 mb-1">💸 Amount (₹)</label>
          <input
            type="number"
            placeholder="Enter amount"
            className="w-full px-4 py-2 rounded-xl border border-green-200 bg-white/80 text-green-900 placeholder-green-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-green-300 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-800 mb-1">📝 Message (optional)</label>
          <textarea
            placeholder="Say something encouraging..."
            className="w-full px-4 py-2 rounded-xl border border-green-200 bg-white/80 text-green-900 placeholder-green-400 shadow-inner resize-none focus:outline-none focus:ring-2 focus:ring-green-300 transition"
            rows="3"
          />
        </div>

        <div className="text-center pt-4">
          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg rounded-full shadow-md hover:from-green-600 hover:to-green-700 transition-transform transform hover:scale-105"
          >
            ✅ Confirm & Donate
          </button>
        </div>
      </form>
    </div>
  );
}