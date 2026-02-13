import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLogsApi } from "../api/api";

export default function Logs() {
  const [logs, setLogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getLogsApi().then(setLogs);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">Activity Logs</h2>

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
              <th className="border p-2">User</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Button</th>
              <th className="border p-2">Time</th>
            </tr>
          </thead>

          <tbody>
            {logs.map((l) => (
              <tr key={l.id}>
                <td className="border p-2">{l.id}</td>
                <td className="border p-2">{l.userId}</td>
                <td className="border p-2">{l.role}</td>
                <td className="border p-2">{l.button}</td>
                <td className="border p-2">{l.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
