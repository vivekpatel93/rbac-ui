
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login"
import Dashboard from "./components/Dashboard";
import Logs from "./components/Logs";

export default function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={token ? <Dashboard /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}