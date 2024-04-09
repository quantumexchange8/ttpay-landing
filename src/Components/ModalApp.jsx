// import { useState, useEffect } from 'react';
import Icon from '../assets/images/icon.svg';
import Close from '../assets/images/close.svg';
import TabComponent from '../Components/Tab';
import { useTranslation } from 'react-i18next';

export default function ModalApp({ open, onClose, children }) {

    const { t } = useTranslation();

    return (
        //backdrop 
        <div 
            id="modal-app"
            onClick={onClose}
            className={`fixed inset-0 flex justify-center z-50 items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>
            <div onClick={(e) => e.stopPropagation()} className={`p-7 md:w-[500px] w-[349px] h-auto md:h-[800px] bg-white rounded-[20px] md:rounded-[30px] shadow transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
                <div className="flex flex-col gap-10">
                    <div className='flex flex-col gap-5'>
                        <div className="relative">
                            <div className="flex justify-center items-center">
                                <div className="rounded-[20px] flex justify-center">
                                    <img className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]" src={Icon} alt="icon"/>
                                </div>
                                <button className="absolute top-0 right-0 w-[24.5px] h-[24.5px] md:w-[35px] md:h-[35px] bg-gray-300 rounded-full flex justify-center items-center" onClick={onClose}>
                                    <img className="w-[12.95px] h-[12.25px] md:w-[21px] md:h-[21px]" src={Close} alt="close"/>    
                                </button>
                            </div>
                        </div>

                        <div className='flex flex-col items-center gap-2'>
                            <div className="flex w-full md:w-[250px] md:h-[80px] flex-col justify-center flex-shrink-0 text-black text-center text-[20px] md:text-[36px] font-bold"
                                style={{ fontFamily:"SF-Pro-Display-Bold", fontStyle:"normal", lineHeight:"normal" }}>
                                    {t('downloadModalTitle')}
                            </div>

                            <div className="flex w-[210px] md:w-[300px] md:h-[50px] flex-col justify-center flex-shrink-0 text-black text-center text-[12px] md:text-[16px] font-medium"
                                style={{ fontFamily:"SF-Pro-Display-Medium", fontStyle:"normal", lineHeight:"normal" }}>

                                    {t('downloadModalContent')}
                            </div>
                        </div>
                    </div>
                    <TabComponent></TabComponent>          
                </div>                    
            </div> 
        </div>
    );
}