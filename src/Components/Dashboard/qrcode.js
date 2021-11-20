import React from "react";
import Loader from "react-loader-spinner";
import QRCode from "qrcode";
import { IoCall, IoArrowRedoCircleSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
const QRSection = ({ text }) => {
  const [src, setSrc] = useState("");
  useEffect(() => {
    QRCode.toDataURL("sdsdd").then((data) => {
      setSrc(data);
    });
  }, []);
  return (
    <div className="qrcode-section m-8 flex flex-col items-center   h-full bg-white rounded">
      <div className="container flex flex-col mt-10 justify-center items-center w-full">
        {src ? (
          <img src={src} className="h-80" alt="QR" />
        ) : (
          <Loader type="TailSpin" color="#575ce5" height={65} width={65} />
        )}
      </div>
      <p className="text-4xl font-medium tracking-tight">Ben Bates</p>
      <div className="w-full">
        <div className="p-4 m-6 flex flex-row items-center justify-between relative bg-gray-100">
          <IoCall size="2.4em" color="#575ce5" />
          <p className="bg-transparent font-bold input-text text-2xl outline-none ml-3 text-gray-500">
            (602)-327-4129
          </p>
        </div>
        <div className="flex m-6  flex-row justify-between ">
          <div className="p-4 w-full mr-4  flex flex-row items-center justify-between    relative bg-gray-100">
            <p className="bg-transparent input-text text-2xl outline-none ml-3 text-gray-500">
              Gender: <span className=" font-bold">Male</span>
            </p>
          </div>
          <div className="p-4 w-full   flex flex-row items-center justify-between    relative bg-gray-100">
            <p className="bg-transparent  input-text text-2xl outline-none ml-3 text-gray-500">
              Age: <span className=" font-bold">29</span>
            </p>
          </div>
        </div>
        <div className="w-full  flex justify-center items-center">
          <button className="p-4 flex flex-row justify-center items-center ml-6 rounded btn-2 mt-6 font-medium pl-7 pr-7 text-xl tracking-tight		bg-blue-50">
            SHARE PROFILE
            <IoArrowRedoCircleSharp className="ml-5" size="2em" color="#fff" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default QRSection;
