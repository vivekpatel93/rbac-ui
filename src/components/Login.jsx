import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../api/api";
import { getRoleFromToken } from "../utils/jwt";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const login = async () => {
  //   try {
  //     const data = await loginApi({ username, password });

  //     if (!data.token) throw new Error();

  //     const role = getRoleFromToken(data.token);

  //     localStorage.setItem("token", data.token);
  //     localStorage.setItem("role", role);

  //   // NEW: Log Manager Login
  //   if (role === "MANAGER") {
  //   await managerLoginApi();
  //   }

  //     navigate("/dashboard");
  //   } catch {
  //     alert("Invalid Credentials");
  //   }
  // };

  const login = async () => {
  try {
    console.log("Sending:", { username, password });

    const res = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    console.log("Response:", data);

    if (!res.ok) {
      throw new Error("Login failed");
    }

    const role = getRoleFromToken(data.token);

    localStorage.setItem("token", data.token);
    localStorage.setItem("role", role);

    navigate("/dashboard");
  } catch (e) {
    console.error(e);
    alert("Invalid Credentials");
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <input
          className="border p-2 w-full mb-3 rounded"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-4 rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}
