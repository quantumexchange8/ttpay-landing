
import QRCode from '../assets/images/qrcode.svg';
import Approved from '../assets/images/approved.svg';
import ApprovedWithoutRed from '../assets/images/approved-without-red.svg';
import RedIcon from '../assets/images/red-icon.svg';
import ModalApp from '../Components/ModalApp';
import ModalContact from '../Components/ModalContact';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ReactLoading from 'react-loading';
import LazyLoad from 'react-lazyload';
import { AppleIcon, GoogleDriveIcon, GoogleIcon, GooglePlayIcon, ReceiveIcon, ScrollTopIcon, SendIcon, Trc20 } from '../Components/Icon';

const Home = () => {
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

    const [videoLoading, setVideoLoading] = useState(true);
    const [openModalApp, setOpenModalApp] = useState(false);
    const [openModalContact, setOpenModalContact] = useState(false);

    const handleVideoLoaded = () => {
        setVideoLoading(false);
    };

    return (
        <div className="wrapper min-w-xs md:h-full w-full">

            <div className="flex justify-center mt-[110px] mx-[22px] md:mt-[220px]">
                <div className="flex flex-col gap-9 w-full mb-[100px] md:flex-row justify-center md:mb-[200px] md:w-[1000px] md:gap-[74px]">
                    <div className="flex flex-col justify-center gap-6 md:gap-[30px] w-full">
                        <div className="flex w-full md:w-[420px] flex-col justify-center text-black text-[28px] leading-[33px] md:text-[40px] md:leading-[45px]">
                            <div className="w-full md:w-[420px] font-bold">
                                {t('part1ContentBold.part1')} <span className="text-[#0038FF]"> {t('part1ContentBold.part2')}</span>
                            </div>
                        </div>
                        <div className="flex w-full flex-col justify-center text-black text-lg md:text-xl md:font-medium">
                            {language === 'zh' ? (
                                <div>
                                    <div className="w-full flex flex-col font-normal leading-tight md:font-semibold md:hidden">
                                        {t('part1ContentNormal')}
                                    </div>
                                    <div className="w-full flex-col font-semibold hidden md:flex">
                                        {t('part1ContentNormal')}
                                    </div>
                                </div>
                                
                                
                            ) : (
                                <div className="w-[320px] md:w-[450px] text-lg leading-tight font-medium">
                                    {t('part1ContentNormal')}
                                </div>
                            )}
                        </div>
                        <div className="w-full h-auto flex gap-2">                 
                            <div 
                            className="w-[43.391px] h-[43.391px] md:w-[70px] md:h-[70px] rounded-[7px] md:rounded-[10px] bg-[#333] flex justify-center items-center hover:-translate-y-1 transition-all duration-300 ease-in-out">
                                <div className="md:w-[35.957px] md:h-[44px] hidden md:block">
                                    <AppleIcon width={36} height={44}/>
                                </div>
                                <div className="w-[22.289px] h-[27.274px] md:hidden">
                                    <AppleIcon width={22} height={27}/>
                                </div>                                                                    
                            </div>
                            <div 
                            className="w-[43.391px] h-[43.391px] md:w-[70px] md:h-[70px] rounded-[7px] md:rounded-[10px] bg-[#333] flex justify-center items-center hover:-translate-y-1 transition-all duration-300 ease-in-out">
                                <div className="w-[24.795px] h-[27.274px] md:w-10 md:h-11 hidden md:block">
                                    <GooglePlayIcon width={40} height={44}/>
                                </div>
                                <div className="w-[24.795px] h-[27.274px] md:w-10 md:h-11 md:hidden">
                                    <GooglePlayIcon width={22} height={27}/>
                                </div>
                            </div>
                            <div 
                                className="flex w-[220px] h-[43.391px] md:w-[310px] md:h-[70px] rounded-[7px] md:rounded-[10px] border border-gray-300 bg-white shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out"
                                onClick={() => setOpenModalApp(true)} 
                                style={{ cursor: 'pointer' }}
                            >      
                                <div className="flex justify-center items-center gap-3 md:gap-[22px] w-full">
                                    <div className="w-6 h-6 md:w-[40px] md:h-[40px]">
                                        <img src={QRCode} alt="qrcode"/>
                                    </div>                   
                                    <div className="flex w-[150px] h-5 md:w-[210px] md:h-auto flex-col justify-center text-black text-[10px] md:text-[16px] font-medium leading-tight">
                                        Show QR to download new version app on your mobile
                                    </div>
                                </div>
                            </div>
                            <ModalApp open={openModalApp} onClose={() => setOpenModalApp(false)}>
                                                    
                            </ModalApp>
                        </div>
                    </div>
                    
                    
                    <div className="w-full grid grid-cols-3 gap-[15px] justify-center md:flex md:flex-wrap md:gap-[20px]">
                        <div className="w-full h-[106px] md:w-[140px] md:h-[140px]">
                            {videoLoading && (
                                <div className="loading-spinner flex justify-center items-center">
                                    <ReactLoading type={'bars'} color={'#0038FF'} height={50} width={50} />
                                </div>
                            )}
                            <LazyLoad className='h-full' once>
                                <video autoPlay muted playsInline loop="loop" preload="auto" onLoadedData={handleVideoLoaded} className="w-full h-full rounded-[7px] md:rounded-[10px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] object-cover" title="Home Video 1-1">
                                    <source src="/assets/videos/home-video-1-1.mp4" type="video/mp4"/>
                                </video>
                            </LazyLoad>
                            
                        </div>

                        <div className="w-full h-[106px] md:w-[140px] md:h-[140px]">
                            {videoLoading && (
                                <div className="loading-spinner flex justify-center items-center">
                                    <ReactLoading type={'bars'} color={'#0038FF'} height={50} width={50} />
                                </div>
                            )}
                            <LazyLoad className='h-full' once>
                                <video autoPlay muted playsInline loop="loop" preload="auto" onLoadedData={handleVideoLoaded} className="w-full h-full rounded-[7px] md:rounded-[10px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] object-cover" title="Home Video 2-1">
                                    <source src="/assets/videos/home-video-2-1.mp4" type='video/mp4'/>
                                </video>
                            </LazyLoad>
                        </div>

                        <div className="w-full h-[106px] md:w-[140px] md:h-[140px]">
                            {videoLoading && (
                                <div className="loading-spinner flex justify-center items-center">
                                    <ReactLoading type={'bars'} color={'#0038FF'} height={50} width={50} />
                                </div>
                            )}
                            <LazyLoad className='h-full' once>
                                <video autoPlay muted playsInline loop="loop" preload="auto" onLoadedData={handleVideoLoaded} className="w-full h-full rounded-[7px] md:rounded-[10px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] object-cover" title="Home Video 3-1">
                                    <source src="/assets/videos/home-video-3-1.mp4" type='video/mp4'/>
                                </video>
                            </LazyLoad>
                        </div>

                        <div className="w-full h-[106px] md:w-[140px] md:h-[140px]">
                            {videoLoading && (
                                <div className="loading-spinner flex justify-center items-center">
                                    <ReactLoading type={'bars'} color={'#0038FF'} height={50} width={50} />
                                </div>
                            )}
                            <LazyLoad className='h-full' once>
                                <video autoPlay muted playsInline loop="loop" preload="auto" onLoadedData={handleVideoLoaded} className="w-full h-full rounded-[7px] md:rounded-[10px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] object-cover" title="Home Video 1-2">
                                    <source src="/assets/videos/home-video-1-2.mp4" type='video/mp4'/>
                                </video>
                            </LazyLoad>
                        </div>

                        <div className="w-full h-[106px] md:w-[140px] md:h-[140px]">
                            {videoLoading && (
                                <div className="loading-spinner flex justify-center items-center">
                                    <ReactLoading type={'bars'} color={'#0038FF'} height={50} width={50} />
                                </div>
                            )}
                            <LazyLoad className='h-full' once>
                                <video autoPlay muted playsInline loop="loop" preload="auto" onLoadedData={handleVideoLoaded} className="w-full h-full rounded-[7px] md:rounded-[10px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] object-cover" title="Home Video 2-2">
                                    <source src="/assets/videos/home-video-2-2.mp4" type='video/mp4'/>
                                </video>
                            </LazyLoad>
                        </div>

                        <div className="w-full h-[106px] md:w-[140px] md:h-[140px]">
                            {videoLoading && (
                                <div className="loading-spinner flex justify-center items-center">
                                    <ReactLoading type={'bars'} color={'#0038FF'} height={50} width={50} />
                                </div>
                            )}
                            <LazyLoad className='h-full' once>
                                <video autoPlay muted playsInline loop="loop" preload="auto" onLoadedData={handleVideoLoaded} className="w-full h-full rounded-[7px] md:rounded-[10px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] object-cover" title="Home Video 3-2">
                                    <source src="/assets/videos/home-video-3-2.mp4" type='video/mp4'/>
                                </video>
                            </LazyLoad>
                        </div>

                        <div className="w-full h-[106px] md:w-[140px] md:h-[140px]">
                            {videoLoading && (
                                <div className="loading-spinner flex justify-center items-center">
                                    <ReactLoading type={'bars'} color={'#0038FF'} height={50} width={50} />
                                </div>
                            )}
                            <LazyLoad className='h-full' once>
                                <video autoPlay muted playsInline loop="loop" preload="auto" onLoadedData={handleVideoLoaded} className="w-full h-full rounded-[7px] md:rounded-[10px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] object-cover" title="Home Video 1-3">
                                    <source src="/assets/videos/home-video-1-3.mp4" type='video/mp4'/>
                                </video>
                            </LazyLoad>
                        </div>

                        <div className="w-full h-[106px] md:w-[140px] md:h-[140px]">
                            {videoLoading && (
                                <div className="loading-spinner flex justify-center items-center">
                                    <ReactLoading type={'bars'} color={'#0038FF'} height={50} width={50} />
                                </div>
                            )}
                            <LazyLoad className='h-full' once>
                                <video autoPlay muted playsInline loop="loop" preload="auto" onLoadedData={handleVideoLoaded} className="w-full h-full rounded-[7px] md:rounded-[10px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] object-cover" title="Home Video 2-3">
                                    <source src="/assets/videos/home-video-2-3.mp4" type='video/mp4'/>
                                </video>
                            </LazyLoad>
                        </div>

                        <div className="w-full h-[106px] md:w-[140px] md:h-[140px]">
                            {videoLoading && (
                                <div className="loading-spinner flex justify-center items-center">
                                    <ReactLoading type={'bars'} color={'#0038FF'} height={50} width={50} />
                                </div>
                            )}
                            <LazyLoad className='h-full' once>
                                <video autoPlay muted playsInline loop="loop" preload="auto" onLoadedData={handleVideoLoaded} className="w-full h-full rounded-[7px] md:rounded-[10px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] object-cover" title="Home Video 3-3">
                                    <source src="/assets/videos/home-video-3-3.mp4" type='video/mp4'/>
                                </video>
                            </LazyLoad>
                        </div>
                    </div>
                </div>
            </div>

            {/* Part 2 */}
            <div className="bg-[#f4efff] sm:w-full h-[306px] md:h-[200px] md:w-full flex justify-center">
                <div className="flex flex-col gap-5 md:gap-8 justify-center items-center md:w-[1000px] md:flex-row md:justify-between">
                    <div className="flex flex-col gap-[30px] md:gap-5 items-center justify-center md:items-start">
                        <div className="text-[64px] leading-none md:text-8xl font-bold text-[#0038FF]" >
                            386,370
                        </div>
                        <div className="text-2xl md:text-3xl text-center md:text-start font-bold text-[#888]" >
                            {t('part2ContentNormal')}
                        </div>
                    </div>
                    <div onClick={() => setOpenModalContact(true)}>
                        <button type='button' className="w-[200px] h-[50px] rounded-[7px] md:rounded-[10px] bg-gradient-to-br from-primary-25 via-primary-50 to-primary-100 text-white text-center text-[20px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] font-bold">
                                {t('part2Button')}
                        </button>
                    </div>
                    <ModalContact open={openModalContact} onClose={() => setOpenModalContact(false)}></ModalContact>
                </div>
            </div>
            {/* Part 3 */}
            <div className="max-w-full flex justify-center">
                <div className="w-[390px] mb-0 md:w-[1000px]">
                    <div className="flex flex-col gap-[150px] mx-[22px] md:mx-0 my-[150px]">

                        <div className="flex justify-center text-2xl md:text-5xl text-center w-full font-bold">
                            <span className='md:w-[800px]'>{t('part3ContentBoldTitle')}</span>
                        </div>

                        <div className="h-[630px] md:h-[587px] flex flex-col md:flex-row justify-between relative md:gap-[75px]">
                            <div className="flex md:flex-col h-[380px] md:h-full justify-center flex-row">
                                <div className="w-[194px] h-[51.896px] md:w-[300px] md:h-[80px] rounded-[7px] md:rounded-[10px] bg-[#dddddde6] flex justify-center absolute top-0 left-[145px] md:left-[200px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] z-10">
                                    <div className="md:gap-5 flex justify-center items-center gap-3">
                                        <div className="flex w-[32.435px] h-[32.435px] md:w-[50px] md:h-[50px] justify-center items-center">
                                            <Trc20/>
                                        </div>
                                        <div className="flex flex-col gap-1 md:gap-2 md:w-full">
                                            <div className="flex w-[110px] md:w-[180px] flex-col justify-center text-black text-[11px] leading-none md:text-base font-bold md:leading-none">
                                                    {t('part3Notif1')}
                                            </div>
                                            <div className="flex flex-col w-[110px] md:w-[180px] justify-center text-[9px] leading-none md:text-sm md:leading-none">
                                                    $3,488.00 USDT for TRON
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-[194.61px] h-[51.896px] md:w-[300px] md:h-[80px] rounded-[7px] md:rounded-[10px] bg-[#dddddde6] flex justify-center absolute bottom-[340px] left-[150px] md:bottom-[130px] md:left-[230px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] z-10">
                                    <div className="md:gap-5 flex justify-center items-center gap-3">
                                        <div className="flex w-[32.435px] h-[32.435px] md:w-[50px] md:h-[50px] justify-center items-center">
                                            <Trc20/>
                                        </div>
                                        <div className="flex flex-col gap-1 md:gap-2 md:w-full">
                                            <div className="flex w-[110px] md:w-[180px] flex-col justify-center text-black text-[11px] leading-none md:text-base font-bold md:leading-none">
                                                    {t('part3Notif1')}
                                            </div>
                                            <div className="flex flex-col w-[110px] md:w-[180px] justify-center text-[9px] leading-none md:text-sm md:leading-none">
                                                $5,000.00 USDT for TRON
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-[194.61px] h-[51.896px] md:w-[300px] md:h-[80px] rounded-[7px] md:rounded-[10px] bg-[#dddddde6] flex justify-center absolute bottom-[270px] md:bottom-0 left-[33px] md:left-0 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)] z-10">
                                    <div className="md:gap-5 flex justify-center items-center gap-3">
                                        <div className="flex flex-col gap-1 md:gap-2 md:w-full">
                                            <Trc20/>
                                        </div>
                                        <div className="flex flex-col gap-1 md:gap-2 md:w-full">
                                            <div className="flex w-[110px] md:w-[180px] flex-col justify-center text-black text-[11px] leading-none md:text-base font-bold md:leading-none">
                                                {t('part3Notif2')}
                                            </div>
                                            <div className="flex flex-col w-[110px] md:w-[180px] justify-center text-[9px] leading-none md:text-sm md:leading-none">
                                                - $658.00 USDT for TRON
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-[324.349px] h-[324.349px] md:w-[500px] md:h-[500px] md:mt-[33px] md:mb-[54px]">
                                    <LazyLoad className='h-full' once>
                                        <video autoPlay muted playsInline loop="loop" preload="auto" className="rounded-[250px] object-cover w-full h-full drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)]" title="Home Video 1-1">
                                            <source src="/assets/videos/woman-credit-card.mp4" type='video/mp4'/>
                                        </video>
                                    </LazyLoad>
                                </div>
                            </div>
                            {/* Part 3-1-text */}
                            <div className="flex flex-col justify-center gap-[10px] md:gap-[30px]">
                                <div className="flex w-full text-center md:text-left md:w-full flex-col text-black text-[20px] leading-tight md:text-[32px] font-bold">
                                    {t('part3ContentBold')}
                                </div>
                                <div className="flex w-full md:w-full md:h-auto flex-col justify-center items-center text-black text-base md:text-[20px] font-medium">
                                    <div className="w-[300px] flex justify-center sm:justify-start text-center sm:text-left md:w-full leading-tight">
                                        {t('part3ContentNormal')}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Part 2*/}
                        <div className="flex flex-col-reverse md:flex-row justify-between gap-[30px] md:gap-[75px]">
                            <div className="flex flex-col justify-center gap-[10px] md:gap-[30px]">
                                <div className="flex w-full text-center md:w-[400px] flex-col justify-center text-black text-[20px] leading-none md:text-start md:text-[32px] md:leading-none font-bold">
                                        {t('part4ContentBold')}
                                </div>
                                <div className="flex w-full flex-col items-center justify-center text-black text-[16px] leading-tight md:text-[20px] md:leading-tight font-medium">
                                        <div className="flex justify-center w-[315px] md:w-full sm:justify-start text-center sm:text-left">
                                            {t('part4ContentNormal')}
                                        </div>
                                </div>
                            </div>
                            {/* Part 3-2-notif1,2 */}
                            <div className="flex md:flex-col relative md:h-full justify-center flex-row">
                                <div className="w-[194.61px] h-[51.896px] md:w-[300px] md:h-[80px] rounded-[7px] md:rounded-[10px] bg-[#dddddde6] flex justify-center absolute top-0 md:top-0 left-[33px] md:left-0 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)]">
                                    <div className="md:gap-5 flex justify-center items-center gap-3">
                                        <div className="flex w-[32.435px] h-[32.435px] md:w-[50px] md:h-[50px] justify-center items-center">
                                            <GoogleIcon/>
                                        </div>
                                        <div className="flex flex-col gap-[7px] md:gap-[10px] md:w-full">
                                            <div className="flex w-[110px] md:w-[180px] text-xs md:text-base font-semibold leading-none md:leading-none">
                                                    {t('part4Notif1')}
                                            </div>
                                            <div className="flex w-[120px] md:w-[180px] text-[7px] leading-none md:text-xs text-[#666] font-medium md:leading-none">
                                                    {t('part4Notif2')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[194.61px] h-[51.896px] md:w-[300px] md:h-[80px] rounded-[7px] md:rounded-[10px] bg-[#dddddde6] flex justify-center absolute bottom-[45px] right-0 md:bottom-[34px] md:right-0 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)]">
                                    <div className="md:gap-5 flex justify-center items-center gap-3">
                                        <div className="flex w-[32.435px] h-[32.435px] md:w-[50px] md:h-[50px] justify-center items-center">
                                            <GoogleDriveIcon/>
                                        </div>
                                        <div className="flex flex-col gap-[7px] md:gap-[10px] md:w-full">
                                            <div className="flex w-[110px] md:w-[180px] text-xs md:text-base font-semibold leading-none md:leading-none">
                                                {t('part4Notif1')}
                                            </div>
                                            <div className="flex w-[120px] md:w-[180px] text-[7px] leading-none md:text-xs text-[#666] font-medium md:leading-none">
                                                {t('part4Notif2')}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-[324.349px] h-[324.349px] md:w-[500px] md:h-[500px]">
                                    <LazyLoad className='h-full' once>
                                        <video autoPlay muted playsInline loop="loop" preload="auto" className="rounded-[250px] shadow-md object-cover w-full h-full" title="Home Video 1-1">
                                            <source src="/assets/videos/digital-identity-blocking.mp4" type='video/mp4'/>
                                        </video>
                                    </LazyLoad>
                                </div>
                            </div>   
                        </div>

                        {/* Part 3 */}
                        <div className="flex flex-col md:flex-row justify-between items-center relative gap-[30px] md:gap-[75px]">
                            <div className="w-[324.349px] h-[324.349px] md:w-[500px] md:h-[500px]">
                                <LazyLoad className='h-full' once>
                                    <video autoPlay muted playsInline loop="loop" preload="auto" className="rounded-[250px] shadow-md object-cover w-full h-full" title="Home Video 1-1">
                                        <source src="/assets/videos/american-dollar.mp4" type='video/mp4'/>
                                    </video>
                                </LazyLoad>
                                <div className="bottom-[220px] right-[70px] gap-[5px] absolute md:bottom-[115px] md:left-[250px] w-[120px] md:w-[170px] md:h-[50px] flex items-end justify-end md:gap-[10px]">
                                    <div className="w-[34.9px] h-[34.9px] md:w-[50px] md:h-[50px]">
                                        <img src={ApprovedWithoutRed} alt="Approved Without Red" className="w-50 h-50"/>
                                    </div>
                                    <div className="w-[34.9px] h-[34.9px] md:w-[50px] md:h-[50px]">
                                        <img src={Approved} alt="Approved" className="w-50 h-50"/>
                                    </div>
                                    <div className="w-[34.9px] h-[34.9px] md:w-[50px] md:h-[50px]">
                                        <img src={RedIcon} alt="Red Icon" className="w-50 h-50"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[10px] md:gap-[30px]">
                                <div className="flex w-full md:w-[390px] flex-col justify-center text-xl leading-tight md:text-start md:text-[32px] md:leading-tight text-center font-bold">
                                        {t('part5ContentBold')}
                                    </div>
                                <div className="flex w-full md:w-[420px] flex-col justify-center items-center text-base leading-tight md:text-xl md:text-start text-center font-medium">
                                    <span className='w-[315px] md:w-full'>
                                        {t('part5ContentNormal')}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Part4 */}
                        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-[30px] md:gap-[75px]">
                            <div className="flex flex-col gap-[10px] md:gap-[30px]">
                                <div className="flex w-full flex-col justify-center text-xl leading-none md:text-[32px] md:leading-none text-center md:text-start font-bold">
                                    {t('part6ContentBold')}
                                </div>
                                <div className="flex w-full md:w-[400px] flex-col justify-center items-center text-base leading-tight md:text-xl font-medium">
                                    <div className="w-[290px] md:w-full flex justify-center sm:justify-start sm:text-left text-center ">
                                        {t('part6ContentNormal')}
                                    </div>
                                </div>
                            </div>
                            <div className="flex md:flex-col relative w-full justify-center flex-row">
                                <div className="w-[209.4px] h-[55.84px] md:w-[300px] md:h-[80px] rounded-[7px] md:rounded-[10px] bg-[#dddddde6] flex justify-center items-center absolute top-[32px] right-0 md:top-8 md:left-[200px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)]">
                                    <div className="flex justify-center">
                                        <div className="flex gap-[10px] w-[90px] md:w-[150px]">
                                            <div className='md:mt-[2px]'>
                                                <ReceiveIcon/>
                                            </div>
                                            <div className="flex flex-col gap-2 md:gap-3">
                                                <div className="flex flex-col gap-1 md:gap-1">
                                                    <div className="flex flex-col justify-center text-[11px] leading-none md:text-base font-semibold md:leading-none">
                                                        {t('part6Notif1')}
                                                    </div>
                                                    <div className="flex w-[60px] flex-col justify-center text-[8.376px] leading-none md:text-xs text-[#666] md:leading-none">
                                                        23:27pm
                                                    </div>
                                                </div>

                                                <div className="flex w-[110px] flex-col justify-center text-[9.772px] leading-none md:text-sm md:leading-none text-[#666] font-medium">
                                                    {t('part6Notif2')}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-end gap-1">
                                            <div className="flex w-[110px] flex-col justify-center text-right text-xs leading-none md:text-base md:leading-none font-bold text-[#34A853]">
                                                +$65,294.22
                                            </div>
                                            <div className="flex w-9 flex-col justify-center text-right text-[8px] leading-none md:text-xs md:leading-none text-[#666]">
                                                USDT
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[209.4px] h-[55.84px] md:w-[300px] md:h-[80px] rounded-[7px] md:rounded-[10px] bg-[#dddddde6] flex justify-center items-center absolute md:bottom-[55px] bottom-0 left-[42px] md:left-[60px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.4)]">
                                    <div className="flex justify-center">
                                        <div className="flex gap-[10px] w-[90px] md:w-[150px]">
                                            <div className='md:mt-[2px]'>
                                                <SendIcon/>
                                            </div>
                                            <div className="flex flex-col gap-2 md:gap-3">
                                                <div className="flex flex-col gap-1 md:gap-1">
                                                    <div className="flex flex-col justify-center text-[11px] leading-none md:text-base font-semibold md:leading-none">
                                                        {t('part6Notif3')}
                                                    </div>
                                                    <div className="flex w-[60px] flex-col justify-center text-[8.376px] leading-none md:text-xs text-[#666] md:leading-none">
                                                        23:27pm
                                                    </div>
                                                </div>

                                                <div className="flex w-[110px] flex-col justify-center text-[9.772px] leading-none md:text-sm md:leading-none text-[#666] font-medium">
                                                    {t('part6Notif2')}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-end gap-1">
                                            <div className="flex w-[110px] flex-col justify-center text-right text-xs md:text-base md:leading-none font-bold text-[#4285F4]">
                                                -$3,173.98
                                            </div>
                                            <div className="flex w-9 flex-col justify-center text-right text-[8px] md:text-xs md:leading-none text-[#666]">
                                                USDT
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-[324.349px] h-[324.349px] md:w-[500px] md:h-[500px] md:mt-[33px] md:mb-[54px]">
                                    <LazyLoad className='h-full' once>
                                        <video autoPlay muted playsInline loop="loop" preload="auto" className="rounded-[250px] shadow-md object-cover w-full h-full" title="Home Video 1-1">
                                            <source src="/assets/videos/money-received-fund.mp4" type='video/mp4'/>
                                        </video>
                                    </LazyLoad>
                                </div>
                            </div>
                        </div>

                        {/* Part5 */}
                        <div className="flex flex-col md:flex-row justify-between items-center gap-[30px] md:gap-[75px]">
                            <div className="w-[324.349px] h-[324.349px] md:w-[500px] md:h-[500px]">
                                <LazyLoad className='h-full' once>
                                    <video autoPlay muted playsInline loop="loop" preload="auto" className="rounded-[250px] shadow-md object-cover w-full h-full" title="Home Video 1-1">
                                        <source src="/assets/videos/female-finger-holding.mp4" type='video/mp4'/>
                                    </video>
                                </LazyLoad>
                            </div>
                            <div className="flex flex-col gap-[10px] md:gap-[30px]">
                                <div className="flex w-full flex-col justify-center text-[20px] leading-none md:text-start md:text-[32px] md:leading-none font-bold text-center">
                                    {t('part7ContentBold')}
                                </div>
                                <div className="flex w-full md:w-[380px] flex-col justify-center text-[16px] leading-tight md:text-xl md:leading-tight font-medium text-center md:text-start">
                                    <div className="w-[320px] md:w-full flex justify-center sm:justify-start sm:text-left">
                                        {t('part7ContentNormal')}
                                    </div>
                                </div>
                            </div>
                        </div>                   
                    </div>
                </div>
            </div>

            <div className="fixed bottom-6 right-6" style={{ animationDuration: '1.5s' }}>
                <div className="w-[50px] h-[50px] cursor-pointer" onClick={scrollToTop}>
                    <ScrollTopIcon/>
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