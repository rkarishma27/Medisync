import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("mobile");

  return (
    <div className="login-page">
      {/* Background Branding */}
      <div className="login-bg-text">MediSync</div>

      <div className="login-card glass-card">
        <h3 className="welcome-text">Welcome to</h3>
        <h2 className="brand-text">MediSync</h2>

        {/* Mode Switch */}
        <div className="login-mode-switch">
          <button
            className={mode === "mobile" ? "active" : ""}
            onClick={() => setMode("mobile")}
          >
            Login with Mobile
          </button>
          <button
            className={mode === "email" ? "active" : ""}
            onClick={() => setMode("email")}
          >
            Login with Email
          </button>
        </div>

        {/* Forms */}
        {mode === "mobile" && (
          <>
            <input placeholder="Username" />
            <input placeholder="Mobile Number" />
            <input type="password" placeholder="PIN" />
          </>
        )}

        {mode === "email" && (
          <>
            <input placeholder="Username" />
            <input placeholder="Email ID" />
            <input type="password" placeholder="Password" />
          </>
        )}

        <button className="btn" onClick={() => navigate("/dashboard")}>
          Login
        </button>
      </div>
    </div>
  );
}