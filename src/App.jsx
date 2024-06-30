import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import PersonalHealthHistory from "./pages/PersonalHealthHistory.jsx";
import FamilyHealthHistory from "./pages/FamilyHealthHistory.jsx";
import Medications from "./pages/Medications.jsx";
import Diagnoses from "./pages/Diagnoses.jsx";
import Providers from "./pages/Providers.jsx";
import Clinics from "./pages/Clinics.jsx";
import Hospitalizations from "./pages/Hospitalizations.jsx";
import Surgeries from "./pages/Surgeries.jsx";
import InsurancePolicies from "./pages/InsurancePolicies.jsx";
import DailyMetrics from "./pages/DailyMetrics.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/personal-health-history" element={<PersonalHealthHistory />} />
        <Route exact path="/family-health-history" element={<FamilyHealthHistory />} />
        <Route exact path="/medications" element={<Medications />} />
        <Route exact path="/diagnoses" element={<Diagnoses />} />
        <Route exact path="/providers" element={<Providers />} />
        <Route exact path="/clinics" element={<Clinics />} />
        <Route exact path="/hospitalizations" element={<Hospitalizations />} />
        <Route exact path="/surgeries" element={<Surgeries />} />
        <Route exact path="/insurance-policies" element={<InsurancePolicies />} />
        <Route exact path="/daily-metrics" element={<DailyMetrics />} />
      </Routes>
    </Router>
  );
}

export default App;