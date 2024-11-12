import React, { Component } from "react";
import CButton from "../components/c_button";
import CMountainParallax from "../components/c_mountain_parallax";
import { Icon } from "@iconify/react";

interface IntroProps {
    workExpAnimation: (reverse?: boolean) => void
    introAnimation: (reverse?: boolean) => void
    aboutAnimation: (reverse?: boolean) => void
    introPortfolioTransition: (reverse?: boolean) => void
}
class IntroView extends Component<IntroProps> {

    componentDidMount(): void {
        this.props.introAnimation();
    }


    redirectWa(): void {
        window.open("https://wa.me/6282285469899", "_blank");
    }
    redirectIG(): void {
        window.open("https://www.instagram.com/abidzar.gzandra/", "_blank");
    }

    redirectLinkedin(): void {
        window.open("https://www.linkedin.com/in/abidzargzandra/", "_blank");
    }

    redirectMail(): void {
        window.open("mailto:abidzar.gzandra@gmail.com", "_blank");
    }



    render() {
        return (
            <div>
                <header id="introHeader" className="flex justify-end items-center sm:pr-12 xs:pr-8 xs:pt-5 sm:pt-6 xs:pb-5 sm:pb-0 sm:bg-transparent xs:bg-zinc-900 text-white fixed w-full z-20 -translate-y-full">
                    <nav className="flex gap-4">
                        <CButton className="rounded-xl h-12" inner={<div style={{ fontFamily: "Fira Sans", fontWeight: "normal" }}>Pengalaman Kerja</div>} onClick={() => this.props.workExpAnimation()} styleId={5} />
                        <CButton className="rounded-xl h-12" inner={<div style={{ fontFamily: "Fira Sans", fontWeight: "normal" }}>Tentang Saya</div>} onClick={() => this.props.aboutAnimation()} styleId={1} color="blue" />
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
                                <h1 className="xs:text-3xl md:text-3xl xl:text-5xl w-full font-bold text-transparent bg-clip-text animate-gradient"
                                    style={{
                                        fontFamily: "Fira Sans", backgroundImage:
                                            "radial-gradient(circle, #ebd834, #34d399 ,#3b82f6)",
                                    }}>
                                    Hai, Saya Abidzar.
                                    <br />
                                    Seorang Flutter Developer
                                </h1>
                                <h4 className="sm:text-sm xl:text-lg sm:w-3/4 xs:w-full mt-5 text-white">
                                    Dengan pengalaman selama lebih dari 3 tahun, proficient di pengembangan aplikasi mobile dan desktop dengan flutter, saya juga berpengalaman dalam menyediakan RESTful API Services menggunakan golang, pengembangan website menggunakan ReactJS, merancang prototipe dan menyediakan asset untuk keperluan UI/UX
                                </h4>
                                <div className="flex flex-wrap gap-3 mt-4">
                                    <CButton className="rounded-xl h-12" inner="Lihat Project" onClick={() => this.props.introPortfolioTransition()} styleId={4} color="blue" />
                                    <CButton className="rounded-xl w-12 h-12" inner={<Icon icon="mingcute:whatsapp-line" fontSize={12} className="w-12 h-12 p-3" />} onClick={() => { this.redirectWa() }} styleId={4} enablePadding={false} />
                                    <CButton className="rounded-xl w-12 h-12" inner={<Icon icon="flowbite:instagram-solid" fontSize={12} className="w-12 h-12 p-3" />} onClick={() => { this.redirectIG() }} styleId={4} enablePadding={false} />
                                    <CButton className="rounded-xl w-12 h-12" inner={<Icon icon="ant-design:linkedin-outlined" fontSize={12} className="w-12 h-12 p-3" />} onClick={() => { this.redirectLinkedin() }} styleId={4} enablePadding={false} />
                                    <CButton className="rounded-xl w-12 h-12" inner={<Icon icon="mage:email" fontSize={12} className="w-12 h-12 p-3" />} onClick={() => { this.redirectMail() }} styleId={4} enablePadding={false} />
                                </div>
                            </div>
                            <div id="introduceImage" className="sm:w-1/3 xs:w-1/2 xs:mt-10 sm:translate-y-full xs:-translate-y-full">
                                <div id="introduceImageOpacity" className="opacity-0"><img src="../src/assets/imgs/me_abidzar.png"
                                    className="md:w-5/6 xs:w-full h-fit md:pr-16 sm:pr-8 xs:pb-10"
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
