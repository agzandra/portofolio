import React, { Component } from "react";
import CButton from "../components/c_button";
import CMountainParallax from "../components/c_mountain_parallax";

interface IntroProps {
    introAnimation: (reverse?: boolean) => void
    introPortfolioTransition:(reverse?: boolean) => void
}
class IntroView extends Component<IntroProps> {

    componentDidMount(): void {
        this.props.introAnimation();
    }
    

    
    render() {
        return (
            <div>
                <div className="w-full"
                    style={{
                        position: "absolute",
                        zIndex: -1
                    }}
                >
                    <div id="parallaxOffset" className="overflow-clip"><CMountainParallax /></div>
                    <div className="h-1/2"></div>
                </div>
                <div id="introContent" className="absolute, overflow-y-scroll h-screen " >
                    <div className="flex min-h-screen sm:flex-row xs:flex-col-reverse items-center justify-center py-9">
                        <div id="introduceText" className="flex-col sm:w-2/3 xs:w-full md:pl-16 xs:px-9 sm:pl-8 -translate-x-full">
                            <h1 className="xs:text-3xl md:text-3xl xl:text-5xl w-full font-bold text-transparent bg-clip-text animate-gradient "
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
                            <CButton className="mt-4" inner="Lihat Project" onClick={() => this.props.introPortfolioTransition()} styleId={1} color="blue" />
                        </div>
                        <div id="introduceImage" className="sm:w-1/3 xs:w-1/2 sm:translate-y-full xs:-translate-y-full">
                            <div id="introduceImageOpacity" className="opacity-0"><img src="../src/assets/imgs/me_abidzar.png"
                                className="md:w-5/6 xs:w-full h-fit md:pr-16 sm: pr-8  xs:pb-10"
                            /></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IntroView
