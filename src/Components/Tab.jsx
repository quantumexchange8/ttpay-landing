import { Tab } from '@headlessui/react';
import { useState } from 'react';
import DownloadPhone from '../assets/images/download-phone.svg'
import { AppleModal, QRCodeModalApple, QRCodeModalGoogle, GooglePlayModal } from './Icon';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [selectedTab, setSelectedTab] = useState('ios'); // Initialize selectedTab state

  return (
    <div className='w-full flex flex-col items-center gap-12'>
      <Tab.Group>
        <Tab.List className="w-[245px] h-[46.2px] md:w-[350px] md:h-[66px] rounded-[7px] md:rounded-[10px] bg-[#CCCCCC] flex flex-row justify-center items-center">
            <Tab key="ios" className={({ selected }) =>
                classNames(
                    'w-[119.7px] md:w-[171px] md:h-[58px] rounded-[7px] md:rounded-[10px]','ring-white/60',
                    selected ? 'bg-white text-black focus:outline-none' : 'text-[#888]'
                )
                } onClick={() => setSelectedTab('ios')} // Set selectedTab to 'ios' when clicked
            >
                <div className="flex flex-row justify-center items-center md:gap-[10px] h-10">
                    {selectedTab === 'ios' ? (
                        <div className="flex flex-col justify-center items-center">
                            <AppleModal color='#000'/>
                        </div>
                    ) : (
                        <div className="flex flex-col justify-center items-center">
                            <AppleModal color='#888'/>
                        </div>
                    )}
                    <div
                        className="flex w-[81px] h-4 flex-col justify-center flex-shrink-0 text-center text-[10px] font-bold md:text-[16px]">
                        App Store
                    </div>
                </div>

            </Tab>
            <Tab
                key="android"
                className={({ selected }) =>
                classNames(
                    'w-[119.7px] md:w-[171px] md:h-[58px] rounded-[7px] md:rounded-[10px]',
                    'ring-white/60',
                    selected ? 'bg-white text-black focus:outline-none' : 'text-[#888]'
                )
                }
                onClick={() => setSelectedTab('android')} // Set selectedTab to 'android' when clicked
            >
                <div className="flex flex-row justify-center items-center gap-[10px] h-10">
                    <GooglePlayModal/> 
                    <div className="flex flex-col justify-center text-center text-[10px] md:text-[16px] md:leading-none font-bold">
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
                    <QRCodeModalApple/>
                </Tab.Panel>
                <Tab.Panel
                    key="android"
                    className={classNames(
                    ' bg-white',
                    'ring-white/60'
                    )}
                >
                    <QRCodeModalGoogle/>
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


