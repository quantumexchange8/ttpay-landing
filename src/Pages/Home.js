import AppStore from '../assets/images/appstore.svg';
import PlayStore from '../assets/images/playstore.svg';
import QRCode from '../assets/images/qrcode.svg';
import Approved from '../assets/images/approved.svg';
import Google from '../assets/images/google.svg';
import Drive from '../assets/images/drive.svg';
import Received from '../assets/images/received.svg';
import Sent from '../assets/images/sent.svg';
import ApprovedWithoutRed from '../assets/images/approved-without-red.svg';
import RedIcon from '../assets/images/red-icon.svg';
import HomeVideo11 from '../assets/videos/home-video-1-1.mp4';
import HomeVideo12 from '../assets/videos/home-video-1-2.mp4';
import HomeVideo13 from '../assets/videos/home-video-1-3.mp4';
import HomeVideo21 from '../assets/videos/home-video-2-1.mp4';
import HomeVideo22 from '../assets/videos/home-video-2-2.mp4';
import HomeVideo23 from '../assets/videos/home-video-2-3.mp4';
import HomeVideo31 from '../assets/videos/home-video-3-1.mp4';
import HomeVideo32 from '../assets/videos/home-video-3-2.mp4';
import HomeVideo33 from '../assets/videos/home-video-3-3.mp4';
import WomanCreditCard from '../assets/videos/woman-credit-card.mp4';
import DigitalIdentityBlocking from '../assets/videos/digital-identity-blocking.mp4';
import AmericanDollar from '../assets/videos/american-dollar.mp4';
import MoneyReceivedFund from '../assets/videos/money-received-fund.mp4';
import FemaleFingerHolding from '../assets/videos/female-finger-holding.mp4';
import ScrollUp from '../assets/images/scrollup.svg';
// import Icon from '../assets/images/icon.svg';
import ModalApp from '../Components/ModalApp';
// import Tab from '../Components/Tab';
import ModalContact from '../Components/ModalContact';
import { useState } from 'react';

