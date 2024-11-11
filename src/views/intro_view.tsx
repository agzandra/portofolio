import React, { Component } from "react";
import CButton from "../components/c_button";
import CMountainParallax from "../components/c_mountain_parallax";
class IntroView extends Component {

    componentDidMount(): void {
        this.animate();
      }
      animate(reverse: boolean = false) {
        const introtext = document.getElementById(`introduceText`);
        const introimg = document.getElementById(`introduceImage`);
        const introimgopacity = document.getElementById(`introduceImageOpacity`);
        setTimeout(() => {
          introimgopacity!.style.transition = 'opacity 3.0s cubic-bezier(0.4, 0, 0.2, 1)'; // Durasi dan easing animasi
          introimgopacity!.style.opacity = reverse ? '0%' : '100%';
        }, reverse ? 200 : 1100)
        setTimeout(() => {
          introtext!.style.transition = 'transform  1.0s cubic-bezier(0.4, 0, 0.2, 1)'; // Durasi dan easing animasi
          introtext!.style.transform = reverse ? 'translateX(-100%)' : 'translateX(0%)';
          introimg!.style.transition = 'transform 1.0s cubic-bezier(0.4, 0, 0.2, 1)'; // Durasi dan easing animasi
          introimg!.style.transform = reverse ? 'translateX(100%)' : 'translateY(0%)';
        }, reverse ? 100 : 1200);
      };
    
    openPortfolio() {

        function transition(id: number) {
            const element = document.getElementById(`parallax${id}`);
            if (id === 1) {
                const offset = document.getElementById(`parallaxOffset`);
                setTimeout(() => {
                    offset!.style.transition = 'transform  1.0s cubic-bezier(0.4, 0, 0.2, 1)'; // Durasi dan easing animasi
                    offset!.style.transform = 'translateY(-100%)';
                }, 100 * id);
            }
            setTimeout(() => {
                element!.style.transition = 'transform  1.0s cubic-bezier(0.4, 0, 0.2, 1)'; // Durasi dan easing animasi
                element!.style.transform = 'translateY(100%)';
            }, 100 * (8 - id));

            if (id === 7) {
                setTimeout(() => {
                    const star = document.getElementById(`shootingStar`);
                    const landingLayout = document.getElementById("landingLayout");
                    star!.style.transition = 'opacity  2.0s cubic-bezier(0.4, 0, 0.2, 1)'; // Durasi dan easing animasi
                    star!.style.opacity = '0';
                    landingLayout!.style.removeProperty('clip-path');
                }, 3000);
            }
        }
        transition(1);
        transition(2);
        transition(3);
        transition(4);
        transition(5);
        transition(6);
        transition(7);
        this.animate(true);

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
                <div className="absolute, overflow-y-scroll h-screen " >
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
                                Dengan pengalaman selama lebih dari 3 tahun, proficient di pengembangan aplikasi mobile dan desktop dengan flutter, saya juga berpengalaman dalam menyediakan RESTful API Services menggunakan golang, merancang prototipe dan menyediakan asset untuk keperluan UI/UX
                            </h4>
                            <CButton className="mt-4" label="Lihat Portfolio" onClick={() => this.openPortfolio()} styleId={1} color="blue" />
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
