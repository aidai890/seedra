import React, { useState } from "react";
import korzina from "../../assets/Aidai/korzina.svg";
import heard from "../../assets/Aidai/heard.svg";

const Icons = () => {
  const [popup, setPopup] = useState(false);
  const [love, setLove] = useState(false);

  return (
    <div className="flex pt-7">
      <div className="relative">
        <img
          onClick={() => {
            setLove(!love);
          }}
          src={heard}
          alt=""
        />
        {love && (
          <div className="mt-[29px] bg-white z-50 absolute border-2 w-[30rem] ml-[-29rem]">
            <p>love</p>
          </div>
        )}
      </div>
      <p className="text-green-600">0</p>
      <div className="relative">
        <img
          onClick={() => {
            setPopup(!popup);
          }}
          src={korzina}
          alt=""
        />
        {popup && (
          <div className="mt-[29px] bg-white z-50 absolute border-2 w-[30rem] ml-[-29rem]">
            <p>korzina</p>
          </div>
        )}
      </div>
      <p className="text-green-600">0</p>
    </div>
  );
};

export default Icons;
