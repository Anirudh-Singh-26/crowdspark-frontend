import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CampaignDetails() {
  const { id } = useParams();
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/campaigns/${id}`);
        if (res.data && res.data._id) {
          setCampaign(res.data);
          setLoading(false);
          return;
        }
      } catch (err) {
        console.warn("Backend fetch failed or campaign not found. Using default dummy campaign.");
      }

      const dummy = {
        _id: "dummy",
        title: "Inspire Hope: Empower a Rural Community",
        image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80",
        description:
          "Join hands to transform lives in a remote village by providing access to education, clean water, and sustainable farming solutions. Your support can ignite a cycle of opportunity and progress.",
        category: "Rural Development",
        goal: 15000,
        raised: 5200,
        creator: "CrowdSpark Community",
      };

      setCampaign(dummy);
      setLoading(false);
    };

    fetchCampaign();
  }, [id]);

  if (loading) return <div className="text-center py-20">Loading campaign...</div>;
  if (!campaign) return <div className="text-center py-20 text-red-500">Campaign not found.</div>;

  const progress = Math.min((campaign.raised / campaign.goal) * 100, 100);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800">
      <div className="rounded-xl overflow-hidden shadow-lg mb-6 relative group">
        <img
          src={campaign.image}
          alt={campaign.title}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute top-4 left-4 bg-white text-green-600 text-sm font-semibold px-3 py-1 rounded-full shadow">
          Campaign #{id}
        </div>
      </div>

      <h1 className="text-4xl font-extrabold mb-4">{campaign.title}</h1>

      <div className="mb-4">
        <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-1000"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="mt-2 text-sm text-gray-600">
          ₹{campaign.raised} raised of ₹{campaign.goal} goal
        </p>
      </div>

      <p className="text-lg leading-relaxed mb-6">{campaign.description}</p>

      <div className="text-sm text-gray-600 mb-10">
        <span className="font-medium">Created by:</span> {campaign.creator || "Anonymous"}
      </div>

      <div className="text-center">
        <a
          href={`/support/${campaign._id}`}
          className="inline-block px-8 py-3 text-lg font-semibold bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
        >
          Support Now 🚀
        </a>
      </div>
    </div>
  );
}