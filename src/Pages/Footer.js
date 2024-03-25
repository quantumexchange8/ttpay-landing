import React from 'react'
import Arrow from '../assets/images/arrow.svg';
import AppStore from '../assets/images/appstore.svg';
import PlayStore from '../assets/images/playstore.svg';
import QRCode from '../assets/images/qrcode.svg';
import ModalApp from '../Components/ModalApp';
import { useState } from 'react';
import ModalContact from '../Components/ModalContact';

const Footer = () => {
    const [openModalApp, setOpenModalApp] = useState(false);
    const [openModalContact, setOpenModalContact] = useState(false);
  return (
    <div>
        <div className="bg-[#f4efff] h-[200px] max-w-full flex justify-center">
            <div className="w-[1000px] flex justify-between items-center">
                <div className="flex flex-col gap-5 text-black">
                    <div className="flex w-[459px] h-[30px] flex-col justify-center flex-shrink-0"
                        style={{ fontFamily:"SF-Pro-Display-Bold", fontSize:"40px", fontStyle:"normal", lineHeight:"normal" }}>
                        Get the support you need
                    </div>

                    <div className="flex w-[660px] h-[66px] flex-col justify-center flex-shrink-0"
                        style={{ fontFamily:"SF-Pro-Display-Medium", fontSize:"20px", fontStyle:"normal", lineHeight:"normal" }}>
                        <div>
                            Use these comprehensive guides to understand the fundamentals of 
                        </div>
                        <div>
                            USDT (TRON) cryptocurrency. Watch easy-to-understand tutorials 
                        </div>
                        <div>
                            and become an advanced user in no time.
                        </div>                       
                    </div>
                </div>
                <div>     
                    <div className="w-[225px] h-[50px] flex-shrink-0 rounded-[10px] bg-gradient-to-br from-primary-25 via-primary-50 to-primary-100 text-white flex items-center justify-center gap-4" onClick={() => setOpenModalContact(true)} style={{ cursor: 'pointer' }}>
                        <div style={{ fontFamily:"SF-Pro-Display-Bold", fontSize:"20px", fontStyle:"normal", lineHeight: "normal",}}>
                            Start from here 
                        </div>
                        <img src={Arrow} alt="icon"/>
                    </div>
                    <ModalContact open={openModalContact} onClose={() => setOpenModalContact(false)}></ModalContact>
                </div>
            </div>
        </div>
        <div className="max-w-full flex justify-center">
            <div className="w-[1000px] h-[215px] flex justify-between mt-[26px]">
                <div className="w-[463px] h-[70px] flex-shrink-0 flex gap-2">                 
                    <div className="w-[70px] h-[70px] flex-shrink rounded-[15px] bg-[#333] flex justify-center items-center">
                        <div className="w-[35.957px] h-[44px] flex-shrint-0">
                            <img src={AppStore} alt="appstore"/>
                        </div>                                                                    
                    </div>

                    <div className="w-[70px] h-[70px] flex-shrink rounded-[15px] bg-[#333] flex justify-center items-center">
                        <div className="w-10 h-11 flex-shrink-0">
                            <img src={PlayStore} alt="playstore"/>
                        </div>                      
                    </div>

                    <div className="w-[307px] h-[70px] flex-shrink-0 rounded-[15px] border border-gray-300 bg-white shadow-md"
                                onClick={() => setOpenModalApp(true)} style={{ cursor: 'pointer' }}>                         
                        <div className="flex justify-center items-center my-[15px] gap-[22px]">
                            <div>
                                <img src={QRCode} alt="qrcode"/>
                            </div>                   
                            <div className="flex w-[210px] h-10 flex-col justify-center flex-shrink-0 text-black"
                                style={{ fontFamily:"SF-Pro-Display-Medium", fontSize:"16px", fontStyle:"normal", lineHeight:"normal" }}>
                                Show QR to download new version app on your mobile
                            </div>
                        </div>
                    </div>
                    <ModalApp open={openModalApp} onClose={() => setOpenModalApp(false)}>
                        {/* Content of the modal */}
                    </ModalApp>
                </div>

                <div className="flex w-[130px] h-[63px] flex-col justify-center flex-shrink-0"
                    style={{ color:"#666", textAlign:"right", fontFamily:"SF-Pro-Display-Regular", fontSize:"14px", fontStyle:"normal", fontWeight:"510", lineHeight:"normal" }}>
                    <div>
                        © 2024 TTPAY
                    </div>
                    <div>
                        ttpay.io
                    </div>
                    <div>
                        All rights reserved.
                    </div>
                    <div>
                        support@ttpay.io
                    </div>                      
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
