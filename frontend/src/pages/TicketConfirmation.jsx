import { useLocation } from "react-router-dom";

export default function TicketConfirmation() {
  const { state } = useLocation();
  const ticketId = state?.ticketId || "N/A";

  return (
    <div className="confirmation-wrapper">
      <h1 className="brand-bg">MediSync</h1>

      <div className="glass-card confirmation-card">
        <h2>Ticket Raised Successfully</h2>
        <p className="subtext">Our team will contact you shortly.</p>

        <p className="ticket-id">
          Ticket ID: <span>#{ticketId}</span>
        </p>
      </div>
    </div>
  );
}
