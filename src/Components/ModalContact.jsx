import { useState } from 'react';
import Icon from '../assets/images/icon.svg';
import Close from '../assets/images/close.svg';

export default function ModalContact({ open, onClose, children }) {

    // State variables to manage input values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Function to handle closing the modal and clearing input values
    const handleClose = () => {
        setName(''); // Clear name input value
        setEmail(''); // Clear email input value
        setMessage(''); // Clear message input value
        onClose(); // Close the modal
    };

    return (
        //backdrop 
        <div 
            id="modal-contact"
            onClick={handleClose} 
            className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`} style={{ zIndex: 9999 }}>
            <div onClick={(e) => e.stopPropagation()} className={`w-[500px] h-[900px] bg-white rounded-[50px] shadow transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
                <div>
                    <div className="relative">
                        <div className="flex justify-center items-center mt-[50px]">
                            <div className="rounded-[20px] flex justify-center">
                                <img className="w-[100px] h-[100px]" src={Icon} alt="icon"/>
                            </div>
                            <button className="absolute top-0 right-11 w-[35px] h-[35px] bg-gray-300 rounded-full flex justify-center items-center" onClick={handleClose}>
                                <img src={Close} alt="close"/>    
                            </button>
                        </div>
                    </div>
                    
                    <div className="flex w-[320px] h-[30px] flex-col justify-center flex-shrink-0 text-black text-center text-[36px] mx-[90px] mt-[30px]"
                        style={{ fontFamily:"SF-Pro-Display-Bold", fontStyle:"normal", lineHeight:"normal" }}>
                        Send us a message
                    </div>

                    <div className="flex w-[320px] h-[20px] flex-col justify-center flex-shrink-0 text-black text-center text-[16px] mx-[90px] mt-[10px]"
                        style={{ fontFamily:"SF-Pro-Display-Medium", fontStyle:"normal", lineHeight:"normal" }}>
                        Welcome to the TTpay.io contact us page
                    </div>

                    <div className="mt-[78px] flex flex-col justify-center items-center gap-[30px]">
                        <div className="flex flex-col items-center gap-[10px]">
                            <div className="flex w-[85px] h-3 flex-col justify-center items-center flex-shrink-0">
                                Your Name
                            </div>
                            {/* <input className="w-[320px] h-[50px] flex-shrink-0 rounded-[10px] bg-[#ddd]" /> */}
                            <input className="w-[320px] h-[50px] flex-shrink-0 rounded-[10px] bg-[#ddd] px-3" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>

                        <div className="flex flex-col items-center gap-[10px]">
                            <div className="flex w-[85px] h-3 flex-col justify-center items-center flex-shrink-0">
                                Email
                            </div>
                            {/* <input className="w-[320px] h-[50px] flex-shrink-0 rounded-[10px] bg-[#ddd]"/> */}
                            <input className="w-[320px] h-[50px] flex-shrink-0 rounded-[10px] bg-[#ddd] px-3" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div className="flex flex-col items-center gap-[10px]">
                            <div className="flex w-[125px] h-3 flex-col justify-center items-center flex-shrink-0">
                                Message
                            </div>
                            {/* <input className="w-[320px] h-[200px] flex flex-shrink-0 rounded-[10px] bg-[#ddd]"/> */}
                            {/* <input className="w-[320px] h-[200px] flex-shrink-0 rounded-[10px] bg-[#ddd] px-3" value={message} onChange={(e) => setMessage(e.target.value)}/> */}
                            <textarea className="resize-none w-[320px] h-[200px] flex-shrink-0 rounded-[10px] bg-[#ddd] px-3 py-3" value={message} onChange={(e) => setMessage(e.target.value)}
                            style={{
                                overflowY: 'scroll', // Add the ability to scroll
                                // Hide scrollbar for WebKit browsers
                                scrollbarWidth: 'none', // Firefox
                                msOverflowStyle: 'none', // IE and Edge
                                WebkitOverflowScrolling: 'none', // iOS Safari
                                '&::WebkitScrollbar': {
                                  display: 'none', // Hide scrollbar for Chrome, Safari, and Opera
                                },
                              }}
                            
                            ></textarea>
                            {/* overflow-hidden */}
                        </div>
                    </div>
                    
                    <div className="w-[200px] h-[50px] rounded-[10px] bg-gradient-to-br from-indigo-600 via-indigo-800 to-black text-white flex items-center justify-center text-[20px] mt-[66px] mb-[46px] mx-[150px]" style={{ cursor: 'pointer' }}>
                        <div style={{ fontFamily: "SF-Pro-Display-Bold", fontStyle: "normal", lineHeight: "normal" }}>Send</div>
                    </div>                              
                </div>                
            </div> 
        </div>
    );
}