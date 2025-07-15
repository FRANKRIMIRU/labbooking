import axios from "axios";
import { useEffect, useState } from "react";

function AdminDashboard() {
  const [userCount, setUserCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);

 

  useEffect(() => {
    function fetchCount() {
      axios
        .get("http://localhost:5000/api/v1/admin/count", {
          withCredentials: true,
        })
        .then((res) => {
          setUserCount(res.data.userCount);
        })
        .catch((err) => console.error("Failed to fetch user count", err));
    }
    function fetchUsers() {
      axios.get("http://localhost:5000/api/v1/users", {
    withCredentials:true,
      })
        .then((res) => {
          const sorted = res.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setUsers(sorted);
        })
      .catch((err) => console.error("Failed to fetch users", err))
}

    fetchCount();
    fetchUsers();
    const interval = setInterval(()=>{
      fetchCount();
        fetchUsers();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Admin Dashboard</h1>

      {/* Section: Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-sm text-gray-500">Total Users</h2>
          <p className="text-2xl font-bold text-blue-600">{userCount}</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-sm text-gray-500">Total Lab Tests</h2>
          <p className="text-2xl font-bold text-blue-600">---</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-sm text-gray-500">Bookings</h2>
          <p className="text-2xl font-bold text-blue-600">---</p>
        </div>
      </div>

      {/* Section: Lab Test Controls */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Manage Lab Tests</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            + Add Test
          </button>
        </div>
        <div className="text-gray-500 text-center py-6">No tests yet.</div>
      </div>

      {/*users list */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold mb-4">Show Users</h2>
          <button
            onClick={() => setShowUsers((prev) => !prev)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {showUsers ? "Hide Users": "Show Users"}
          </button>
        </div>

        {showUsers && (<div className="overflow-x-auto">
          <table className="min-w-full bg-white border text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border">#</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Role</th>
                <th className="p-2 border">Joined</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => 
                (
                  <tr key={u._id}>
                    <td className="p-2 border">{i + 1}</td>
                    <td className="p-2 border capitalize">{u.name}</td>
                    <td className="p-2 border">{u.email}</td>
                    <td className="p-2 border capitalize">{u.role}</td>
                    <td className="p-2 border">
                      {new Date(u.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>)}
      </div>
    </div>
  );
}

export default AdminDashboard;
