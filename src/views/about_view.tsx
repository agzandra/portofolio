import React, { Component } from "react";
import CButton from "../components/c_button";
import { Icon } from "@iconify/react";
import ImageNetwork from "../components/c_image_network";
import { useAppSelector, useAppDispatch } from '../app/provider_hooks'
import { toSectionIntro, disableAbout } from '../app/reducers/landing_reducer'
import { useSpring, easings } from "react-spring";
import { animated } from '@react-spring/web'
import { LandingSection } from "../app/enum";
import { fastOutSlowIn } from "../app/easing";

function AboutView() {
    const section = useAppSelector((state) => state.landing.section)
    const dispatch = useAppDispatch()
    var anim = useSpring({
        delay: section === LandingSection.About ? 500 : 200,
        reverse: section === LandingSection.About ? false : true,
        from: {
            opacity: 0,
            transform: 'translateY(100%)'
        },
        to: {
            opacity: 1,
            transform: 'translateY(0%)'
        },
        config: { easing: fastOutSlowIn, duration: 1000 },
    })
    var headerAnim = useSpring({
        delay: section !== LandingSection.About ? 200 : 1000,
        reverse: section !== LandingSection.About ? true : false,
        from: {
            opacity: 0,
            transform: 'translateY(-100%)'
        },
        to: {
            opacity: 1,
            transform: 'translateY(0%)'
        },
        config: { easing: fastOutSlowIn, duration: 1000 },
    })
    function back() {
        dispatch(toSectionIntro())
        setTimeout(() => {
            dispatch(disableAbout())
        }, 1200)
    }
    function tagItem(text: string[]) {
        return (<div className="flex flex-wrap justify-center content-center gap-3 mt-6 mr-4">
            {
                text.map((item: string, index: number) => {
                    return (<div className="border border-gray rounded-xl p-2 text-center">
                        <p className="sm:text-sm xs:text-xs text-black">{item}</p>
                    </div>)
                })
            }
        </div>)
    }
    return (
        <div className="absolute overflow-y-scroll h-screen z-20" >
            <animated.header id="aboutHeader" className="flex justify-start items-center sm:pl-12 xs:pl-8 xs:pt-5 sm:pt-6 xs:pb-5 sm:pb-0 sm:bg-transparent xs:bg-zinc-900 text-white fixed w-full z-20 " style={{ ...headerAnim }}>
                <nav className="flex gap-4">
                    <CButton className="rounded-xl xs:h-8 sm:h-12 px-2" enablePadding={false} inner={<div style={{ fontFamily: "Fira Sans", fontWeight: "normal" }}>Kembali</div>} onClick={() => { back() }} styleId={1} />
                </nav>
            </animated.header>
            <animated.div className="flex flex-col items-center justify-center mt-56 mb-44" style={{ ...anim }}>
                <div className="bg-white rounded-2xl shadow-md sm:w-2/4 xs:w-5/6  pb-10">
                    <div className="flex flex-col items-center justify-center w-full -mt-36">
                        {/* <h2 className="sm:text-3xl xs:text-xl font-bold text-center text-black mt-5 mb-20" style={{ fontFamily: "Fira Sans" }}>TENTANG SAYA</h2> */}
                        <img
                            src={ImageNetwork.meAbidzar}
                            alt="Abidzar"
                            className="w-40 h-52 object-contain rounded-full"
                        />
                        <h2 className="sm:text-3xl xs:text-xl font-bold mt-4 text-black">Abidzar Ghifari Zandra</h2>
                        <p className="sm:text-xl xs:text-sm mt-2 text-center text-black xl:px-10 md:px-10 sm: px-10" style={{ fontFamily: "Fira Sans" }}>
                            S1 Sistem Informasi • Kota Semarang
                        </p>
                        <p className="sm:text-xl xs:text-sm  mt-8 text-center text-black xl:px-10 md:px-10 sm: px-10" style={{ fontFamily: "Fira Sans" }}>
                            Saya seorang front-end developer yang fokus kepada aplikasi mobile dengan framework Flutter, selain di bidang tersebut saya juga memiliki pengalaman dalam pengembangan aplikasi web app, memiliki pengalaman sebagai back-end developer yang menyediakan layanan API dan database, serta saya memiliki pengetahuan dalam desain visual dan motion graphics.
                            <br />
                            <br />
                            Saya terbuka dalam mempelajari teknologi-teknologi baru yang menjadi tren di industri dan selalu bersemangat untuk mengimplementasikannya dalam proyek-proyek nyata, sehingga saya dapat terus memberikan solusi yang inovatif dan relevan ditengah tantangan baru dalam dunia teknologi.
                            Saya terbiasa dengan pekerjaan kolaborasi dengan tim maupun solo fighter dalam berbagai proyek dan dapat dengan mudah beradaptasi dengan perubahan kebutuhan proyek.
                            <br />
                            <br />
                            <h1 className="text-center sm:text-xl xs:text-sm text-xl" style={{ fontFamily: "Poppins", fontWeight: "bold" }}>Knowledge Tags</h1>
                        </p>
                        <div className="xl:px-10 md:px-10 sm: px-10">
                            {tagItem(["Flutter Dart", "Golang", "ReactJS", "Vue.js", "Typescript", "PosgreSQL", "Figma", "Motion Graphic Lottie", "After Effect", "CorelDraw", "Illustrator", "GitLab", "GitHub"])}
                        </div>

                    </div>
                </div>
            </animated.div>
        </div>
    );
}


class AboutViewPure extends React.PureComponent {
    render() {
        return <AboutView />;
    }
}

export default AboutViewPure