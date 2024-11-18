import React, { Component } from "react";
import CButton from "../components/c_button";
import { Icon } from "@iconify/react";
import ImageNetwork from "../components/c_image_network";

interface AboutProps {
    aboutAnimation: (reverse?: boolean) => void
}
export default class AboutView extends Component<AboutProps, { lang: string }> {

    constructor(props: AboutProps) {
        super(props);
        this.state = {
            lang: "ID"
        }
    }
    componentDidMount(): void {
        const language = localStorage.getItem("language");
        if (language === null) {
            localStorage.setItem("language", "ID");
            this.setState({
                lang: "ID"
            })
        } else {
            this.setState({
                lang: language
            })
        }
    }


    tagItem = (text: string[]) => {
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
    render() {
        return (
            <div className="absolute overflow-y-scroll h-screen z-20" >
                <header id="aboutHeader" className="flex justify-start items-center sm:pl-12 xs:pl-8 xs:pt-5 sm:pt-6 xs:pb-5 sm:pb-0 sm:bg-transparent xs:bg-zinc-900 text-white fixed w-full z-20 translate-y-0">
                    <nav className="flex gap-4">
                        <CButton className="rounded-xl xs:h-8 sm:h-12 px-2" enablePadding={false} inner={<div style={{ fontFamily: "Fira Sans", fontWeight: "normal" }}>{this.state.lang == "ID" ? "Kembali" : "Back"}</div>} onClick={() => { this.props.aboutAnimation(true) }} styleId={1} />
                    </nav>
                </header>
                <div className="flex flex-col items-center justify-center mt-56 mb-40">
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
                                {this.state.lang == "ID" ? "S1 Sistem Informasi • Kota Semarang" : "Bachelor Degree of Information Systems • Semarang City"}
                            </p>
                            <p className="sm:text-xl xs:text-sm  mt-8 text-center text-black xl:px-10 md:px-10 sm: px-10" style={{ fontFamily: "Fira Sans" }}>
                                {this.state.lang == "ID" ?
                                    "Saya seorang front-end developer yang fokus kepada aplikasi mobile dengan framework Flutter, selain di bidang tersebut saya juga memiliki pengalaman dalam pengembangan aplikasi web app, memiliki pengalaman sebagai back-end developer yang menyediakan layanan API dan database, serta saya memiliki pengetahuan dalam desain visual dan motion graphics."
                                    : "I am a front-end developer who focuses on mobile applications with the Flutter framework, besides in that field I also have experience in developing web apps, have experience as a back-end developer who provides API and database services, and I have knowledge in visual design and motion graphics."}
                                <br />
                                <br />
                                {this.state.lang == "ID" ? "Saya terbuka dalam mempelajari teknologi-teknologi baru yang menjadi tren di industri dan selalu bersemangat untuk mengimplementasikannya dalam proyek-proyek nyata, sehingga saya dapat terus memberikan solusi yang inovatif dan relevan ditengah tantangan baru dalam dunia teknologi." : "I am open to learning new technologies that are trending in the industry and am always eager to implement them in real-world projects. This enables me to continuously provide innovative and relevant solutions amidst the evolving challenges in the technological landscape."}
                                {this.state.lang == "ID" ? "Saya terbiasa dengan pekerjaan kolaborasi dengan tim maupun independen dalam berbagai proyek dan dapat dengan mudah beradaptasi dengan perubahan kebutuhan proyek." : "I am accustomed to working collaboratively in teams as well as independently on various projects and can easily adapt to changing project requirements."}
                                <br />
                                <br />
                                <h1 className="text-center sm:text-xl xs:text-sm text-xl" style={{ fontFamily: "Poppins", fontWeight: "bold" }}>Knowledge Tags</h1>
                            </p>
                            <div className="xl:px-10 md:px-10 sm: px-10">
                                {this.tagItem(["Flutter Dart", "Golang", "ReactJS", "Vue.js", "Typescript", "PosgreSQL", "Figma", "Motion Graphic Lottie", "After Effect", "CorelDraw", "Illustrator", "GitLab", "GitHub"])}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
