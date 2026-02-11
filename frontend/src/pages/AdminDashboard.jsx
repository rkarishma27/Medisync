import { useEffect, useState } from "react";
import "../styles/dashboard.css";

export default function AdminDashboard() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Load existing tickets (safe even if endpoint not present)
    fetch("http://127.0.0.1:8001/api/tickets")
      .then(res => res.ok ? res.json() : [])
      .then(data => setTickets(data))
      .catch(() => {});

    const socket = new WebSocket("ws://127.0.0.1:8001/ws/admin");

    // 🔑 keep websocket alive
    socket.onopen = () => {
      socket.send("admin_connected");
    };

    socket.onmessage = (event) => {
      const payload = JSON.parse(event.data);
      if (payload.action === "new_ticket") {
        setTickets(prev => [payload.data, ...prev]);
      }
    };

    return () => socket.close();
  }, []);

  return (
    <div className="center">
      <div className="glass-card" style={{ width: "800px" }}>
        <h2>Admin Dashboard</h2>
        <p>All patient tickets will appear here</p>

        {tickets.length === 0 && <p>No tickets yet</p>}

        {tickets.map((ticket, index) => (
          <div
            key={ticket.ticket_id || index}
            style={{
              marginTop: "12px",
              padding: "14px",
              background: "rgba(0,0,0,0.35)",
              borderRadius: "12px"
            }}
          >
            <strong>{ticket.ticket_id}</strong>

            <p style={{ margin: "6px 0" }}>
              {ticket.message}
            </p>

            <div style={{ fontSize: "0.85rem", opacity: 0.9 }}>
              <div>
                <strong>Category:</strong>{" "}
                {ticket.category || "Unclassified"}
              </div>

              <div>
                <strong>Severity:</strong>{" "}
                {ticket.severity
                  ? typeof ticket.severity === "object"
                    ? `${ticket.severity.risk_level} (${ticket.severity.score})`
                    : ticket.severity
                  : "N/A"}
              </div>

              <div>
                <strong>Source:</strong> {ticket.source || "web"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


