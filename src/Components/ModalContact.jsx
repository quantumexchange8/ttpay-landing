import { useState, useEffect } from 'react';
import Icon from '../assets/images/icon.svg';
import Close from '../assets/images/close.svg';
import { useTranslation } from 'react-i18next';

export default function ModalContact({ open, onClose, children }) {

    // State variables to manage input values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const { t, i18n } = useTranslation();

    // // Function to handle closing the modal and clearing input values
    // const handleClose = () => {
    //     setName(''); // Clear name input value
    //     setEmail(''); // Clear email input value
    //     setMessage(''); // Clear message input value
    //     onClose(); // Close the modal
    // };

    // Effect to restore form data when modal opens
    useEffect(() => {
        if (open) {
            const storedName = sessionStorage.getItem('contactFormName');
            const storedEmail = sessionStorage.getItem('contactFormEmail');
            const storedMessage = sessionStorage.getItem('contactFormMessage');

            if (storedName) setName(storedName);
            if (storedEmail) setEmail(storedEmail);
            if (storedMessage) setMessage(storedMessage);
        }
    }, [open]);

    // Function to handle closing the modal and saving input values
    const handleClose = () => {
        sessionStorage.setItem('contactFormName', name);
        sessionStorage.setItem('contactFormEmail', email);
        sessionStorage.setItem('contactFormMessage', message);

        onClose(); // Close the modal
    };

    // Clear sessionStorage when the component unmounts
    useEffect(() => {
        return () => {
            sessionStorage.removeItem('contactFormName');
            sessionStorage.removeItem('contactFormEmail');
            sessionStorage.removeItem('contactFormMessage');
        };
    }, []);

    return (
        //backdrop 
        <div 
            id="modal-contact"
            onClick={handleClose} 
            className={`fixed inset-0 flex justify-center z-50 items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>
            <div onClick={(e) => e.stopPropagation()} className={`md:w-[500px] w-[349px] md:h-[900px] h-[628.20px] bg-white rounded-[50px] shadow transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
                <div>
                    <div className="relative">
                        <div className="flex justify-center items-center mt-[36px] md:mt-[50px]">
                            <div className="rounded-[20px] flex justify-center">
                                <img className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]" src={Icon} alt="icon"/>
                            </div>
                            <button className="absolute top-0 right-11 w-[24.5px] h-[24.5px] md:w-[35px] md:h-[35px] bg-gray-300 rounded-full flex justify-center items-center" onClick={handleClose}>
                                <img className="w-[12.95px] h-[12.25px] md:w-[21px] md:h-[21px]" src={Close} alt="close"/>    
                            </button>
                        </div>
                    </div>
                    
                    <div className="flex w-[226px] h-[20px] md:w-[320px] md:h-[30px] flex-col justify-center flex-shrink-0 text-black text-center text-[24px] mt-[19.59px] mx-[61.5px] md:text-[36px] md:mx-[90px] md:mt-[30px] font-bold"
                        style={{ fontFamily:"SF-Pro-Display-Bold", fontStyle:"normal", lineHeight:"normal" }}>
                            {t('contactModalTitle')}
                    </div>

                    <div className="flex w-[239px] h-[10px] md:w-[320px] md:h-[20px] flex-col justify-center flex-shrink-0 text-black text-center text-[12px] mx-[54.5px] mt-[10px] md:text-[16px] md:mx-[90px] md:mt-[10px] font-medium"
                        style={{ fontFamily:"SF-Pro-Display-Medium", fontStyle:"normal", lineHeight:"normal" }}>
                            {t('contactTitleNormal')}
                    </div>

                    <form className="mt-[45px] md:mt-[78px] flex flex-col justify-center items-center">
                        <div className="flex flex-col items-center gap-[20px] md:gap-[30px]">
                            <div className="flex flex-col items-center gap-[10px]">
                                <label htmlFor="name" className="flex w-[85px] h-3 flex-col justify-center items-center flex-shrink-0 font-normal">
                                    {t('formName')}
                                </label>
                                <input type="name" id="name" className="w-[223.36px] h-[34.9px] md:w-[320px] md:h-[50px] flex-shrink-0 rounded-[10px] bg-[#ddd] px-3" value={name} onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <div className="flex flex-col items-center gap-[10px]">
                                <label htmlFor="email" className="flex w-[85px] h-3 flex-col justify-center items-center flex-shrink-0 font-normal">
                                    {t('formEmail')}
                                </label>
                                <input type="email" id="email" className="w-[223.36px] h-[34.9px] md:w-[320px] md:h-[50px] flex-shrink-0 rounded-[10px] bg-[#ddd] px-3" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="flex flex-col items-center gap-[10px]">
                                <label htmlFor="message" className="flex w-[85px] h-3 flex-col justify-center items-center flex-shrink-0 font-normal">
                                    {t('formMessage')}
                                </label>
                                <textarea className="resize-none w-[223.36px] h-[139.6px] md:w-[320px] md:h-[200px] flex-shrink-0 rounded-[10px] bg-[#ddd] px-3 py-3" value={message} onChange={(e) => setMessage(e.target.value)} required
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
                                {/* <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required /> */}
                            </div>
                        </div>
                        <div className="send-button">
                            <button type="submit" className="w-[139.6px] h-[34.9px] md:w-[200px] md:h-[50px] rounded-[10px] bg-gradient-to-br from-indigo-600 via-indigo-800 to-black text-white flex items-center justify-center text-[13.96px] md:text-[20px] mt-[46.07px] md:mt-[66px] md:mb-[46px] md:mx-[150px] font-bold" style={{ cursor: 'pointer' }}>
                                {t('formSend')}
                            </button>
                        </div>
                    </form>

                    {/* <div className="mt-[78px] flex flex-col justify-center items-center gap-[30px]">
                        <div className="flex flex-col items-center gap-[10px]">
                            <div className="flex w-[85px] h-3 flex-col justify-center items-center flex-shrink-0">
                                Your Name
                            </div>
                            <input className="w-[320px] h-[50px] flex-shrink-0 rounded-[10px] bg-[#ddd] px-3" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>

                        <div className="flex flex-col items-center gap-[10px]">
                            <div className="flex w-[85px] h-3 flex-col justify-center items-center flex-shrink-0">
                                Email
                            </div>
                            <input className="w-[320px] h-[50px] flex-shrink-0 rounded-[10px] bg-[#ddd] px-3" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div className="flex flex-col items-center gap-[10px]">
                            <div className="flex w-[125px] h-3 flex-col justify-center items-center flex-shrink-0">
                                Message
                            </div>
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
                        </div>
                    </div> */}
                    
                    {/* <div className="w-[200px] h-[50px] rounded-[10px] bg-gradient-to-br from-indigo-600 via-indigo-800 to-black text-white flex items-center justify-center text-[20px] mt-[66px] mb-[46px] mx-[150px]" style={{ cursor: 'pointer' }}>
                        <div style={{ fontFamily: "SF-Pro-Display-Bold", fontStyle: "normal", lineHeight: "normal" }}>Send</div>
                    </div> */}
                </div>                
            </div> 
        </div>
    );
}