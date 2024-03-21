import { Tab } from '@headlessui/react';
import { useState } from 'react';
import AppStoreBlack from '../assets/images/appstore-black.svg';
import AppStoreLeafBlack from '../assets/images/appstore-leaf-black.svg';
import AppStoreGrey from '../assets/images/appstore-grey.svg';
import AppStoreLeafGrey from '../assets/images/appstore-leaf-grey.svg';
import PlayStore from '../assets/images/playstore.svg';
import AppStoreCode from '../assets/images/appstore-code.svg';
import PlayStoreCode from '../assets/images/playstore-code.svg';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [selectedTab, setSelectedTab] = useState('ios'); // Initialize selectedTab state

  return (
    <div>
      <Tab.Group>
        <Tab.List className="w-[350px] h-[66px] flex-shrink-0 rounded-[10px] bg-[#CCCCCC] mx-[75px] mt-[50px] flex flex-row justify-center items-center">
            <Tab key="ios" className={({ selected }) =>
                classNames(
                    'w-[171px] h-[58px] flex-shrink-0 rounded-[10px]','ring-white/60',
                    selected ? 'bg-white text-black' : 'text-[#888]'
                )
                } onClick={() => setSelectedTab('ios')} // Set selectedTab to 'ios' when clicked
            >
                <div className="flex flex-row justify-center items-center gap-[10px]">
                    {selectedTab === 'ios' ? (
                        <div className="flex flex-col justify-center items-center">
                            <div className="ml-1">
                                <img src={AppStoreLeafBlack} alt="ios" />
                            </div>
                            <img src={AppStoreBlack} alt="ios" />
                        </div>
                    ) : (
                        <div className="flex flex-col justify-center items-center">
                            <div className="ml-1">
                                <img src={AppStoreLeafGrey} alt="ios" />
                            </div>
                            <img src={AppStoreGrey} alt="ios" />
                        </div>
                    )}
                    <div
                        className="flex w-[81px] h-4 flex-col justify-center flex-shrink-0 text-center text-[16px]"
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
                    'w-[171px] h-[58px] flex-shrink-0 rounded-[10px]',
                    'ring-white/60',
                    selected ? 'bg-white text-black' : 'text-[#888]'
                )
                }
                onClick={() => setSelectedTab('android')} // Set selectedTab to 'android' when clicked
            >
                <div className="flex flex-row justify-center items-center gap-[10px]">
                    <img className="w-[30px]" src={PlayStore} alt="android"/>  
                    <div className="flex w-[81px] h-4 flex-col justify-center flex-shrink-0 text-center text-[16px]"
                        style={{ fontFamily:"SF-Pro-Display-Bold", fontStyle:"normal", lineHeight:"normal" }}>
                            Google Play
                    </div>
                </div>
                
            </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
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
      </Tab.Group>
    </div>
  );
}


