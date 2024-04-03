// import { useState, useEffect } from 'react';
import Icon from '../assets/images/icon.svg';
import Close from '../assets/images/close.svg';
import TabComponent from '../Components/Tab';

export default function ModalApp({ open, onClose, children }) {

    return (
        //backdrop 
        <div 
            id="modal-app"
            onClick={onClose}
            className={`fixed inset-0 flex justify-center z-50 items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>
            <div onClick={(e) => e.stopPropagation()} className={`md:w-[500px] w-[349px] md:h-[800px] h-[450px] bg-white rounded-[50px] shadow transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
                <div>
                    
                    <div className="relative">
                        <div className="flex justify-center items-center mt-[36px] md:mt-[50px]">
                            <div className="rounded-[20px] flex justify-center">
                                <img className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]" src={Icon} alt="icon"/>
                            </div>
                            <button className="absolute top-0 right-11 w-[24.5px] h-[24.5px] md:w-[35px] md:h-[35px] bg-gray-300 rounded-full flex justify-center items-center" onClick={onClose}>
                                <img className="w-[12.95px] h-[12.25px] md:w-[21px] md:h-[21px]" src={Close} alt="close"/>    
                            </button>
                        </div>
                    </div>
                    
                    <div className="flex w-[160px] h-[48px] md:w-[250px] md:h-[80px] flex-col justify-center flex-shrink-0 text-black text-center text-[20px] mx-[95px] mt-[20px] md:text-[36px] md:mx-[125px] md:mt-[30px]"
                        style={{ fontFamily:"SF-Pro-Display-Bold", fontStyle:"normal", lineHeight:"normal" }}>
                        Install the TTpay.io Wallet
                    </div>

                    <div className="flex w-[210px] h-[40px] md:w-[300px] md:h-[50px] flex-col justify-center flex-shrink-0 text-black text-center text-[12px] md:text-[16px] mx-[70px] md:mx-[100px] mt-[20px]"
                        style={{ fontFamily:"SF-Pro-Display-Medium", fontStyle:"normal", lineHeight:"normal" }}>
                        Scan this QR code with your device's camera, then follow the instructions to download the app.
                    </div>
                    
                    <TabComponent></TabComponent>          
                </div>                    
            </div> 
        </div>
    );
}