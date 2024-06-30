import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg">Health Dashboard</Link>
        <div className="space-x-4">
          <Link to="/personal-health-history" className="text-gray-300 hover:text-white">Personal Health History</Link>
          <Link to="/family-health-history" className="text-gray-300 hover:text-white">Family Health History</Link>
          <Link to="/medications" className="text-gray-300 hover:text-white">Medications</Link>
          <Link to="/diagnoses" className="text-gray-300 hover:text-white">Diagnoses</Link>
          <Link to="/providers" className="text-gray-300 hover:text-white">Providers</Link>
          <Link to="/clinics" className="text-gray-300 hover:text-white">Clinics</Link>
          <Link to="/hospitalizations" className="text-gray-300 hover:text-white">Hospitalizations</Link>
          <Link to="/surgeries" className="text-gray-300 hover:text-white">Surgeries</Link>
          <Link to="/insurance-policies" className="text-gray-300 hover:text-white">Insurance Policies</Link>
          <Link to="/daily-metrics" className="text-gray-300 hover:text-white">Daily Metrics</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;