import AppStore from '../assets/images/appstore.svg';
import PlayStore from '../assets/images/playstore.svg';
import QRCode from '../assets/images/qrcode.svg';
import Approved from '../assets/images/approved.svg';
import Google from '../assets/images/google.svg';
import Drive from '../assets/images/drive.svg';
import Received from '../assets/images/received.svg';
import Sent from '../assets/images/sent.svg';
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

const Home = () => {
    return (
        <div>
            <div className="max-w-full flex justify-center">
                <div className="w-[1000px] flex flex-row justify-between mb-[200px]">
                    <div className="flex flex-col gap-[30px]">
                        <div className="flex w-[420px] h-[180px] flex-col justify-center flex-shrink-0 mt-[190px] text-black text-[40px]">
                            <div style={{ fontFamily:"SF-Pro-Display-Bold", fontStyle:"normal", lineHeight:"normal" }}>
                                Release your concerns about cryptocurrency transactions with your
                            </div>
                            <div style={{ color:"#0038FF", fontFamily:"SF-Pro-Display-Bold", fontStyle:"normal", lineHeight:"normal" }}>
                                trusted digital wallet.
                            </div>
                        </div>
                        <div className="flex w-[450px] h-[70px] flex-col justify-center flex-shrink-0 text-black text-[20px]"
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
                        </div>
                        <div className="w-[463px] h-[70px] flex-shrink-0 flex gap-2">                 
                            <div className="w-[70px] h-[70px] flex-shrink rounded-[15px] bg-[#333] flex justify-center items-center">
                                <div className="w-[35.957px] h-[44px] flex-shrint-0">
                                    <img src={AppStore} alt="appstore"/>
                                </div>                                                                    
                            </div>
                            <div className="w-[70px] h-[70px] flex-shrink rounded-[15px] bg-[#333] flex justify-center items-center">
                                <div className="w-10 h-11 flex-shrink-0">
                                    <img src={PlayStore} alt="playstore"/>
                                </div>                      
                            </div>
                            <div className="w-[307px] h-[70px] flex-shrink-0 rounded-[15px] border border-gray-300 bg-white shadow-md">                         
                                <div className="flex justify-center items-center my-[15px] gap-[22px]">
                                    <div>
                                        <img src={QRCode} alt="qrcode"/>
                                    </div>                   
                                    <div className="flex w-[210px] h-10 flex-col justify-center flex-shrink-0 text-black text-[16px]"
                                        style={{ fontFamily:"SF-Pro-Display-Medium", fontStyle:"normal", lineHeight:"normal" }}>
                                        Show QR to download new version app on your mobile
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-[150px]">
                        <div className="flex flex-col gap-[20px]">
                            <div className="flex flex-row gap-[20px]">
                                <div className="w-[140px] h-[140px] flex-shrink-0">
                                    <video autoPlay loop muted className="rounded-[10px] shadow-md object-fill w-full h-full" src={HomeVideo11} title="Home Video 1-1"></video>
                                </div>
    
                                <div className="w-[140px] h-[140px] flex-shrink-0">
                                    <video autoPlay loop muted className="rounded-[10px] shadow-md object-fill w-full h-full" src={HomeVideo12} title="Home Video 1-2"></video>
                                </div>
    
                                <div className="w-[140px] h-[140px] flex-shrink-0">
                                    <video autoPlay loop muted className="rounded-[10px] shadow-md object-fill w-full h-full" src={HomeVideo13} title="Home Video 1-3"></video>
                                </div>
                            </div>
    
                            <div className="flex flex-row gap-[20px]">
                                <div className="w-[140px] h-[140px] flex-shrink-0">
                                    <video autoPlay loop muted className="rounded-[10px] shadow-md object-fill w-full h-full" src={HomeVideo21} title="Home Video 2-1"></video>
                                </div>
    
                                <div className="w-[140px] h-[140px] flex-shrink-0">
                                    <video autoPlay loop muted className="rounded-[10px] shadow-md object-fill w-full h-full" src={HomeVideo22} title="Home Video 2-2"></video>
                                </div>
    
                                <div className="w-[140px] h-[140px] flex-shrink-0">
                                    <video autoPlay loop muted className="rounded-[10px] shadow-md object-fill w-full h-full" src={HomeVideo23} title="Home Video 2-3"></video>
                                </div>
                            </div>
    
                            <div className="flex flex-row gap-[20px]">
                                <div className="w-[140px] h-[140px] flex-shrink-0">
                                    <video autoPlay loop muted className="rounded-[10px] shadow-md object-fill w-full h-full" src={HomeVideo31} title="Home Video 3-1"></video>
                                </div>
    
                                <div className="w-[140px] h-[140px] flex-shrink-0">
                                    <video autoPlay loop muted className="rounded-[10px] shadow-md object-fill w-full h-full" src={HomeVideo32} title="Home Video 3-2"></video>
                                </div>
    
                                <div className="w-[140px] h-[140px] flex-shrink-0">
                                    <video autoPlay loop muted className="rounded-[10px] shadow-md object-fill w-full h-full" src={HomeVideo33} title="Home Video 3-3"></video>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
    
            <div className="bg-[#f4efff] h-[200px] max-w-full flex justify-center">
                <div className="w-[1000px] flex justify-between items-center">
                    <div className="w-[385px] h-[180px]">
                        <div className="text-[96px]" style={{ color:"#0028ff", fontFamily:"SF-Pro-Display-Bold", fontStyle:"normal", lineHeight:"normal" }}>
                            386,370
                        </div>
                        <div className="text-[40px]" style={{ color:"#888", fontFamily:"SF-Pro-Display-Bold", fontStyle:"normal", lineHeight:"normal" }}>
                            Merchants created
                        </div>
                    </div>
                    <div>
                        <button className="w-[200px] h-[50px] rounded-[10px] bg-gradient-to-br from-indigo-600 via-indigo-800 to-black text-white text-center text-[20px]"
                            style={{ fontFamily:"SF-Pro-Display-Bold", fontStyle:"normal", lineHeight: "normal",}}>Create yours now</button>
                    </div>
                </div>
            </div>
    
            <div className="max-w-full flex justify-center">
                <div className="w-[1000px] mb-[200px]">
                    <div className="flex justify-center">
                        <div className="flex w-[800px] h-[90px] flex-col justify-center flex-shrink-0 mt-[200px] text-black text-center text-[48px]">
                            <div style={{ fontFamily:"SF-Pro-Display-Bold", fontStyle:"normal", lineHeight:"normal" }}>
                                Every feature you need for business freedom in one digital wallet
                            </div>
                        </div>
                    </div>

                    <div className="mt-[200px] flex flex-col gap-[300px]">
                        <div className="h-[587px] flex-shrink-0 flex flex-row justify-between relative">
                            <div className="flex flex-col">
                                <div className="w-[300px] h-[80px] flex-shrink-0 rounded-[20px] bg-gray-200 bg-opacity-90 absolute top-0 left-[200px]">
                                    <div className="gap-5 flex">
                                        <div className="flex w-[50px] h-[50px] justify-center items-center flex-shrink-0 mt-[15px] ml-[26px]">
                                            <img src={Approved} alt="icon"/>
                                        </div>
                                        <div className="flex flex-col mt-[19px] gap-[10px]">
                                            <div className="flex w-[150px] h-4 flex-col justify-center flex-shrink-0 text-black text-[16px]"
                                                style={{ fontFamily:"SF-Pro-Display-Semibold", fontStyle:"normal", lineHeight:"normal" }}>
                                                Received approved
                                            </div>
                                            <div className="flex w-[180px] h-4 flex-col justify-center flex-shrink-0 text-[14px]"
                                                style={{ color:"#666", fontFamily:"SF-Pro-Display-Medium", fontStyle:"normal", lineHeight:"normal" }}>
                                                $3,488.00 USDT for TRON
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-[300px] h-[80px] flex-shrink-0 rounded-[20px] bg-gray-200 bg-opacity-90 absolute bottom-[130px] left-[230px]">
                                    <div className="gap-5 flex">
                                        <div className="flex w-[50px] h-[50px] justify-center items-center flex-shrink-0 mt-[15px] ml-[26px]">
                                            <img src={Approved} alt="icon"/>
                                        </div>
                                        <div className="flex flex-col mt-[19px] gap-[10px]">
                                            <div className="flex w-[150px] h-4 flex-col justify-center flex-shrink-0 text-black text-[16px]"
                                                style={{ fontFamily:"SF-Pro-Display-Semibold", fontStyle:"normal", lineHeight:"normal" }}>
                                                Received approved
                                            </div>
                                            <div className="flex w-[180px] h-4 flex-col justify-center flex-shrink-0 text-[14px]"
                                                style={{ color:"#666", fontFamily:"SF-Pro-Display-Medium", fontStyle:"normal", lineHeight:"normal" }}>
                                                $5,000.00 USDT for TRON
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-[300px] h-[80px] flex-shrink-0 rounded-[20px] bg-gray-200 bg-opacity-90 absolute bottom-0 left-0">
                                    <div className="gap-5 flex">
                                        <div className="flex w-[50px] h-[50px] justify-center items-center flex-shrink-0 mt-[15px] ml-[26px]">
                                            <img src={Approved} alt="icon"/>
                                        </div>
                                        <div className="flex flex-col mt-[19px] gap-[10px]">
                                            <div className="flex w-[150px] h-4 flex-col justify-center flex-shrink-0 text-black text-[16px]"
                                                style={{ fontFamily:"SF-Pro-Display-Semibold", fontStyle:"normal", lineHeight:"normal" }}>
                                                Sent approved
                                            </div>
                                            <div className="flex w-[180px] h-4 flex-col justify-center flex-shrink-0 text-[14px]"
                                                style={{ color:"#666", fontFamily:"SF-Pro-Display-Medium", fontStyle:"normal", lineHeight:"normal" }}>
                                                - $658.00 USDT for TRON
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-[500px] h-[500px] flex-shrink-0 mt-[33px] mb-[54px]">
                                    <video autoPlay loop muted className="rounded-[250px] shadow-md object-fill w-full h-full" src={WomanCreditCard} title="Home Video 1-1"></video>
                                </div>
                            </div>
                    
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

                            <div className="flex flex-col relative">
                                <div className="w-[300px] h-[80px] flex-shrink-0 rounded-[20px] bg-gray-200 bg-opacity-90 absolute top-0 left-0">
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

                                <div className="w-[300px] h-[80px] flex-shrink-0 rounded-[20px] bg-gray-200 bg-opacity-90 absolute bottom-0 right-0">
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
                                    <video autoPlay loop muted className="rounded-[250px] shadow-md object-fill w-full h-full" src={DigitalIdentityBlocking} title="Home Video 1-1"></video>
                                </div>
                            </div>   
                        </div>

                        <div className="h-[500px] flex-shrink-0 flex flex-row justify-between items-center">
                            <div className="w-[500px] h-[500px] flex-shrink-0">
                                <video autoPlay loop muted className="rounded-[250px] shadow-md object-fill w-full h-full" src={AmericanDollar} title="Home Video 1-1"></video>
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
                                <div className="w-[300px] h-[80px] flex-shrink-0 rounded-[20px] bg-gray-200 bg-opacity-90 absolute top-0 right-0">
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

                                <div className="w-[300px] h-[80px] flex-shrink-0 rounded-[20px] bg-gray-200 bg-opacity-90 absolute bottom-0 left-10">
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
                                    <video autoPlay loop muted className="rounded-[250px] shadow-md object-fill w-full h-full" src={MoneyReceivedFund} title="Home Video 1-1"></video>
                                </div>
                            </div>
                       
                        </div>

                        <div className="h-[500px] flex-shrink-0 flex flex-row justify-between items-center">
                            <div className="w-[500px] h-[500px] flex-shrink-0">
                                <video autoPlay loop muted className="rounded-[250px] shadow-md object-fill w-full h-full" src={FemaleFingerHolding} title="Home Video 1-1"></video>
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

            <div className="fixed bottom-6 right-6">
                <div className="w-[50px] h-[50px] flex-shrink-0" onClick={scrollToTop}>
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