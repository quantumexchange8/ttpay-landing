import React from 'react'
import Arrow from '../assets/images/arrow.svg';
import QRCode from '../assets/images/qrcode.svg';
import ModalApp from '../Components/ModalApp';
import { useState } from 'react';
import ModalContact from '../Components/ModalContact';
import { useTranslation } from 'react-i18next';
import { AppleIcon, GooglePlayIcon } from '../Components/Icon';

const Footer = () => {
    const { t } = useTranslation();
    const [openModalApp, setOpenModalApp] = useState(false);
    const [openModalContact, setOpenModalContact] = useState(false);
  return (
    <div className='flex flex-col gap-[100px] md:gap-7 mb-20'>
        <div className="bg-[#f4efff] sm:w-full h-[442px] md:h-[200px] md:w-full flex justify-center">
            <div className="w-full md:w-[1000px] mx-[22px] md:mx-0 flex flex-col justify-center md:flex-row md:justify-between items-center gap-[60px]">
                <div className="flex flex-col gap-[30px]  md:w-[660px]">
                    <div className="flex flex-col items-center w-full text-center text-[32px] leading-tight font-bold md:leading-none md:text-start">
                        <div className='w-[300px] md:w-full'>
                            {t('part8ContentBoldTitle')}
                        </div>
                            
                    </div>

                    <div className="flex w-full flex-col justify-center text-center md:text-start md:w-full text-[18px] leading-tight md:text-xl md:leading-tight font-medium">
                        <div className="flex justify-center sm:justify-start sm:text-left md:w-[600px]">
                            {t('part8ContentNormal')}
                        </div>
                    </div>
                </div>
                <div>     
                    <div className="w-[225px] h-[50px] flex-shrink-0 rounded-[7px] md:rounded-[10px] bg-gradient-to-br from-primary-25 via-primary-50 to-primary-100 text-white flex items-center justify-center gap-4 font-bold" onClick={() => setOpenModalContact(true)} style={{ cursor: 'pointer' }}>
                        <div>
                            {t('part8Button')}
                        </div>
                        <img src={Arrow} alt="icon"/>
                    </div>
                    <ModalContact open={openModalContact} onClose={() => setOpenModalContact(false)}></ModalContact>
                </div>
            </div>
        </div>
        <div className="max-w-full mx-[22px] md:mx-0 flex justify-center items-center">
            <div className="w-full md:w-[1000px] flex flex-col md:flex-row md:items-center justify-between gap-[30px] md:gap-0">
                <div className="w-full md:w-[463px] flex gap-2">                 
                    <div 
                    className="w-[43.391px] h-[43.391px] md:w-[70px] md:h-[70px] flex-shrink rounded-[7px] md:rounded-[10px] bg-[#333] flex justify-center items-center hover:-translate-y-1 transition-all duration-300 ease-in-out" >
                        <div className="w-[22.289px] h-[27.274px] md:w-[35.957px] md:h-[44px] flex-shrint-0">
                            {/* <img src={AppStore} alt="appstore"/> */}
                            <AppleIcon/>
                        </div>                                                                    
                    </div>

                    <div 
                    className="w-[43.391px] h-[43.391px] md:w-[70px] md:h-[70px] flex-shrink rounded-[7px] md:rounded-[10px] bg-[#333] flex justify-center items-center hover:-translate-y-1 transition-all duration-300 ease-in-out" 
                    style={{ cursor: 'pointer' }}
                    >
                        <div className="w-[24.795px] h-[27.274px] md:w-10 md:h-11 flex-shrink-0">
                            {/* <img src={PlayStore} alt="playstore"/> */}
                            <GooglePlayIcon/>
                        </div>                      
                    </div>
                    <div 
                                className="flex w-[220px] h-[43.391px] md:w-[310px] md:h-[70px] flex-shrink-0 rounded-[7px] md:rounded-[10px] border border-gray-300 bg-white shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out"
                                onClick={() => setOpenModalApp(true)} 
                                style={{ cursor: 'pointer' }}
                            >      
                                <div className="flex justify-center items-center gap-3 md:gap-[22px] w-full">
                                    <div className="w-6 h-6 md:w-[40px] md:h-[40px]">
                                        <img src={QRCode} alt="qrcode"/>
                                    </div>                   
                                    <div className="flex w-[150px] h-5 md:w-[210px] md:h-auto flex-col justify-center flex-shrink-0 text-black text-[10px] md:text-[16px] font-medium leading-tight">
                                        Show QR to download new version app on your mobile
                                    </div>
                                </div>
                            </div>
                    <ModalApp open={openModalApp} onClose={() => setOpenModalApp(false)}>
                        
                    </ModalApp>
                </div>
                <div className="flex w-[130px] flex-col justify-center text-left md:text-right font-medium text-[#666]"
                    
                    >
                    <span>
                        <span className='font-bold'>©</span> 2024 TTPAY
                    </span>
                    <span>
                        ttpay.io
                    </span>
                    <span>
                        All rights reserved.
                    </span>
                    <span>
                        support@ttpay.io
                    </span>   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
