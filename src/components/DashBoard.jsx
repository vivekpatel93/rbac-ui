import { useNavigate } from "react-router-dom";
import { logApi } from "../api/api";

export default function Dashboard() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>

          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>

        <p className="mb-4">Role: <b>{role}</b></p>

        {role === "USER" && (
          <div className="flex gap-4">
            <button
              onClick={() => logApi("A")}
              className="bg-green-500 text-white px-6 py-2 rounded"
            >
              Button A
            </button>

            <button
              onClick={() => logApi("B")}
              className="bg-purple-500 text-white px-6 py-2 rounded"
            >
              Button B
            </button>
          </div>
        )}

        {(role === "ADMIN" || role === "MANAGER") && (
          <button
            onClick={() => navigate("/logs")}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            View Logs
          </button>
        )}
      </div>
    </div>
  );
}
