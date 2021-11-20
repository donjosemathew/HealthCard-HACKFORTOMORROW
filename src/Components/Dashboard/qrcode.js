import React from "react";
import Loader from "react-loader-spinner";
import QRCode from "qrcode";
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
    </div>
  );
};
export default QRSection;