const Home = () => {
    const [openModalApp, setOpenModalApp] = useState(false);
    const [openModalContact, setOpenModalContact] = useState(false);
    return (
        <div className="wrapper min-w-[390px] w-full *:">  
            <div className="max-w-full flex justify-center h-[1100px] md:h-full">
                <div className="flex flex-col w-[390px] md:flex-row justify-center mb-[200px] md:w-[1000px]">
                    <div className="flex flex-col w-full h-[460px]">
                        <div className="flex w-full md:w-[420px] flex-col justify-center flex-shrink-0 mt-[150px] text-black text-[28px] md:text-[40px]">
                            <div className="w-[287px] h-[210px] md:w-[350px] md:h-[280px] px-5 md:px-0" style={{ fontFamily:"SF-Pro-Display-Bold", fontStyle:"normal", lineHeight:"normal" }}>
                                Release your concerns about cryptocurrency transactions with your <span style={{ color:"#0038FF" }}> trusted digital wallet.</span>
                            </div>
                            {/* <div style={{ color:"#0038FF", fontFamily:"SF-Pro-Display-Bold", fontStyle:"normal", lineHeight:"normal" }}>
                                trusted digital wallet.
                            </div> */}
                        </div>
                        <div className="flex w-full h-100px md:h-[70px] flex-col justify-center md:mt-[20px] md:w-[450px] px-5 md:px-0 text-black text-[18px] md:text-[20px] md:font-medium font-thin" style={{ fontFamily: "SF-Pro-Display-Medium", fontStyle: "normal", lineHeight: "normal" }}>
                            <div className="hidden sm:block">
                                Your gateway to digital currencies and beyond. <br />
                                Trade, transfer funds, and make transactions in <br />
                                one secure and convenient application.
                            </div>
                            <div className="sm:hidden w-[310px] h-[90px]">
                                Your gateway to digital currencies and beyond. Trade, transfer funds, and make transactions in one secure and convenient application.
                            </div>
                        </div>
                        {/* <div className="flex w-full h-100px md:h-[70px] flex-col justify-center md:mt-[20px] md:w-[450px] px-5 md:px-0 text-black text-[18px] md:text-[20px] md:font-medium font-thin"
                            style={{ fontFamily:"SF-Pro-Display-Medium", fontStyle:"normal", lineHeight:"normal" }} >
                            <div >
                                Your gateway to digital currencies and beyond. 
                            </div>
                            <div>
                                Trade, transfer funds, and make transactions in 
                            </div>
                            <div>
                                one secure and convenient application.
                            </div>           
                        </div> */}
                        <div className="w-[463px] h-[70px] mt-[40px] px-5 md:px-0 md:mt-[20px] flex gap-2">                 
                            <div 
                            className="w-[43.391px] h-[43.391px] md:w-[70px] md:h-[70px] flex-shrink rounded-[15px] bg-[#333] flex justify-center items-center hover:-translate-y-1 transition-all duration-300 ease-in-out" 
                            style={{ cursor: 'pointer' }}
                            >
                                <div className="w-[22.289px] h-[27.274px] md:w-[35.957px] md:h-[44px] flex-shrint-0">
                                    <img src={AppStore} alt="appstore"/>
                                </div>                                                                    
                            </div>
                            <div 
                            className="w-[43.391px] h-[43.391px] md:w-[70px] md:h-[70px] flex-shrink rounded-[15px] bg-[#333] flex justify-center items-center hover:-translate-y-1 transition-all duration-300 ease-in-out" 
                            style={{ cursor: 'pointer' }}
                            >
                                <div className="w-[24.795px] h-[27.274px] md:w-10 md:h-11 flex-shrink-0">
                                    <img src={PlayStore} alt="playstore"/>
                                </div>                      
                            </div>
                            <div 
                            className="w-[190.3px] h-[43.391px] md:w-[307px] md:h-[70px] flex-shrink-0 rounded-[15px] border border-gray-300 bg-white shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out"
                            // hover:animate-bounce
                            onClick={() => setOpenModalApp(true)} 
                            style={{ cursor: 'pointer' }}
                            >      
                                <div className="flex justify-center items-center my-[8px] md:my-[15px] gap-[22px]">
                                    <div className="w-[24.795px] h-[24.795px]">
                                        <img src={QRCode} alt="qrcode"/>
                                    </div>                   
                                    <div className="flex w-[120px] h-5 md:w-[210px] md:h-10 flex-col justify-center flex-shrink-0 text-black text-[10px] md:text-[16px]"
                                        style={{ fontFamily:"SF-Pro-Display-Medium", fontStyle:"normal", lineHeight:"normal" }}>
                                        Show QR to download new version app on your mobile
                                    </div>
                                </div>
                            </div>
                            <ModalApp open={openModalApp} onClose={() => setOpenModalApp(false)}>
                                                    
                            </ModalApp>
                        </div>
                    </div>

                    <div className="mt-[150px]">
                        <div className="flex flex-col  md:gap-[20px] gap-[15.17px] px-5 md:px-0">
                            <div className="flex flex-row md:gap-[20px] gap-[15.17px]">
                                <div className="w-[106.217px] h-[106.217px] md:w-[140px] md:h-[140px] flex-shrink-0">
                                    <video autoPlay loop muted className="rounded-[10px] shadow-md object-cover w-full h-full" src={HomeVideo11} title="Home Video 1-1"></video>
                                </div>
    
                                <div className="w-[106.217px] h-[106.217px] md:w-[140px] md:h-[140px] flex-shrink-0">
                                    <video autoPlay loop muted className="rounded-[10px] shadow-md object-cover w-full h-full" src={HomeVideo21} title="Home Video 2-1"></video>
                                </div>

                                <div className="w-[106.217px] h-[106.217px] md:w-[140px] md:h-[140px] flex-shrink-0">
                                    <video autoPlay loop muted className="rounded-[10px] shadow-md object-cover w-full h-full" src={HomeVideo31} title="Home Video 3-1"></video>
                                </div>
                            </div>
    
                            <div className="flex flex-row md:gap-[20px] gap-[15.17px]">
                                <div className="w-[106.217px] h-[106.217px] md:w-[140px] md:h-[140px] flex-shrink-0">
                                    <video autoPlay loop muted className="rounded-[10px] shadow-md object-cover w-full h-full" src={HomeVideo12} title="Home Video 1-2"></video>
                                </div>
    
                                <div className="w-[106.217px] h-[106.217px] md:w-[140px] md:h-[140px] flex-shrink-0">
                                    <video autoPlay loop muted className="rounded-[10px] shadow-md object-cover w-full h-full" src={HomeVideo22} title="Home Video 2-2"></video>
                                </div>
    
                                <div className="w-[106.217px] h-[106.217px] md:w-[140px] md:h-[140px] flex-shrink-0">
                                    <video autoPlay loop muted className="rounded-[10px] shadow-md object-cover w-full h-full" src={HomeVideo32} title="Home Video 3-2"></video>
                                </div>
                            </div>
    
                            <div className="flex flex-row md:gap-[20px] gap-[15.17px]">
                                <div className="w-[106.217px] h-[106.217px] md:w-[140px] md:h-[140px] flex-shrink-0">
                                    <video autoPlay loop muted className="rounded-[10px] shadow-md object-cover w-full h-full" src={HomeVideo13} title="Home Video 1-3"></video>
                                </div>

                                <div className="w-[106.217px] h-[106.217px] md:w-[140px] md:h-[140px] flex-shrink-0">
                                    <video autoPlay loop muted className="rounded-[10px] shadow-md object-cover w-full h-full" src={HomeVideo23} title="Home Video 2-3"></video>
                                </div>
    
                                <div className="w-[106.217px] h-[106.217px] md:w-[140px] md:h-[140px] flex-shrink-0">
                                    <video autoPlay loop muted className="rounded-[10px] shadow-md object-cover w-full h-full" src={HomeVideo33} title="Home Video 3-3"></video>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
            {/* Part 2 */}
            <div className="bg-[#f4efff] w-[393px] h-[306px] md:h-[200px] md:w-full flex justify-center">
                <div className="flex-col md:w-[1000px] flex md:flex-row justify-between items-center mb-[65px] md:mb-0">
                    <div className="flex flex-col justify-center w-275 h-90 flex-shrink-0 mt-[65px] md:mt-0">
                        <div className="text-[64px] md:text-[96px]" style={{ color:"#0028ff", fontFamily:"SF-Pro-Display-Bold", fontStyle:"normal", lineHeight:"normal" }}>
                            386,370
                        </div>
                        <div className="text-[32px] md:text-[40px]" style={{ color:"#888", fontFamily:"SF-Pro-Display-Bold", fontStyle:"normal", lineHeight:"normal" }}>
                            Merchants created
                        </div>
                    </div>
                    <div onClick={() => setOpenModalContact(true)}>
                        <button className="w-[200px] h-[50px] rounded-[10px] bg-gradient-to-br from-primary-25 via-primary-50 to-primary-100 text-white text-center text-[20px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)]"
                            style={{ fontFamily:"SF-Pro-Display-Bold", fontStyle:"normal", lineHeight: "normal",}}>Create yours now</button>
                    </div>
                    <ModalContact open={openModalContact} onClose={() => setOpenModalContact(false)}></ModalContact>
                </div>
            </div>
            {/* Part 3 */}
            <div className="max-w-full flex justify-center">
                <div className="w-[390px] md:w-[1000px] mb-[200px]">
                    <div className="flex justify-center">
                        <div className="flex w-[390px] md:w-[800px] h-[150px] flex-col justify-center flex-shrink-0 mt-[100px] md:mt-[200px] text-black text-center text-[32px] md:text-[48px]">
                            <div className="hidden md:block w-[700px]" style={{ fontFamily:"SF-Pro-Display-Bold", fontStyle:"normal", lineHeight:"normal" }}>
                                Every feature you need for business freedom in one digital wallet
                            </div>
                            <div className="sm:hidden" style={{ fontFamily:"SF-Pro-Display-Bold", fontStyle:"normal", lineHeight:"normal" }}>
                                Every feature you <br />
                                need for business <br />
                                freedom in one digital <br />
                                wallet
                            </div>
                        </div>
                    </div>
                    {/* Part 3-1-notif1,2,3 */}
                    <div className="mt-[50px] md:mt-[200px] flex flex-col gap-[300px]">
                        <div className="h-[587px] flex-shrink-0 flex flex-col md:flex-row justify-between relative">
                            <div className="flex flex-col h-[380px] md:h-full">
                                <div className="w-[194.61px] h-[51.896px] md:w-[300px] md:h-[80px] flex-shrink-0 rounded-[20px] bg-[#dddddde6] absolute top-0 left-[200px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)]">
                                    <div className="md:gap-5 flex gap-3 h-[50px]">
                                        <div className="flex w-[32.435px] h-[32.435px] md:w-[50px] md:h-[50px] justify-center items-center flex-shrink-0 ml-[16.87px] mt-[9.73px] md:mt-[15px] md:ml-[26px]">
                                            <img src={Approved} alt="icon"/>
                                        </div>
                                        <div className="flex flex-col mt-[12.33px] md:mt-[19px] md:gap-[10px] w-[20px] md:w-full">
                                            <div className="flex w-[150px] h-4 flex-col justify-center flex-shrink-0 text-black text-[11px] md:text-[16px]"
                                                style={{ fontFamily:"SF-Pro-Display-Semibold", fontStyle:"normal", lineHeight:"normal" }}>
                                                Received approved
                                            </div>
                                            <div className="flex w-[180px] h-4 flex-col justify-center flex-shrink-0 text-[9px] md:text-[14px]"
                                                style={{ color:"#666", fontFamily:"SF-Pro-Display-Medium", fontStyle:"normal", lineHeight:"normal" }}>
                                                $3,488.00 USDT for TRON
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-[194.61px] h-[51.896px] md:w-[300px] md:h-[80px] flex-shrink-0 rounded-[20px] bg-[#dddddde6] absolute bottom-[130px] left-[230px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)]">
                                    <div className="md:gap-5 flex gap-3 h-[50px]">
                                        <div className="flex w-[32.435px] h-[32.435px] md:w-[50px] md:h-[50px] justify-center items-center flex-shrink-0 ml-[16.87px] mt-[9.73px] md:mt-[15px] md:ml-[26px]">
                                            <img src={Approved} alt="icon"/>
                                        </div>
                                        <div className="flex flex-col mt-[12.33px] md:mt-[19px] md:gap-[10px] w-[20px] md:w-full">
                                            <div className="flex w-[150px] h-4 flex-col justify-center flex-shrink-0 text-black text-[11px] md:text-[16px]"
                                                style={{ fontFamily:"SF-Pro-Display-Semibold", fontStyle:"normal", lineHeight:"normal" }}>
                                                Received approved
                                            </div>
                                            <div className="flex w-[180px] h-4 flex-col justify-center flex-shrink-0 text-[9px] md:text-[14px]"
                                                style={{ color:"#666", fontFamily:"SF-Pro-Display-Medium", fontStyle:"normal", lineHeight:"normal" }}>
                                                $5,000.00 USDT for TRON
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-[194.61px] h-[51.896px] md:w-[300px] md:h-[80px] flex-shrink-0 rounded-[20px] bg-[#dddddde6] absolute bottom-0 left-0 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)]">
                                    <div className="md:gap-5 flex gap-3 h-[50px]">
                                        <div className="flex w-[32.435px] h-[32.435px] md:w-[50px] md:h-[50px] justify-center items-center flex-shrink-0 ml-[16.87px] mt-[9.73px] md:mt-[15px] md:ml-[26px]">
                                            <img src={Approved} alt="icon"/>
                                        </div>
                                        <div className="flex flex-col mt-[12.33px] md:mt-[19px] md:gap-[10px] w-[20px] md:w-full">
                                            <div className="flex w-[150px] h-4 flex-col justify-center flex-shrink-0 text-black text-[11px] md:text-[16px]"
                                                style={{ fontFamily:"SF-Pro-Display-Semibold", fontStyle:"normal", lineHeight:"normal" }}>
                                                Sent approved
                                            </div>
                                            <div className="flex w-[180px] h-4 flex-col justify-center flex-shrink-0 text-[9px] md:text-[14px]"
                                                style={{ color:"#666", fontFamily:"SF-Pro-Display-Medium", fontStyle:"normal", lineHeight:"normal" }}>
                                                - $658.00 USDT for TRON
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-[324.349px] h-[324.349px] md:w-[500px] md:h-[500px] flex-shrink-0 mt-[33px] mb-[54px]">
                                    <video autoPlay loop muted className="rounded-[250px] shadow-md object-cover w-full h-full" src={WomanCreditCard} title="Home Video 1-1"></video>
                                </div>
                            </div>
                            {/* Part 3-1-text */}
                            <div className="flex flex-col gap-[30px] mt-[135px]">
                                <div className="flex w-[420px] h-[70px] flex-col justify-center flex-shrink-0 text-black text-[36px]" 
                                    style={{ fontFamily:"SF-Pro-Display-Bold", fontStyle:"normal", lineHeight:"normal" }}>
                                    Deposit, Receive, Transfer and Withdrawal
                                </div>
                                <div className="flex w-[425px] h-[160px] flex-col justify-center flex-shrink-0 text-black text-[20px]"
                                    style={{ fontFamily:"SF-Pro-Display-Medium", fontStyle:"normal", lineHeight:"normal" }}>
                                    <div>
                                        Build and manage your cryptocurrency
                                    </div>
                                        
                                    <div>
                                        from your mobile device. Utilize our crypto-
                                    </div>
                                        
                                    <div>
                                        currency wallet payment gateway to
                                    </div>
                                        
                                    <div>
                                        establish unbreakable bridges with your
                                    </div>
                                         
                                    <div>
                                        business for any transaction.
                                    </div>

                                    <div>
                                        And protect your earnings by trading into
                                    </div>

                                    <div>
                                        USD stablecoins.
                                    </div>                                   
                                </div>
                            </div>
                        </div>
                        {/* Part 3-2-text */}
                        <div className="h-[500px] flex-shrink-0 flex flex-row justify-between">
                            <div className="flex flex-col gap-[30px] mt-[140px] text-black">
                                <div className="flex w-[420px] h-[30px] flex-col justify-center flex-shrink-0 text-[36px]" 
                                    style={{ fontFamily:"SF-Pro-Display-Bold", fontStyle:"normal", lineHeight:"normal" }}>
                                    Security for your wallet
                                </div>
                                <div className="flex w-[425px] h-[160px] flex-col justify-center flex-shrink-0 text-[20px]"
                                    style={{ fontFamily:"SF-Pro-Display-Medium", fontStyle:"normal", lineHeight:"normal" }}>
                                    <div>
                                        Hold the passcord to your digital assets in a
                                    </div>

                                    <div>
                                        wallet so secure, no one can access it except
                                    </div>

                                    <div>
                                        for you - not even us. Protect your money
                                    </div>

                                    <div>
                                        with passcode and phone biometric security
                                    </div>

                                    <div>
                                        features. Automatically back up all your
                                    </div>

                                    <div>
                                        wallets and restore access with a single
                                    </div>

                                    <div>
                                        custom password.
                                    </div>
                                          
                                </div>
                            </div>
                            {/* Part 3-2-notif1,2 */}
                            <div className="flex flex-col relative">
                                <div className="w-[300px] h-[80px] flex-shrink-0 rounded-[20px] bg-gray-200 bg-opacity-90 absolute top-0 left-0 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)]">
                                    <div className="gap-5 flex">
                                        <div className="flex w-[50px] h-[50px] justify-center items-center flex-shrink-0 mt-[15px] ml-[26px]">
                                            <img src={Google} alt="icon"/>
                                        </div>
                                        <div className="flex flex-col mt-[17px] gap-[10px]">
                                            <div className="flex w-[170px] h-4 flex-col justify-center flex-shrink-0 text-black text-[16px]"
                                                style={{ fontFamily:"SF-Pro-Display-Semibold", fontStyle:"normal", lineHeight:"normal" }}>
                                                Backup Successful
                                            </div>
                                            <div className="flex w-[195px] h-5 flex-col justify-center flex-shrink-0 text-[14px]"
                                                style={{ color:"#666", fontFamily:"SF-Pro-Display-Medium", fontStyle:"normal", lineHeight:"normal" }}>
                                                Passcode have been encrypted and backed up to Google Drive.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-[300px] h-[80px] flex-shrink-0 rounded-[20px] bg-gray-200 bg-opacity-90 absolute bottom-0 right-0 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)]">
                                    <div className="gap-5 flex">
                                        <div className="flex w-[50px] h-[50px] justify-center items-center flex-shrink-0 mt-[15px] ml-[26px]">
                                            <img src={Drive} alt="icon"/>
                                        </div>
                                        <div className="flex flex-col mt-[17px] gap-[10px]">
                                            <div className="flex w-[170px] h-4 flex-col justify-center flex-shrink-0 text-black text-[16px]"
                                                style={{ fontFamily:"SF-Pro-Display-Semibold", fontStyle:"normal", lineHeight:"normal" }}>
                                                Backup Successful
                                            </div>
                                            <div className="flex w-[195px] h-4 flex-col justify-center flex-shrink-0 text-[14px]"
                                                style={{ color:"#666", fontFamily:"SF-Pro-Display-Medium", fontStyle:"normal", lineHeight:"normal" }}>
                                                Passcode have been encrypted and backed up to Google Drive.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-[500px] h-[500px] flex-shrink-0">
                                    <video autoPlay loop muted className="rounded-[250px] shadow-md object-cover w-full h-full" src={DigitalIdentityBlocking} title="Home Video 1-1"></video>
                                </div>
                            </div>   
                        </div>

                        <div className="h-[500px] flex-shrink-0 flex flex-row justify-between items-center">
                            <div className="w-[500px] h-[500px] flex-shrink-0 relative">
                                <video autoPlay loop muted className="rounded-[250px] shadow-md object-cover w-full h-full" src={AmericanDollar} title="Home Video 1-1"></video>
                                <div className="absolute bottom-[115px] right-[80px] w-[170px] h-[50px] flex items-end justify-end gap-[10px]">
                                    <div className="w-[50px] h-[50px] flex-shrink-0">
                                        <img src={ApprovedWithoutRed} alt="Approved Without Red" className="w-50 h-50 flex-shrink-0"/>
                                    </div>
                                    <div className="w-[50px] h-[50px] flex-shrink-0">
                                        <img src={Approved} alt="Approved" className="w-50 h-50 flex-shrink-0"/>
                                    </div>
                                    <div className="w-[50px] h-[50px] flex-shrink-0">
                                        <img src={RedIcon} alt="Red Icon" className="w-50 h-50 flex-shrink-0"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[30px] text-black">
                                <div className="flex w-[420px] h-[70px] flex-col justify-center flex-shrink-0 text-[36px]" 
                                    style={{ fontFamily:"SF-Pro-Display-Bold", fontStyle:"normal", lineHeight:"normal" }}>
                                    A trusted gateway to the world of TRON (USDT)
                                </div>
                                <div className="flex w-[425px] h-[160px] flex-col justify-center flex-shrink-0 text-[20px]"
                                    style={{ fontFamily:"SF-Pro-Display-Medium", fontStyle:"normal", lineHeight:"normal" }}>
                                       
                                    <div>
                                        Deposit, withdrawal, transfer, and receive -
                                    </div>

                                    <div>
                                        the most widely used TRC-20 tokens. Trade
                                    </div>

                                    <div>
                                        using decentralized cryptocurrency wallets,
                                    </div>

                                    <div>
                                        participate in digital markets, and more.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="h-[500px] flex-shrink-0 flex flex-row justify-between items-center">
                            <div className="flex flex-col gap-[30px] text-black">
                                <div className="flex w-[420px] h-[30px] flex-col justify-center flex-shrink-0 text-[36px]" 
                                    style={{ fontFamily:"SF-Pro-Display-Bold", fontStyle:"normal", lineHeight:"normal" }}>
                                    Manage your transactions
                                </div>
                                <div className="flex w-[425px] h-[160px] flex-col justify-center flex-shrink-0 text-[20px]"
                                    style={{ fontFamily:"SF-Pro-Display-Medium", fontStyle:"normal", lineHeight:"normal" }}>
                                       
                                    <div>
                                        'Received' and 'Sent' features in the wallets
                                    </div>

                                    <div>
                                        to organize your funds. Add personal notes
                                    </div>

                                    <div>
                                        to transactions and get a complete history of
                                    </div>

                                    <div>
                                        all your funds.
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col relative">
                                <div className="w-[300px] h-[80px] flex-shrink-0 rounded-[20px] bg-gray-200 bg-opacity-90 absolute top-0 right-0 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)]">
                                    <div className="flex justify-around mt-[14px] mx-[14px]">
                                        <div className="flex gap-[10px]">
                                            <div className="w-3 h-3 flex-shrink-0">
                                                <img src={Received} alt="icon"/>
                                            </div>
                                            <div className="flex flex-col gap-[12px]">
                                                <div className="flex flex-col gap-[6px]">
                                                    <div className="flex w-[80px] h-3 flex-col justify-center flex-shrink-0 text-black text-[16px]"
                                                        style={{ fontFamily:"SF-Pro-Display-Semibold", fontStyle:"normal", lineHeight:"normal" }}>
                                                        Received
                                                    </div>
                                                    <div className="flex w-[60px] h-[10px] flex-col justify-center flex-shrink-0 text-[12px]"
                                                        style={{ color:"#666", fontFamily:"SF-Pro-Display-Regular", fontStyle:"normal",lineHeight:"normal" }}>
                                                        23:27pm
                                                    </div>
                                                </div>

                                                <div className="flex w-[110px] h-3 flex-col justify-center flex-shrink-0 text-[14px]"
                                                    style={{ color:"#666", fontFamily:"SF-Pro-Display-Medium", fontStyle:"normal", lineHeight:"normal" }}>
                                                    Merchant name
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-end gap-[6px]">
                                            <div className="flex w-[110px] h-3 flex-col justify-center flex-shrink-0 text-right text-[16px]"
                                                style={{ color:"#34A853", fontFamily:"SF-Pro-Display-Bold", fontStyle:"normal", lineHeight:"normal" }}>
                                                +$65,294.22
                                            </div>
                                            <div className="flex w-9 h-[10px] flex-col justify-center flex-shrink-0 text-right text-[12px]" 
                                                style={{ color:"#666", fontFamily:"SF-Pro-Display-Regular", fontStyle:"normal", lineHeight:"normal" }}>
                                                USDT
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-[300px] h-[80px] flex-shrink-0 rounded-[20px] bg-gray-200 bg-opacity-90 absolute bottom-0 left-10 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)]">
                                    <div className="flex justify-around mt-[14px] mx-[14px]">
                                        <div className="flex gap-[10px]">
                                            <div className="w-3 h-3 flex-shrink-0">
                                                <img src={Sent} alt="icon"/>
                                            </div>
                                            <div className="flex flex-col gap-[12px]">
                                                <div className="flex flex-col gap-[6px]">
                                                    <div className="flex w-[80px] h-3 flex-col justify-center flex-shrink-0 text-black text-[16px]"
                                                        style={{ fontFamily:"SF-Pro-Display-Semibold", fontStyle:"normal", lineHeight:"normal" }}>
                                                        Sent
                                                    </div>
                                                    <div className="flex w-[60px] h-[10px] flex-col justify-center flex-shrink-0 text-[12px]"
                                                        style={{ color:"#666", fontFamily:"SF-Pro-Display-Regular", fontStyle:"normal", lineHeight:"normal" }}>
                                                        23:27pm
                                                    </div>
                                                </div>

                                                <div className="flex w-[110px] h-3 flex-col justify-center flex-shrink-0 text-[14px]"
                                                    style={{ color:"#666", fontFamily:"SF-Pro-Display-Medium", fontSize:"14px", fontStyle:"normal", lineHeight:"normal" }}>
                                                    Merchant name
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-end gap-[6px]">
                                            <div className="flex w-[110px] h-3 flex-col justify-center flex-shrink-0 text-right text-[16px]"
                                                style={{ color:"#4285F4", fontFamily:"SF-Pro-Display-Bold", fontStyle:"normal", lineHeight:"normal" }}>
                                                -$3,173.98
                                            </div>
                                            <div className="flex w-9 h-[10px] flex-col justify-center flex-shrink-0 text-right text-[12px]" 
                                                style={{ color:"#666", fontFamily:"SF-Pro-Display-Regular", fontStyle:"normal", lineHeight:"normal" }}>
                                                USDT
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-[500px] h-[500px] flex-shrink-0">
                                    <video autoPlay loop muted className="rounded-[250px] shadow-md object-cover w-full h-full" src={MoneyReceivedFund} title="Home Video 1-1"></video>
                                </div>
                            </div>
                       
                        </div>

                        <div className="h-[500px] flex-shrink-0 flex flex-row justify-between items-center">
                            <div className="w-[500px] h-[500px]">
                                <video autoPlay loop muted className="rounded-[250px] shadow-md object-cover w-full h-full" src={FemaleFingerHolding} title="Home Video 1-1"></video>
                            </div>
                            <div className="flex flex-col gap-[30px] text-black">
                                <div className="flex w-[420px] h-[70px] flex-col justify-center flex-shrink-0 text-[36px]" 
                                    style={{ fontFamily:"SF-Pro-Display-Bold", fontStyle:"normal", lineHeight:"normal" }}>
                                    Move money freely
                                </div>
                                <div className="flex w-[425px] h-[160px] flex-col justify-center flex-shrink-0 text-[20px]"
                                    style={{ fontFamily:"SF-Pro-Display-Medium", fontStyle:"normal", lineHeight:"normal" }}>
                                                                           
                                    <div>
                                        Withdrawal and transfer cryptocurrencies
                                    </div>

                                    <div>
                                        anytime, anywhere - no questions asked.
                                    </div>

                                    <div>
                                        Take advantage of fully-customizable fees
                                    </div>

                                    <div>
                                        for sending. Link unlimited wallets to support
                                    </div>

                                    <div>
                                        your privacy.
                                    </div>
                                </div>
                            </div>
                        </div>                   
                    </div>
                </div>
            </div>

            <div 
            className="fixed bottom-6 right-6 animate-bounce" 
            style={{ animationDuration: '1.5s' }}
            >  
                <div 
                className="w-[50px] h-[50px] flex-shrink-0" 
                onClick={scrollToTop}
                style={{ cursor: 'pointer' }}
                >
                    <img src={ScrollUp} alt="icon"/>
                </div>
            </div>
        </div>
    );
  };

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Optional: Scroll smoothly to the top
        });
    }

  export default Home;