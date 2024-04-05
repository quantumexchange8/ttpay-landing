import React, { useState } from 'react';
import Icon from '../assets/images/icon.svg';
import World from '../assets/images/world.svg';
import DownloadIcon from '../assets/images/download.svg';
import ModalApp from '../Components/ModalApp';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

const Topbar = () => {
    const { t, i18n } = useTranslation();
    const [openModalApp, setOpenModalApp] = useState(false);

    // Function to toggle between English and Chinese
    const toggleLanguage = (langCode) => {
        i18n.changeLanguage(langCode);
    };

    return (
        <div className="TOPBAR">
            <div className="bg-[#f4efffe6] h-[70px] fixed z-50 flex justify-center backdrop-blur-sm w-full">
                <div className="flex justify-between w-full sm:w-[1000px]">
                    <div className="flex items-center px-5 w-full md:px-0">
                        <div className="flex justify-between w-full items-center h-full">
                            <div 
                                className="w-[38px] h-[38px] md:w-[50px] md:h-[50px] rounded-[10px]"
                                style={{ cursor: 'pointer' }}
                            >
                                <img src={Icon} alt="icon"/>
                            </div>
                            <div className="hidden sm:flex items-center gap-5">
                                <div className="menu-dropdown flex items-center">
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div className='flex items-center'>
                                            <Menu.Button>
                                                <img src={World} alt="icon" className="w-10 h-10 cursor-pointer" />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute top-[98px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg w-[127px] h-[80px] flex items-center justify-center text-white text-center font-inter font-bold text-lg" style={{ background: 'linear-gradient(135deg, #5200FF 0%, #772BFF 35%, #010003 100%)' }}>
                                                <div className="flex flex-col py-4 w-full">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <button
                                                                onClick={() => toggleLanguage('en')}
                                                                className={`${
                                                                    active ? 'bg-white opacity-50 text-gray-900' : 'text-white'
                                                                } group flex w-full items-center rounded-md px-2 py-2 justify-center font-xl`}
                                                            >
                                                                English
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <button
                                                                onClick={() => toggleLanguage('zh')}
                                                                className={`${
                                                                    active ? 'bg-white opacity-50 text-gray-900' : 'text-white'
                                                                } group flex w-full items-center rounded-md px-2 py-2 justify-center font-xl`}
                                                            >
                                                                中文
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                                <div className="hidden sm:block">
                                    <button 
                                        className="w-[127px] h-[50px] rounded-[10px] bg-gradient-to-br from-primary-25 via-primary-50 to-primary-100 text-white text-center text-[20px] font-bold"
                                        onClick={() => setOpenModalApp(true)}
                                        style={{ fontFamily:"SF-Pro-Display-Bold", fontStyle:"normal", lineHeight: "normal" }}
                                    >
                                        {/* {t('Topbar:downloadButton')} */}
                                        {t('downloadButton')}
                                    </button>
                                </div>
                            </div>
                            <div className="flex sm:hidden">
                                <div className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]">
                                    <div className="menu-dropdown">
                                        <Menu as="div" className="relative inline-block text-left">
                                            <div>
                                                <Menu.Button>
                                                    <img src={World} alt="icon" className="w-10 h-10 cursor-pointer" />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute top-[98px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg w-[127px] h-[80px] flex items-center justify-center text-white text-center font-inter font-bold text-lg" style={{ background: 'linear-gradient(135deg, #5200FF 0%, #772BFF 35%, #010003 100%)' }}>
                                                    <div className="flex flex-col py-4 w-full">
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <button
                                                                    onClick={() => toggleLanguage('en')}
                                                                    className={`${
                                                                        active ? 'bg-white opacity-50 text-gray-900' : 'text-white'
                                                                    } group flex w-full items-center rounded-md px-2 py-2 justify-center font-xl`}
                                                                >
                                                                    English
                                                                </button>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <button
                                                                    onClick={() => toggleLanguage('zh')}
                                                                    className={`${
                                                                        active ? 'bg-white opacity-50 text-gray-900' : 'text-white'
                                                                    } group flex w-full items-center rounded-md px-2 py-2 justify-center font-xl`}
                                                                >
                                                                    中文
                                                                </button>
                                                            )}
                                                        </Menu.Item>
                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>
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
