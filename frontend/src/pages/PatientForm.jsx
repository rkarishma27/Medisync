import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

export default function PatientDashboard() {
  const navigate = useNavigate();

  return (
    <div className="patient-dashboard-page">
      <div className="patient-dashboard-content">
        <div className="patient-dashboard-bg-title">MediSync</div>

        <div className="patient-dashboard-grid">
          <div
            className="dashboard-card glass-red"
            onClick={() => navigate("/tickets")}
          >
            🧾
            <h3>Tickets</h3>
          </div>

          <div className="dashboard-card glass-red disabled">
            🚨
            <h3>High-Risk Alerts</h3>
          </div>

          <div className="dashboard-card glass-red disabled">
            📊
            <h3>Analytics</h3>
          </div>

          <div className="dashboard-card glass-red disabled">
            🏥
            <h3>Departments</h3>
          </div>

          <div className="dashboard-card glass-red disabled">
            ⚙️
            <h3>Settings</h3>
          </div>
        </div>
      </div>
    </div>
  );
}





