import React from "react";
import Icon from '../assets/images/icon.svg';
import World from '../assets/images/world.svg';


const Topbar = () => {
  return (
    <div>
        <div className="bg-[#f4efffe6] max-w-full w-full h-[70px] fixed z-50 flex justify-center backdrop-blur-sm">
            <div className="w-[1000px] flex justify-between items-center">
                <div className="w-[50px] h-[50px] rounded-[10px]">
                    <img src={Icon} alt="icon"/>
                </div>

                <div className="flex items-center gap-9">
                    <div className="w-10 h-10">
                        <img src={World} alt="icon"/>
                    </div>
                    <div>
                        <button className="w-[127px] h-[50px] rounded-[10px] bg-gradient-to-br from-primary-25 via-primary-50 to-primary-100 text-white text-center text-[20px]"
                        style={{ fontFamily:"SF-Pro-Display-Bold", fontStyle:"normal", lineHeight: "normal",}}>Download</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
      
  );
};

export default Topbar;