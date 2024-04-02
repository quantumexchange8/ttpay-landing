import React, { useState } from "react";
import Icon from '../assets/images/icon.svg';
import World from '../assets/images/world.svg';
import DownloadIcon from '../assets/images/download.svg';
import ModalApp from '../Components/ModalApp';

const Topbar = () => {
    const [openModalApp, setOpenModalApp] = useState(false);

    return (
        <div className="TOPBAR">
            <div className="bg-[#f4efffe6] h-[70px] fixed z-50 flex justify-center backdrop-blur-sm w-full">
                <div className="flex justify-between w-full sm:w-[1000px]">
                    <div className="flex items-center px-5 w-full md:px-0">
                    {/* sm:w-[1000px] */}
                    {/* z */}
                        <div className="flex justify-between w-full items-center h-full">
                            <div 
                                className="w-[50px] h-[50px] rounded-[10px]"
                                style={{ cursor: 'pointer' }}
                            >
                                <img src={Icon} alt="icon"/>
                            </div>
                            <div className="hidden sm:flex items-center gap-5">
                                {/* World icon positioned above the start-end container */}
                                <div className="">
                                {/* absolute top-0 left-0 mt-[-50px] ml-2 w-full h-full */}
                                    <img 
                                        src={World} 
                                        alt="icon"
                                        className="w-10 h-10"
                                        style={{ cursor: 'pointer' }}
                                    />
                                </div>
                                <div className="hidden sm:block">
                                    <button 
                                        className="w-[127px] h-[50px] rounded-[10px] bg-gradient-to-br from-primary-25 via-primary-50 to-primary-100 text-white text-center text-[20px]"
                                        onClick={() => setOpenModalApp(true)}
                                        style={{ fontFamily:"SF-Pro-Display-Bold", fontStyle:"normal", lineHeight: "normal" }}
                                    >
                                        Download
                                    </button>
                                </div>
                            </div>
                            <div className="flex sm:hidden">
                                {/* World icon positioned above the start-end container */}
                                <div className="">
                                {/* absolute top-0 left-0 mt-[-50px] ml-2 w-full h-full */}
                                    <img 
                                        src={World} 
                                        alt="icon"
                                        className="w-10 h-10"
                                        style={{ cursor: 'pointer' }}
                                    />
                                </div>
                            </div>
                            <div className="flex sm:hidden">
                                <img 
                                    src={DownloadIcon} 
                                    alt="Download" 
                                    style={{ cursor: 'pointer' }} 
                                    onClick={() => setOpenModalApp(true)} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalApp open={openModalApp} onClose={() => setOpenModalApp(false)} />
        </div>
    );
};

export default Topbar;