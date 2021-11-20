import React from "react";
import QRSection from "./qrcode";

const DashboardSection = () => {
  return (
    <div className="dashboard-section p-10 grid grid-cols-3 relative">
      <div className="dashboard-section__sec1 col-span-2 p-11  m-8 h-full bg-white rounded">
        <p className="text-4xl font-medium tracking-tight">👋 Hi Ben Bates</p>
        <div className="dashboard-section__sec1__btnholder mt-10  ">
          <button className="p-4 rounded btn font-medium pl-7 pr-7 text-2xl tracking-tight		bg-blue-50">
            Prescriptions
          </button>
          <button className="p-4 ml-6 rounded btn font-medium pl-7 pr-7 text-2xl tracking-tight		bg-blue-50">
            Test Results
          </button>
          <button className="p-4 ml-6 rounded btn font-medium pl-7 pr-7 text-2xl tracking-tight		bg-blue-50">
            Predictions
          </button>
        </div>
      </div>
      <div className="dashboard-section__sec2 ">
        <QRSection />
      </div>
    </div>
  );
};

export default DashboardSection;
