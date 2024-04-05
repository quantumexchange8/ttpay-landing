import React from 'react'
import Arrow from '../assets/images/arrow.svg';
import AppStore from '../assets/images/appstore.svg';
import PlayStore from '../assets/images/playstore.svg';
import QRCode from '../assets/images/qrcode.svg';
import ModalApp from '../Components/ModalApp';
import { useState } from 'react';
import ModalContact from '../Components/ModalContact';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    const [openModalApp, setOpenModalApp] = useState(false);
    const [openModalContact, setOpenModalContact] = useState(false);
  return (
    <div>
        <div className="bg-[#f4efff] sm:w-full h-[442px] md:h-[200px] md:w-full flex justify-center">
            <div className="flex-col w-full md:w-[1000px] flex md:flex-row justify-between items-center mb-[65px] md:mb-0">
                <div className="flex flex-col text-black md:mt-[20px]">
                    <div className="flex w-full h-[90px] md:w-[459px] md:h-[30px] flex-col justify-center flex-shrink-0 text-[40px] md:text-start text-center mt-[66px] md:mt-0 px-5 md:px-0 font-bold"
                        style={{ fontFamily:"SF-Pro-Display-Bold", fontSize:"40px", fontStyle:"normal", lineHeight:"normal" }}>
                            {t('part8ContentBoldTitle')}
                    </div>

                    <div className="flex w-full h-100px md:h-[70px] flex-col justify-center md:mt-[20px] md:w-[450px] px-5 md:px-0 text-black text-[18px] md:text-[20px] md:font-medium font-thin" style={{ fontFamily: "SF-Pro-Display-Medium", fontStyle: "normal", lineHeight: "normal" }}>
                        <div className="flex justify-center sm:justify-start px-12 sm:px-0 text-center sm:text-left">
                        {t('part8ContentNormal')}
                        </div>
                    </div>
                </div>
                <div>     
                    <div className="w-[225px] h-[50px] flex-shrink-0 rounded-[10px] bg-gradient-to-br from-primary-25 via-primary-50 to-primary-100 text-white flex items-center justify-center gap-4 font-bold" onClick={() => setOpenModalContact(true)} style={{ cursor: 'pointer' }}>
                        <div style={{ fontFamily:"SF-Pro-Display-Bold", fontSize:"20px", fontStyle:"normal", lineHeight: "normal",}}>
                            {t('part8Button')}
                        </div>
                        <img src={Arrow} alt="icon"/>
                    </div>
                    <ModalContact open={openModalContact} onClose={() => setOpenModalContact(false)}></ModalContact>
                </div>
            </div>
        </div>
        <div className="max-w-full flex-shrink-0 md:h-full flex justify-center items-center">
            <div className="w-full md:w-[1000px] md:h-[215px] flex justify-between flex-col md:flex-row">
                <div className="w-[463px] md:h-[70px] mt-[60px] px-5 md:px-0 md:mt-[40px] flex gap-2">                 
                    <div 
                    className="w-[43.391px] h-[43.391px] md:w-[70px] md:h-[70px] flex-shrink rounded-[15px] bg-[#333] flex justify-center items-center hover:-translate-y-1 transition-all duration-300 ease-in-out" 
                    style={{ cursor: 'pointer' }}
                    >
                        <div className="w-[22.289px] h-[27.274px] md:w-[35.957px] md:h-[44px] flex-shrint-0">
                            <img src={AppStore} alt="appstore"/>
                        </div>                                                                    
                    </div>

                    <div 
                    className="w-[43.391px] h-[43.391px] md:w-[70px] md:h-[70px] flex-shrink rounded-[15px] bg-[#333] flex justify-center items-center hover:-translate-y-1 transition-all duration-300 ease-in-out" 
                    style={{ cursor: 'pointer' }}
                    >
                        <div className="w-[24.795px] h-[27.274px] md:w-10 md:h-11 flex-shrink-0">
                            <img src={PlayStore} alt="playstore"/>
                        </div>                      
                    </div>

                    <div 
                    className="w-[190.3px] h-[43.391px] md:w-[307px] md:h-[70px] flex-shrink-0 rounded-[15px] border border-gray-300 bg-white shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out"
                    onClick={() => setOpenModalApp(true)} 
                    style={{ cursor: 'pointer' }}
                    >                         
                        <div className="flex justify-center items-center my-[8px] md:my-[15px] gap-[22px]">
                            <div className="w-[24.795px] h-[24.795px] md:w-[40px] md:h-[40px]">
                                <img src={QRCode} alt="qrcode"/>
                            </div>                   
                            <div 
                            className="flex w-[120px] h-5 md:w-[210px] md:h-10 flex-col justify-center flex-shrink-0 text-black text-[10px] md:text-[16px]"
                            style={{ fontFamily:"SF-Pro-Display-Medium", fontStyle:"normal", lineHeight:"normal" }}
                            >
                                Show QR to download new version app on your mobile
                            </div>
                        </div>
                    </div>
                    <ModalApp open={openModalApp} onClose={() => setOpenModalApp(false)}>
                        {/* Content of the modal */}
                    </ModalApp>
                </div>
                <div className="flex w-[130px] h-[62px] flex-col justify-center flex-shrink-0 text-left md:text-right pl-5 md:pl-0 mt-[36px] md:mt-[40px] mb-[105.61px] md:mb-0 font-medium"
                    style={{ color:"#666", fontFamily:"SF-Pro-Display-Regular", fontSize:"14px", fontStyle:"normal", fontWeight:"510", lineHeight:"normal" }}>
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

                {/* <div className="flex w-[130px] h-[63px] flex-col justify-center flex-shrink-0"
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
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Footer
