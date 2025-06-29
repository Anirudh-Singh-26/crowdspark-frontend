import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [campaigns, setCampaigns] = useState([
    {
      id: "1",
      title: "Community Health Drive",
      creator: "Ravi Kumar",
      raised: 5000,
      goal: 10000,
    },
    {
      id: "2",
      title: "Books for All",
      creator: "Meera Patel",
      raised: 2500,
      goal: 8000,
    }
  ]);

  const [users, setUsers] = useState([
    { id: "u1", name: "Ravi Kumar", email: "ravi@example.com", role: "user" },
    { id: "u2", name: "Meera Patel", email: "meera@example.com", role: "user" },
    { id: "u3", name: "Admin User", email: "admin@example.com", role: "admin" }
  ]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const [campaignRes, userRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/campaigns`),
          axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/users`)
        ]);
        if (campaignRes.data?.length > 0) setCampaigns(campaignRes.data);
        if (userRes.data?.length > 0) setUsers(userRes.data);
      } catch (err) {
        console.warn("Backend unreachable. Using dummy data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAdminData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-red-500 mb-4 mx-auto"></div>
          <p className="text-red-700 font-semibold">Loading admin data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-red-700 mb-10 text-center">🛠 Admin Panel</h1>

      {/* Campaign Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">All Campaigns</h2>
        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="bg-red-100 text-red-800 uppercase text-xs">
              <tr>
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Creator</th>
                <th className="px-6 py-3">Raised</th>
                <th className="px-6 py-3">Goal</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((c) => (
                <tr key={c.id} className="border-b">
                  <td className="px-6 py-4 font-medium">{c.title}</td>
                  <td className="px-6 py-4">{c.creator}</td>
                  <td className="px-6 py-4">₹{c.raised}</td>
                  <td className="px-6 py-4">₹{c.goal}</td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200 transition mr-2">Approve</button>
                    <button className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-full hover:bg-red-200 transition">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Users Table */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">All Users</h2>
        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="bg-red-100 text-red-800 uppercase text-xs">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Role</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="border-b">
                  <td className="px-6 py-4 font-medium">{u.name}</td>
                  <td className="px-6 py-4">{u.email}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${u.role === 'admin' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-700'}`}>
                      {u.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full hover:bg-yellow-200 transition mr-2">Block</button>
                    <button className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-full hover:bg-red-200 transition">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}