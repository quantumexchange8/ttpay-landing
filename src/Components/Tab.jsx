import { Tab } from '@headlessui/react';
import { useState } from 'react';
import AppStoreBlack from '../assets/images/appstore-black.svg';
import AppStoreLeafBlack from '../assets/images/appstore-leaf-black.svg';
import AppStoreGrey from '../assets/images/appstore-grey.svg';
import AppStoreLeafGrey from '../assets/images/appstore-leaf-grey.svg';
import PlayStore from '../assets/images/playstore.svg';
import AppStoreCode from '../assets/images/appstore-code.svg';
import PlayStoreCode from '../assets/images/playstore-code.svg';
import DownloadPhone from '../assets/images/download-phone.svg'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [selectedTab, setSelectedTab] = useState('ios'); // Initialize selectedTab state

  return (
    <div className='w-full flex flex-col items-center gap-12'>
      <Tab.Group>
        <Tab.List className="w-[245px] h-[46.2px] md:w-[350px] md:h-[66px] flex-shrink-0 rounded-[10px] bg-[#CCCCCC] flex flex-row justify-center items-center">
            <Tab key="ios" className={({ selected }) =>
                classNames(
                    'w-[119.7px] py-2 md:w-[171px] md:h-[58px] flex-shrink-0 rounded-[10px]','ring-white/60',
                    selected ? 'bg-white text-black focus:outline-none' : 'text-[#888]'
                )
                } onClick={() => setSelectedTab('ios')} // Set selectedTab to 'ios' when clicked
            >
                <div className="flex flex-row justify-center items-center ml-[9px] md:ml-0">
                    {selectedTab === 'ios' ? (
                        <div className="flex flex-col justify-center items-center">
                            <div className="ml-1">
                                <img className="w-[5px] h-[6px] md:w-full md:h-full" src={AppStoreLeafBlack} alt="ios" />
                            </div>
                            <img className="w-[19px] h-[17px] md:w-full md:h-full" src={AppStoreBlack} alt="ios" />
                        </div>
                    ) : (
                        <div className="flex flex-col justify-center items-center">
                            <div className="ml-1">
                                <img className="w-[5px] h-[6px] md:w-full md:h-full" src={AppStoreLeafGrey} alt="ios" />
                            </div>
                            <img className="w-[19px] h-[17px] md:w-full md:h-full" src={AppStoreGrey} alt="ios" />
                        </div>
                    )}
                    <div
                        className="flex w-[81px] h-4 flex-col justify-center flex-shrink-0 text-center text-[10px] font-bold md:font-normal md:text-[16px]"
                        style={{ fontFamily: 'SF-Pro-Display-Bold', fontStyle: 'normal', lineHeight: 'normal' }}
                    >
                        App Store
                    </div>
                </div>

            </Tab>
            <Tab
                key="android"
                className={({ selected }) =>
                classNames(
                    'w-[119.7px] py-2 md:w-[171px] md:h-[58px] flex-shrink-0 rounded-[10px]',
                    'ring-white/60',
                    selected ? 'bg-white text-black focus:outline-none' : 'text-[#888]'
                )
                }
                onClick={() => setSelectedTab('android')} // Set selectedTab to 'android' when clicked
            >
                <div className="flex flex-row justify-center items-center md:gap-[10px] ml-[9px] md:ml-0">
                    <img className="w-[20px] md:w-[30px]" src={PlayStore} alt="android"/>  
                    <div className="flex w-[81px] h-4 flex-col justify-center flex-shrink-0 text-center text-[10px] md:text-[16px]"
                        style={{ fontFamily:"SF-Pro-Display-Bold", fontStyle:"normal", lineHeight:"normal" }}>
                            Google Play
                    </div>
                </div>
                
            </Tab>
        </Tab.List>
        <div className="hidden sm:block">
            <Tab.Panels className="mt-[8px]">
                <Tab.Panel
                    key="ios"
                    className={classNames(
                    'bg-white',
                    'ring-white/60 '
                    )}
                >
                    <div className="w-[256px] h-[256px] flex-shrink-0 rounded-[50px] flex mx-[122px] mb-[48px] mt-[50px]">
                    <img src={AppStoreCode} alt="ios"/>
                    </div>
                </Tab.Panel>
                <Tab.Panel
                    key="android"
                    className={classNames(
                    ' bg-white',
                    'ring-white/60'
                    )}
                >
                    <div className="w-[256px] h-[256px] flex-shrink-0 rounded-[50px] flex mx-[122px] mb-[48px] mt-[50px]">
                    <img src={PlayStoreCode} alt="android"/>
                    </div>
                </Tab.Panel>
            </Tab.Panels>
        </div>
        <div className="sm:hidden">
            <div className="flex w-full justify-center">
            {/* w-[256px] h-[256px] flex-shrink-0 rounded-[50px] flex mx-[122px] mb-[48px] mt-[50px] */}
                <img className="w-[60px] h-[50.4px]" src={DownloadPhone} alt="Download Phone Icon" style={{ cursor: 'pointer' }}/>
            </div>
        </div>
        
      </Tab.Group>
    </div>
  );
}


