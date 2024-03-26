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
            <div onClick={(e) => e.stopPropagation()} className={`w-[500px] h-[800px] bg-white rounded-[50px] shadow transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
                <div>
                    <div className="relative">
                        <div className="flex justify-center items-center mt-[50px]">
                            <div className="rounded-[20px] flex justify-center">
                                <img className="w-[100px] h-[100px]" src={Icon} alt="icon"/>
                            </div>
                            <button className="absolute top-0 right-11 w-[35px] h-[35px] bg-gray-300 rounded-full flex justify-center items-center" onClick={onClose}>
                                <img src={Close} alt="close"/>    
                            </button>
                        </div>
                    </div>
                    
                    <div className="flex w-[250px] h-[80px] flex-col justify-center flex-shrink-0 text-black text-center text-[36px] mx-[125px] mt-[30px]"
                        style={{ fontFamily:"SF-Pro-Display-Bold", fontStyle:"normal", lineHeight:"normal" }}>
                        Install the TTpay.io Wallet
                    </div>

                    <div className="flex w-[300px] h-[50px] flex-col justify-center flex-shrink-0 text-black text-center text-[16px] mx-[100px] mt-[20px]"
                        style={{ fontFamily:"SF-Pro-Display-Medium", fontStyle:"normal", lineHeight:"normal" }}>
                        Scan this QR code with your device's camera, then follow the instructions to download the app.
                    </div>
                    
                    <TabComponent></TabComponent>          
                </div>                    
            </div> 
        </div>
    );
}