import React, { useEffect } from "react";
import Prescription from "./prescription";
import QRSection from "./qrcode";
import { useState } from "react";
import { collection, getDoc, query, doc, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";
const DashboardSection = ({ name, uid }) => {
  const colRef = doc(db, "user", "qQr7J8vNTYRxvle1C8h3aZJXBkF3");
  const [data, setData] = useState("");
  //const q=query(colRef,where)
  const resetData = () => {
    setData("");
    getDoc(colRef).then((doc) => {
      setData(doc.data());
    });
  };
  useEffect(() => {
    resetData();
  }, []);

  const [btn, setBtn] = useState(1);
  //Selected button from the Prescriptions, Test Results, Predictions btns
  return (
    <div className="dashboard-section p-10 flex flex-col lg:grid lg:grid-cols-3 relative">
      <div className="dashboard-section__sec1 flex flex-col col-span-2 p-11  m-8 h-full bg-white rounded">
        <p className="text-4xl font-medium tracking-tight">👋 Hi {name}</p>
        <div className="dashboard-section__sec1__btnholder mt-10  ">
          <button
            onClick={() => {
              setBtn(1);
            }}
            className={
              btn === 1
                ? "p-4 rounded btn-active font-medium pl-7 pr-7 text-2xl tracking-tight	bg-blue-50"
                : "p-4 rounded btn font-medium pl-7 pr-7 text-2xl tracking-tight	bg-blue-50"
            }
          >
            Prescriptions
          </button>
          <button
            onClick={() => {
              setBtn(2);
            }}
            className={
              btn === 2
                ? "p-4 ml-4 rounded btn-active font-medium pl-7 pr-7 text-2xl tracking-tight	bg-blue-50"
                : "p-4   ml-4 rounded btn font-medium pl-7 pr-7 text-2xl tracking-tight	bg-blue-50"
            }
          >
            Test Results
          </button>
          <button
            onClick={() => {
              setBtn(3);
            }}
            className={
              btn === 3
                ? "p-4 rounded  ml-4 btn-active font-medium pl-7 pr-7 text-2xl tracking-tight	bg-blue-50"
                : "p-4 rounded  ml-4 btn font-medium  pl-7 pr-7 text-2xl tracking-tight	bg-blue-50"
            }
          >
            Predictions
          </button>
        </div>
        {btn === 1 ? <Prescription data={data.prescription} /> : ""}
      </div>
      <div className="dashboard-section__sec2 ">
        <QRSection resetData={resetData} data={data.personaldata} />
      </div>
    </div>
  );
};

export default DashboardSection;
