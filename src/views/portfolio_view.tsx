import React, { Component, useEffect, memo, useRef } from "react";
import Lottie from "lottie-react";
import FishSwimming from "../assets/lottie/fish_swimming.json";
import CButton from "../components/c_button";
import { Icon } from '@iconify/react';
import ImageNetwork from "../components/c_image_network";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { useAppSelector, useAppDispatch } from '../app/provider_hooks'
import { changeShowcaseId, changeShowcaseImages, changeShowcaseContent, toSectionIntro, disablePortfolio } from '../app/reducers/landing_reducer'
import { useSpringValue, useSpring, easings } from "react-spring";
import { animated } from '@react-spring/web'
import { fastOutSlowIn } from "../app/easing";
import { LandingSection } from "../app/enum";
import CLayouting from "../components/c_layouting";

class LottieAnimation extends React.PureComponent {
    render() {
        return <Lottie animationData={FishSwimming}
            style={{ height: "100vh", width: "100vw", clipPath: 'rectangle(0px 0px 0px 0px)' }}
            rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }} />;
    }
}


function PortfolioView() {
    const section = useAppSelector((state) => state.landing.section)
    const showcaseId = useAppSelector((state) => state.landing.portfolio.showcaseId)
    const title = useAppSelector((state) => state.landing.portfolio.title)
    const desc = useAppSelector((state) => state.landing.portfolio.desc)
    const tag = useAppSelector((state) => state.landing.portfolio.tag)
    const imageShowcases = useAppSelector((state) => state.landing.portfolio.imageShowcases)
    const dispatch = useAppDispatch()



    useEffect(() => {
        selectShowcase(1)
    }, []);

    const opacityDesc = useSpringValue(1, {
        config: { easing: fastOutSlowIn, duration: 500 }
    },)



    var descAnim = useSpring({
        delay: section === LandingSection.Portfolio ? 500 : 0,
        reverse: section === LandingSection.Portfolio ? false : true,
        from: {
            opacity: 0,
            transform: 'translateX(-100%)'
        },
        to: {
            opacity: 1,
            transform: 'translateX(0%)'
        },
        config: { easing: fastOutSlowIn, duration: 1000 },
    })
    var showcaseAnim = useSpring({
        delay: section !== LandingSection.Portfolio ? 0 : 1000,
        reverse: section !== LandingSection.Portfolio ? true : false,
        from: {
            transform: CLayouting({ xs: 'translateY(-100%)', sm: 'translateY(100%)' })
        },
        to: {
            transform: 'translateY(0%)'
        },
        config: { easing: fastOutSlowIn, duration: 1000 },
    })



    function availableStore(gplay?: string, appstore?: string) {
        const gplayBtn = () => gplay ? (<a href={gplay} target="_blank" key={gplay}>
            <img src={ImageNetwork.getOnGooglePlay} className="w-36 object-contain rounded-lg" />
        </a>) : <div></div>
        const appstoreBtn = () => appstore ? (<a href={appstore} target="_blank" key={appstore}>
            <img src={ImageNetwork.getOnAppStore} className="w-36 object-contain rounded-lg" />
        </a>) : <div></div>
        if (gplay != undefined && appstore != undefined) {
            return (
                <div className="flex gap-3 mt-8">
                    {gplayBtn()}
                    {appstoreBtn()}
                </div>
            )
        } else if (gplay != undefined) {
            return (
                <div className="mt-8">{gplayBtn()}</div>
            )
        } else {
            return (
                <div className="mt-8">{appstoreBtn()}</div>
            )
        }
    }

    function tagItem(text: string[]) {
        return (<div className="flex flex-wrap gap-3 mt-6 mr-4 ">
            {
                text.map((item: string, index: number) => {
                    return (<div className="border border-gray-300 rounded-xl p-2 text-center">
                        <p className="text-sm text-white">{item}</p>
                    </div>)
                })
            }
        </div>)
    }
    function selectShowcase(id: number) {

        dispatch(changeShowcaseId(id))




        var replaceTitle = "";
        var replaceDesc = "";
        var replaceTag = tagItem([""]);

        if (id === 1) {
            replaceTitle = "blumb";
            replaceDesc = "blumb adalah aplikasi sosial yang berfokus kepada pengguna profesional, menyediakan lingkungan terbaik bagi para pengguna yang ingin mencari relasi kerja, organisasi dan komunitas profesional, event profesional dan lain sebagainya.";
            replaceTag = (<div>
                {tagItem(["PT. Andalan Basis Teknologi Informatika", "Pre-Release", "Actively Maintained", "Under Development", "Android", "iOS"])}
                {availableStore("https://play.google.com/store/apps/details?id=com.abiseka.blumb", "https://apps.apple.com/id/app/blumb/id6449251568")}
            </div>);
            dispatch(changeShowcaseImages([
                ImageNetwork.showcaseBlumb1,
                ImageNetwork.showcaseBlumb2,
                ImageNetwork.showcaseBlumb3,
                ImageNetwork.showcaseBlumb4,
                ImageNetwork.showcaseBlumb5,
                ImageNetwork.showcaseBlumb6,
                ImageNetwork.showcaseBlumb7,
                ImageNetwork.showcaseBlumb8
            ]))

        } else if (id === 2) {
            replaceTitle = "KTKI e-STR Mobile"
            replaceDesc = "Aplikasi atas kerja sama dengan Konsil Tenaga Kesehatan Indonesia (sekarang Konsil Kesehatan Indonesia) dibawah naungan Kementerian Kesehatan yang dibuat khusus untuk tenaga kesehatan untuk melakukan pengajuan, perbaikan dan cetak surat tanda registrasi yang telah memiliki sertifikat kompetensi."
            replaceTag = tagItem(["Konsil Tenaga Kesehatan Indonesia", "Kementerian Kesehatan", "Unreleased", "Under Development", "Android", "iOS"])

            dispatch(changeShowcaseImages([
                ImageNetwork.showcaseESTR1,
                ImageNetwork.showcaseESTR2,
                ImageNetwork.showcaseESTR3,
                ImageNetwork.showcaseESTR4
            ]))
        }
        else if (id === 3) {
            replaceTitle = "Moloco"
            replaceDesc = "Mobile Logbook Co-Ass atau Moloco adalah aplikasi yang dikembangkan untuk membantu mahasiswa dan dosen dalam mengatur pengajuan logbook, penilaian, perwalian dan aktivitas perkuliahan di Universitas Islam Sultan Agung (UNISSULA) fakultas kedokteran."
            replaceTag = (<div>
                {tagItem(["Fakultas Kedokteran Universitas Islam Sultan Agung", "Released", "Live Production", "Actively Maintained", "Android", "iOS"])}
                {availableStore("https://play.google.com/store/apps/details?id=com.fkunissula.molocopspdfkunissula", "https://apps.apple.com/id/app/moloco/id1625049471")}
            </div>);


            dispatch(changeShowcaseImages([
                ImageNetwork.showcaseMoloco1,
                ImageNetwork.showcaseMoloco2,
                ImageNetwork.showcaseMoloco3,
                ImageNetwork.showcaseMoloco4
            ]))
        }
        else if (id === 4) {
            replaceTitle = "OBAT-in"
            replaceDesc = "Pengembangan aplikasi bidang kesehatan yang menyediakan layanan dokter dan tenaga medis lainnya berupa layanan telemedis, visit dan reservasi praktik, juga menyediakan penjualan produk kesehatan, layanan pembuatan resep obat apotek dan layanan fasilitas kesehatan. Saat ini pengembangan terhenti dalam jangka waktu yang belum ditentukan."
            replaceTag = tagItem(["PT. Obatin Sinergi Sehat", "Discontinued", "Abadoned Project", "Android", "iOS"])


            dispatch(changeShowcaseImages([
                ImageNetwork.showcaseObatin1,
                ImageNetwork.showcaseObatin2,
                ImageNetwork.showcaseObatin3,
                ImageNetwork.showcaseObatin4
            ]))
        }
        // for (let index = 0; index < 4; index++) {
        //     var i = index + 1;
        //     if (i != id) {
        //         document.getElementById(`btnShowcase${i}`)!.style.transition = 'scale 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)'; // Durasi dan easing animasi
        //         document.getElementById(`btnShowcase${i}`)!.style.scale = '0.7';
        //         document.getElementById(`btnShowcase${i}`)!.style.opacity = '70%';
        //     } else {

        //         document.getElementById(`btnShowcase${i}`)!.style.transition = 'scale 0.5s cubic-bezier(0.4, 0, 0.2, 1),0.5s cubic-bezier(0.4, 0, 0.2, 1)'; // Durasi dan easing animasi
        //         document.getElementById(`btnShowcase${i}`)!.style.scale = '1';
        //         document.getElementById(`btnShowcase${i}`)!.style.opacity = '100%';
        //     }

        // }



        opacityDesc.start(0)
        setTimeout(() => {
            dispatch(changeShowcaseContent({
                title: replaceTitle,
                desc: replaceDesc,
                tag: replaceTag
            }))

            setTimeout(() => {
                opacityDesc.start(1)
            }, 100)
        }, 500)
    }
    function buttonAnim(id: number) {
        return useSpring({
            delay: 100,
            reverse: id == showcaseId ? false : true,
            from: {
                opacity: 0.7,
                scale: 0.7,
            },
            to: {
                opacity: 1,
                scale: 1,
            },
            config: { easing: fastOutSlowIn, duration: 500 },
        });
    }

    function back() {
        dispatch(toSectionIntro())
        setTimeout(() => {
            dispatch(disablePortfolio())
        }, 1200)
    }


    return (
        <div style={{ backgroundColor: "rgba(20, 20, 20, 1)", clipPath: 'rectangle(0px 0px 0px 0px)' }}>
            <div className="w-full absolute  z-10" style={{ backgroundColor: "rgba(20, 20, 20, 1)" }}>
                <div id="fishBackground" className="overflow-clip"><LottieAnimation /></div>
            </div>
            <div id="portfolioContent" className="absolute overflow-y-scroll h-screen z-20" >
                <div className="flex min-h-screen sm:flex-row xs:flex-col-reverse sm:items-start xs:items-center justify-center py-9">

                    <animated.div id="portfolioText" className="flex-col sm:w-2/3 xs:w-full md:pl-16 xs:px-9 sm:pl-8 sm:mt-10 xs: mt-14" style={{ ...descAnim }}>
                        <div className="flex flex-row mt-8">
                            <CButton id="btnBack" className="mr-3 rounded-xl w-12 h-12" inner={<Icon icon="mdi-light:arrow-left" fontSize={12} className="w-12 h-12 " />} onClick={() => { back() }} styleId={1} color="blue" enablePadding={false} />
                            <animated.div style={{ ...buttonAnim(1) }}><CButton id="btnShowcase1" className="mr-3" inner={<img src={ImageNetwork.iconBlumb} className={"w-12 h-12 scale-100"} />} onClick={() => { selectShowcase(1) }} styleId={5} color="" enablePadding={false} /></animated.div>
                            <animated.div style={{ ...buttonAnim(2) }}><CButton id="btnShowcase2" className="mr-3" inner={<img src={ImageNetwork.iconESTR} className={"w-12 h-12 scale-100"} />} onClick={() => { selectShowcase(2) }} styleId={5} color="" enablePadding={false} /></animated.div>
                            <animated.div style={{ ...buttonAnim(3) }}><CButton id="btnShowcase3" className="mr-3" inner={<img src={ImageNetwork.iconMoloco} className={"w-12 h-12 scale-100"} />} onClick={() => { selectShowcase(3) }} styleId={5} color="" enablePadding={false} /></animated.div>
                            <animated.div style={{ ...buttonAnim(4) }}><CButton id="btnShowcase4" inner={<img src={ImageNetwork.iconObatin} className={"w-12 h-12 scale-100"} />} onClick={() => { selectShowcase(4) }} styleId={5} color="" enablePadding={false} /></animated.div>
                        </div>
                        <animated.div id="portfolioDesc" className="flex flex-col mt-8" style={{ opacity: opacityDesc }}>
                            <h1 className="xs:text-3xl md:text-3xl xl:text-5xl w-full font-bold text-transparent text-white">
                                {title}
                            </h1>
                            <h4 className="sm:text-sm xl:text-lg sm:w-3/4 xs:w-full mt-5 text-white">
                                {desc}
                            </h4>
                            {tag}
                        </animated.div>

                    </animated.div>
                    <animated.div id="portfolioImage" className="sm:w-1/3 xs:w-1/2 " style={{ ...showcaseAnim }}  >
                        <div id="portfolioImageOpacity" className="md:w-3/5 xs:w-3/4 h-1/2 md:mr-16 sm: mr-8 xs:mr-0 xs:ml-8 sm:ml-0 sm:mt-10 md:mt-16 xl:mt-24  xs:mt-10 xs:mb-4 flex flex-col relative  overflow-clip scale-125"

                        >
                            <img src={ImageNetwork.showcasePlain}
                                className="w-full opacity-100"
                            />
                            <div className="slide-container w-full absolute top-0 left-0 opacity-100">
                                <Fade key={imageShowcases.join(',')} autoplay={true} arrows={false} duration={1500} infinite={true}>
                                    {imageShowcases.map((url, index) => (
                                        <div key={index}>
                                            <img style={{ width: '100%' }} src={url} />
                                        </div>
                                    ))}
                                </Fade>
                            </div>
                            <img src="/portfolio/iphone_frame.svg"
                                className="w-full absolute top-0 z-20 left-0"
                            />
                        </div>
                    </animated.div>
                </div>
            </div>
        </div >
    )

}



class PortfolioViewPure extends React.PureComponent {
    render() {
        return <PortfolioView />;
    }
  }
  
  export default PortfolioViewPure