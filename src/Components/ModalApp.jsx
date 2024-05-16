// import { useState, useEffect } from 'react';
import Close from '../assets/images/close.svg';
import TabComponent from '../Components/Tab';
import { useTranslation } from 'react-i18next';
import { IconModal, IconModalMobile } from '../Components/Icon';
import { useState, useEffect } from 'react';

export default function ModalApp({ open, onClose, children }) {

    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);

    useEffect(() => {
        const languageChangeListener = () => {
            setLanguage(i18n.language);
        };

        i18n.on('languageChanged', languageChangeListener);

        return () => {
            i18n.off('languageChanged', languageChangeListener);
        };
    }, [i18n]);

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
                                <div className="rounded-[20px] justify-center hidden md:flex">
                                    <IconModal/>
                                </div>
                                <div className='rounded-[20px] justify-center md:hidden'>
                                    <IconModalMobile/>
                                </div>
                                <button className="absolute top-0 right-0 w-[24.5px] h-[24.5px] md:w-[35px] md:h-[35px] bg-gray-300 rounded-full flex justify-center items-center" onClick={onClose}>
                                    <img className="w-[12.95px] h-[12.25px] md:w-[21px] md:h-[21px]" src={Close} alt="close"/>    
                                </button>
                            </div>
                        </div>

                        <div className='flex flex-col items-center gap-[30px]'>
                            <div className="flex w-[185px] md:w-full flex-col justify-center items-center text-center text-[20px] leading-tight md:text-[30px] md:leading-none font-bold">
                                {
                                    language === 'zh' ? (
                                        <span>{t('downloadModalTitle')}</span>
                                    ) : (
                                        <span className='md:w-[250px]'>{t('downloadModalTitle')}</span>
                                    )
                                }
                                    
                            </div>

                            <div className="flex w-[210px] md:w-[300px] flex-col justify-center text-center text-[12px] md:text-[16px] md:leading-tight font-medium">

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