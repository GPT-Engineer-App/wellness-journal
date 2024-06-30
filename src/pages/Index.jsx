import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-3xl text-center">Welcome to Your Personal Health Dashboard</h1>
      <p className="text-center">Manage and track your health information all in one place.</p>
      <nav className="space-x-4">
        <Link to="/personal-health-history" className="text-blue-500">Personal Health History</Link>
        <Link to="/family-health-history" className="text-blue-500">Family Health History</Link>
        <Link to="/medications" className="text-blue-500">Medications</Link>
        <Link to="/diagnoses" className="text-blue-500">Diagnoses</Link>
        <Link to="/providers" className="text-blue-500">Providers</Link>
        <Link to="/clinics" className="text-blue-500">Clinics</Link>
        <Link to="/hospitalizations" className="text-blue-500">Hospitalizations</Link>
        <Link to="/surgeries" className="text-blue-500">Surgeries</Link>
        <Link to="/insurance-policies" className="text-blue-500">Insurance Policies</Link>
        <Link to="/daily-metrics" className="text-blue-500">Daily Metrics</Link>
      </nav>
    </div>
  );
};

export default Index;