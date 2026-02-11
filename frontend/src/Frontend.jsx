import { BrowserRouter, Routes, Route } from "react-router-dom";
import PatientForm from "./pages/PatientForm";
import AdminDashboard from "./pages/AdminDashboard";

export default function Frontend() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PatientForm />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
