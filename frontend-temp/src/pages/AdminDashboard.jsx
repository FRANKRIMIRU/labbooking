function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Admin Dashboard</h1>

      {/* Section: Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-sm text-gray-500">Total Users</h2>
          <p className="text-2xl font-bold text-blue-600">---</p>
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
    </div>
  );
}

export default AdminDashboard;
