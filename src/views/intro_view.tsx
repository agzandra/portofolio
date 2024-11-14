import React, { Component } from "react";
import CButton from "../components/c_button";
import CMountainParallax from "../components/c_mountain_parallax";
import { Icon } from "@iconify/react";
import ImageNetwork from "../components/c_image_network";
import { useAppSelector, useAppDispatch } from '../app/provider_hooks'
import { toSectionAbout, toSectionPortfolio, toSectionWork } from '../app/reducers/landing_reducer'
import { useSpring } from "react-spring";
import { LandingSection } from "../app/enum";


class IntroView extends Component {
    section = useAppSelector((state) => state.landing.section)
    dispatch = useAppDispatch()

    introTextAnim = useSpring({
        opacity: this.section === LandingSection.Intro ? 1 : 0,
        y: this.section === LandingSection.Intro ? 0 : '-100%',
        delay: 200,
        config: { duration: 1000 },
    });



    redirectWa(): void {
        window.location.href = ("https://wa.me/6282285469899");
    }
    redirectIG(): void {
        window.location.href = ("https://www.instagram.com/abidzar.gzandra/");
    }

    redirectLinkedin(): void {
        window.location.href = ("https://www.linkedin.com/in/abidzargzandra/");
    }

    redirectMail(): void {
        window.location.href = ("mailto:abidzar.gzandra@gmail.com");
    }





    tagItem = (text: string[]) => {
        return (<div className="flex flex-wrap xs:justify-center sm:justify-start content-center gap-1 mt-4 mb-10">
            {
                text.map((item: string, index: number) => {
                    return (<div className="bg-white bg-opacity-15 rounded-xl py-1 px-2 text-center">
                        <p className="text-xs text-white">{item}</p>
                    </div>)
                })
            }
        </div>)
    }
    render() {
        return (
            <div className="xs:pb-48 sm:pb-2">
                <header id="introHeader" className="flex justify-end items-center sm:pr-12 xs:pr-8 xs:pt-5 sm:pt-6 xs:pb-2 sm:pb-5 sm:bg-transparent xs:bg-zinc-900 text-white fixed w-full z-20 -translate-y-full">
                    <nav className="flex xs:gap-2 sm:gap-4">
                        <CButton className="xs:rounded-lg sm:rounded-xl xs:h-6 sm:h-8 xs:px-2 sm:px-3 xs:text-xs sm:text-sm" enablePadding={false} inner={<div style={{ fontFamily: "Fira Sans", fontWeight: "normal" }}>Pengalaman Kerja</div>} onClick={() => this.dispatch(toSectionWork())} styleId={5} />
                        <CButton className="xs:rounded-lg sm:rounded-xl  xs:h-6 sm:h-8 xs:px-2 sm:px-3 xs:text-xs sm:text-sm" enablePadding={false} inner={<div style={{ fontFamily: "Fira Sans", fontWeight: "normal" }}>Tentang Saya</div>} onClick={() => this.dispatch(toSectionAbout())} styleId={1} color="blue" />
                    </nav>
                </header>
                <div className="relative">
                    <div className="w-screen"
                        style={{
                            position: "absolute",
                            zIndex: -1
                        }}
                    >
                        <div id="parallaxOffset" className="overflow-clip"><CMountainParallax /></div>
                        <div className="h-1/2"></div>
                    </div>
                    <div id="introContent" className="absolute overflow-y-scroll h-screen pt-5">
                        <div className="flex min-h-screen sm:flex-row xs:flex-col-reverse items-center justify-center py-9">
                            <div id="introduceText" className="flex-col sm:w-2/3 xs:w-full md:pl-16 xs:px-9 sm:pl-8 -translate-x-full">
                                <h1 className="pb-1 xs:text-3xl md:text-3xl xl:text-5xl w-full font-bold text-transparent bg-clip-text animate-gradient"
                                    style={{
                                        fontFamily: "Fira Sans", backgroundImage:
                                            "radial-gradient(circle, #ebd834, #34d399 ,#3b82f6)",
                                    }}>
                                    Hai, Saya Abidzar.
                                    <br />
                                    Seorang Flutter Developer
                                </h1>
                                <h4 className="sm:text-sm xl:text-lg sm:w-3/4 xs:w-full mt-5 text-white">
                                    Proficient di pengembangan aplikasi dengan flutter, dan berpengalaman dalam menyediakan RESTful API Services golang, build website dengan ReactJS dan visual design untuk UI/UX
                                </h4>
                                <div className="sm:w-3/4 xs:w-full">
                                    {this.tagItem(["Flutter Dart", "Golang", "ReactJS", "Vue.js", "Typescript", "PosgreSQL", "Figma", "Motion Graphic Lottie", "After Effect", "CorelDraw", "Illustrator", "GitLab", "GitHub"])}
                                </div>
                                <div className="flex flex-wrap xs:justify-center sm:justify-normal gap-3 mt-4">
                                    <CButton className="rounded-xl h-12 xs:hidden sm:block" inner="Lihat Project" onClick={() => this.dispatch(toSectionPortfolio())} styleId={4} color="blue" />
                                    <CButton className="rounded-xl w-12 h-12" inner={<Icon icon="mingcute:whatsapp-line" fontSize={12} className="w-12 h-12 p-3" />} onClick={() => { this.redirectWa() }} styleId={4} enablePadding={false} />
                                    <CButton className="rounded-xl w-12 h-12" inner={<Icon icon="flowbite:instagram-solid" fontSize={12} className="w-12 h-12 p-3" />} onClick={() => { this.redirectIG() }} styleId={4} enablePadding={false} />
                                    <CButton className="rounded-xl w-12 h-12" inner={<Icon icon="ant-design:linkedin-outlined" fontSize={12} className="w-12 h-12 p-3" />} onClick={() => { this.redirectLinkedin() }} styleId={4} enablePadding={false} />
                                    <CButton className="rounded-xl w-12 h-12" inner={<Icon icon="mage:email" fontSize={12} className="w-12 h-12 p-3" />} onClick={() => { this.redirectMail() }} styleId={4} enablePadding={false} />
                                </div>
                                <div className="flex flex-wrap xs:justify-center  mt-4">
                                    <CButton className="rounded-xl h-12 xs:block sm:hidden mt-4" inner="Lihat Project" onClick={() => this.dispatch(toSectionPortfolio())} styleId={4} color="blue" />

                                </div>
                            </div>
                            <div id="introduceImage" className="sm:w-1/3 xs:w-1/2 xs:mt-10 sm:translate-y-full xs:-translate-y-full">
                                <div id="introduceImageOpacity" className="opacity-0"><img src={ImageNetwork.meAbidzar}
                                    className="md:w-5/6 xs:w-full object-contain md:pr-16 sm:pr-8 xs:pb-10"
                                /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IntroView
