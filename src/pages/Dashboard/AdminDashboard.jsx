import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [campaigns, setCampaigns] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAdminData = async () => {
    try {
      const [campaignRes, userRes] = await Promise.all([
        axios.get(`${import.meta.env.VITE_BACKEND}/admin/campaigns`, {
          withCredentials: true,
        }),
        axios.get(`${import.meta.env.VITE_BACKEND}/admin/users`, {
          withCredentials: true,
        }),
      ]);

      setCampaigns(Array.isArray(campaignRes.data) ? campaignRes.data : []);
      setUsers(Array.isArray(userRes.data) ? userRes.data : []);
    } catch (err) {
      console.error("Admin fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdminData();
  }, []);

  const handleDeleteUser = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND}/admin/users/${userId}`, {
        withCredentials: true,
      });
      setUsers((prev) => prev.filter((u) => u._id !== userId));
    } catch (err) {
      console.error("User delete failed:", err);
    }
  };

  const handleDeleteCampaign = async (campaignId) => {
    if (!window.confirm("Are you sure you want to delete this campaign?"))
      return;

    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND}/admin/campaigns/${campaignId}`,
        {
          withCredentials: true,
        }
      );
      setCampaigns((prev) => prev.filter((c) => c._id !== campaignId));
    } catch (err) {
      console.error("Campaign delete failed:", err);
    }
  };

  if (loading) {
    return (
      <div className="p-8 text-center text-gray-600 text-lg">Loading...</div>
    );
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-8">
        👨‍💼 Admin Dashboard
      </h1>

      {/* Campaigns Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          📢 All Campaigns
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {campaigns.length > 0 ? (
            campaigns.map((campaign) => (
              <div
                key={campaign._id}
                className="bg-white p-6 rounded-xl shadow border border-green-100"
              >
                <h3 className="text-xl font-bold text-green-700">
                  {campaign.title}
                </h3>
                <p className="text-gray-600 mb-2">
                  👤 Created by: {campaign.owner?.username || "Unknown"}
                </p>
                <p className="text-gray-600">
                  💰 Raised: ₹{campaign.raisedAmount} / ₹{campaign.goalAmount}
                </p>
                <button
                  onClick={() => handleDeleteCampaign(campaign._id)}
                  className="mt-3 px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 text-sm"
                >
                  Delete Campaign
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No campaigns yet</p>
          )}
        </div>
      </section>

      {/* Users Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          👥 Registered Users
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {users.length > 0 ? (
            users.map((user) => (
              <div
                key={user._id}
                className="bg-white p-6 rounded-xl shadow border border-green-100"
              >
                <h3 className="text-lg font-bold text-green-700">
                  {user.username}
                </h3>
                <p className="text-gray-600">📧 {user.email}</p>
                <p className="text-gray-600">🔖 Role: {user.role}</p>
                <button
                  onClick={() => handleDeleteUser(user._id)}
                  className="mt-3 px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 text-sm"
                >
                  Delete User
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No users found</p>
          )}
        </div>
      </section>
    </div>
  );
}
