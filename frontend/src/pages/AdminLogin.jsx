import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  return (
    <div className="center">
      <div className="glass-card">
        <h2>Admin Login</h2>
        <input placeholder="Admin ID" />
        <input type="password" placeholder="Password" />
        <button className="btn" onClick={() => navigate("/admin-dashboard")}>
          Login
        </button>
      </div>
    </div>
  );
}