import { useEffect, useState } from "react";
import axios from "axios";

export default function UserDashboard() {
  const [campaigns, setCampaigns] = useState([]);
  const [contributions, setContributions] = useState([]);
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    // Load user from localStorage or any auth context
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.name) {
      setUserName(user.name);
    }

    // Temporary dummy data before backend is ready
    // TODO: Remove this dummy data when backend integration is complete
    setCampaigns([
      {
        id: "1",
        title: "Clean Water Drive",
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
        raised: 6500,
        goal: 10000,
      },
      {
        id: "2",
        title: "Solar Lights for Villages",
        image: "https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?auto=format&fit=crop&w=800&q=80",
        raised: 3000,
        goal: 7000,
      },
    ]);

    setContributions([
      {
        id: "1",
        title: "Ocean Cleanup Mission",
        amount: 1000,
        date: "2025-06-20",
      },
      {
        id: "2",
        title: "Girl Child Education Fund",
        amount: 500,
        date: "2025-06-22",
      },
    ]);

    const fetchData = async () => {
      try {
        const [campaignRes, contributionRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/my-campaigns`),
          axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/my-contributions`)
        ]);
        if (Array.isArray(campaignRes.data)) setCampaigns(campaignRes.data);
        if (Array.isArray(contributionRes.data)) setContributions(contributionRes.data);
      } catch (err) {
        console.error("Dashboard fetch failed:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-green-50 to-white">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-xl p-6 hidden md:block rounded-tr-3xl">
        <h2 className="text-2xl font-extrabold text-green-600 mb-8 tracking-wide">Dashboard</h2>
        <nav className="space-y-4">
          <a href="#campaigns" className="block text-gray-700 hover:text-green-600 font-medium transition">📢 My Campaigns</a>
          <a href="#contributions" className="block text-gray-700 hover:text-green-600 font-medium transition">💸 My Contributions</a>
          <a href="/" className="block text-gray-700 hover:text-green-600 font-medium transition">🏠 Home</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-4 md:px-10 py-10">
        <h1 className="text-4xl font-extrabold text-green-800 mb-8">👋 Hello, {userName}!</h1>

        {/* Campaign Section */}
        <section id="campaigns" className="mb-16">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Your Campaigns</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {campaigns.map((c) => (
              <div key={c.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-green-200 transition">
                <img src={c.image} alt={c.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-green-800 mb-2">{c.title}</h3>
                  <div className="h-2 bg-green-100 rounded-full mb-2">
                    <div
                      className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                      style={{ width: `${(c.raised / c.goal) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600">₹{c.raised} raised of ₹{c.goal}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contribution Section */}
        <section id="contributions">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Your Contributions</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full table-auto">
              <thead className="bg-green-100 text-green-700 text-left text-sm uppercase">
                <tr>
                  <th className="px-6 py-4">Campaign</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Date</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                {contributions.map((c) => (
                  <tr key={c.id} className="border-t">
                    <td className="px-6 py-4">{c.title}</td>
                    <td className="px-6 py-4">₹{c.amount}</td>
                    <td className="px-6 py-4">{c.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}