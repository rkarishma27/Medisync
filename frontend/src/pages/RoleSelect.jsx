import { useNavigate } from "react-router-dom";

export default function RoleSelect() {
  const navigate = useNavigate();

  return (
    <div className="role-page">
      {/* Top Navbar */}
      <div className="role-navbar">
        <div className="nav-left">
          <img src="/logo.png" alt="MediSync Logo" className="nav-logo" />
          <div>
            <h2>MediSync</h2>
            <p>Hello, Guest.</p>
          </div>
        </div>

        <div className="nav-right">Contact us</div>
      </div>

      {/* Cards */}
      <div className="role-center">
        <div
          className="role-card glass-red"
          onClick={() => navigate("/login")}
        >
          👤
          <h3>Patient</h3>
          <p>Raise support tickets</p>
        </div>

        <div
          className="role-card glass-red"
          onClick={() => navigate("/admin-login")}
        >
          🛠
          <h3>Admin</h3>
          <p>Manage all tickets</p>
        </div>
      </div>
    </div>
  );
}