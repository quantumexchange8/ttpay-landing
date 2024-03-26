import React from "react";
import Icon from '../assets/images/icon.svg';
import World from '../assets/images/world.svg';
import ModalApp from '../Components/ModalApp';
import { useState } from 'react';


const Topbar = () => {
    const [openModalApp, setOpenModalApp] = useState(false);
  return (
    <div>
        <div className="bg-[#f4efffe6] max-w-full w-full h-[70px] fixed z-50 flex justify-center backdrop-blur-sm">
            <div className="w-[1000px] flex justify-between items-center">
                <div 
                className="w-[50px] h-[50px] rounded-[10px]"
                style={{ cursor: 'pointer' }}
                >
                    <img src={Icon} alt="icon"/>
                </div>

                <div className="flex items-center gap-9">
                    <div 
                    className="w-10 h-10"
                    style={{ cursor: 'pointer' }}
                    >
                        <img src={World} alt="icon"/>
                    </div>
                    <div>
                        <button className="w-[127px] h-[50px] rounded-[10px] bg-gradient-to-br from-primary-25 via-primary-50 to-primary-100 text-white text-center text-[20px]" 
                        onClick={() => setOpenModalApp(true)}
                        style={{ fontFamily:"SF-Pro-Display-Bold", fontStyle:"normal", lineHeight: "normal",}}>Download</button>
                    </div>
                    <div className="topBarModal" style={{ position: "relative" }}>
                        <ModalApp 
                        open={openModalApp} 
                        onClose={() => setOpenModalApp(false)}
                        style = {{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)"
                        }}
                        >
                        </ModalApp>
                    </div>
                </div>
            </div>
        </div>
    </div>
      
  );
};

export default Topbar;