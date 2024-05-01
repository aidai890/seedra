import React, { useState } from "react";
import korzina from "../../assets/Aidai/korzina.svg";
import heard from "../../assets/Aidai/heard.svg";
const Icons = () => {
  const [popup,setPopup]=useState(false)

  return (
    <div>
      <div className="flex gap-6 ml-[-30px] pt-5 ">
        <img className="relative" src={heard} alt="" />
        <div className="absolute">
          <p className="ml-[20px] text-green-500">0</p>
        </div>
        <img className="relative" onClick={()=>{
          setPopup(!popup)
        }} src={korzina} alt="" />
        {popup &&(
          <div>
            <p>korzina</p>
          </div>
        )}
        <div className="absolute">
          <p className="ml-[65px] text-green-500">0</p>
        </div>
      </div>

      
    </div>
  );
};

export default Icons;
