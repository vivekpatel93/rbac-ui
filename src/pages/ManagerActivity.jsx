import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getManagerActivityApi } from "../api/api";

export default function ManagerActivity() {

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    // ================================
    // NEW: Load Manager Activity
    // ================================
    getManagerActivityApi()
      .then(setData)
      .catch(console.log);

  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow">

        <div className="flex justify-between mb-4">

          <h2 className="text-xl font-bold">
            Manager Login / Logout Logs
          </h2>

          <button
            onClick={() => navigate("/dashboard")}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Back
          </button>

        </div>

        <table className="w-full border">

          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Username</th>
              <th className="border p-2">Action</th>
              <th className="border p-2">Time</th>
            </tr>
          </thead>

          <tbody>
            {data.map((d) => (
              <tr key={d.id}>
                <td className="border p-2">{d.id}</td>
                <td className="border p-2">{d.username}</td>
                <td className="border p-2">{d.action}</td>

                {/* NEW: Format Time */}
                <td className="border p-2">
                  {new Date(d.timestamp).toLocaleString()}
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
}
