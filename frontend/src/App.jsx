import { BrowserRouter, Routes, Route } from "react-router-dom";

import RoleSelect from "./pages/RoleSelect";
import Login from "./pages/Login";
import PatientForm from "./pages/PatientForm";
import TicketChat from "./pages/TicketChat";
import TicketConfirmation from "./pages/TicketConfirmation";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoleSelect />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PatientForm />} />
        <Route path="/tickets" element={<TicketChat />} />
        <Route path="/ticket-confirmation" element={<TicketConfirmation />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
