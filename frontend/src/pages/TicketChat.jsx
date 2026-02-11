import { useState } from "react";

export default function Tickets() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const submitTicket = async () => {
    setStatus("Submitting...");

    try {
      const res = await fetch("http://127.0.0.1:8001/api/ticket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "web",
          message
        }),
      });

      if (!res.ok) {
        setStatus("Server error");
        return;
      }

      const data = await res.json();
      setStatus(`Ticket ${data.ticket_id} created`);
      setMessage("");
    } catch {
      // ✅ FIX for backend warm-up
      setStatus("Backend starting… try again in a moment");
    }
  };

  return (
    <div className="center">
      <div className="glass-card">
        <h2>Create Ticket</h2>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe your issue"
        />

        <button onClick={submitTicket}>Submit</button>

        <p>{status}</p>
      </div>
    </div>
  );
}

