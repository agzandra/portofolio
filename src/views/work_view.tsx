import React, { Component } from "react";
import CButton from "../components/c_button";
import { Icon } from "@iconify/react";
import ImageNetwork from "../components/c_image_network";
import { Fade } from 'react-slideshow-image';

interface WorkProps {
    workExpAnimation: (reverse?: boolean) => void
}
export default class WorkView extends Component<WorkProps, { lang: string }> {

    constructor(props: WorkProps) {
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


    image = [
        ImageNetwork.work1,
        ImageNetwork.work2,
        ImageNetwork.work3,
        ImageNetwork.work4,
    ]

    tagItem = (text: string[]) => {
        return (<div className="flex flex-wrap justify-center content-center gap-3 mt-6 mr-4">
            {
                text.map((item: string, index: number) => {
                    return (<div className="border border-gray-300 rounded-xl p-2 text-center">
                        <p className="text-sm text-white">{item}</p>
                    </div>)
                })
            }
        </div>)
    }

    workCard(title: string, statuskerja: string, masakerja: string, paragraf1: string, paragraf2: string, logo: string) {
        return (
            <div className="flex flex-col items-center justify-center mb-24">
                <img
                    src={logo}
                    className="w-36 h-12 object-scale-down"
                />

                <h2 className="md:text-xl xs:text-sm font-bold  md:w-2/4 xs: w-3/4 text-center text-white mt-5 mb-0">{title}</h2>



                <div className="flex flex-row items-center md:w-2/4 xs: w-3/4 justify-start ">

                    <div className="flex flex-col">
                        <p className="md:text-xl xs:text-xs text-white text-center">
                            {statuskerja}
                        </p>
                        <p className="md:text-xl xs:text-xs text-blue-100 text-center">
                            {masakerja}
                        </p>

                        <p className="md:text-xl xs:text-xs mt-3 text-left text-white " style={{ fontFamily: "Fira Sans" }}>
                            {paragraf1}
                            <br />
                            <br />
                            {paragraf2}
                        </p>


                    </div>
                </div>

            </div>
        )
    }
    render() {
        return (
            <div className="absolute overflow-y-scroll h-screen z-20" >
                <header id="workHeader" className="flex justify-start items-center sm:pl-12 xs:pl-8 xs:pt-5 sm:pt-6 xs:pb-5 sm:pb-0 sm:bg-transparent xs:bg-zinc-900 text-white fixed w-full z-20 translate-y-0">
                    <nav className="flex gap-4">
                        <CButton className="rounded-xl xs:h-8 sm:h-12 px-2" enablePadding={false} inner={<div style={{ fontFamily: "Fira Sans", fontWeight: "normal" }}>{this.state.lang == "ID" ? "Kembali" : "Back"}</div>} onClick={() => { this.props.workExpAnimation(true) }} styleId={1} />
                    </nav>
                </header>
                <div className=" pt-20 pb-20 ">

                    <h2 className="sm:text-3xl xs:text-xl font-bold text-center text-white mt-5 mb-10" style={{ fontFamily: "Fira Sans" }}>{this.state.lang == "ID" ? "PENGALAMAN KERJA" : "WORK EXPERIENCE"}</h2>
                    <div className="flex flex-wrap justify-center mb-20">
                        <div className="slide-container w-96 h-56 top-0 left-0 opacity-100 xs:px-6 sm:px-1">
                            <Fade key={this.image.join(',')} autoplay={true} arrows={false} duration={1500} infinite={true}>
                                {this.image.map((url, index) => (
                                    <div key={`work-${index}`}>
                                        <img style={{ width: '100%' }} src={url} />
                                    </div>
                                ))}
                            </Fade>
                        </div>
                    </div>
                    {this.workCard("PT. Andalan Basis Teknologi Informatika",
                        "Software Engineer • Full Time • On Site",
                        this.state.lang == "ID" ? "Juni 2023 - Saat ini" : "June 2023 - Now",
                        this.state.lang == "ID" ? "Bertanggung jawab dan aktif dalam pengembangan aplikasi mobile dan web dan mendesain UI/UX untuk aplikasi Blumb, KTKI eSTR Mobile, KTKI eSTR Web App." : "Responsible and actively involved in the development of mobile and web applications and designing UI/UX for Blumb, KTKI eSTR Mobile, KTKI eSTR Web App.",
                        this.state.lang == "ID" ? "Membantu membuat dan menyediakan RESTful API Services dengan Golang untuk fungsi aplikasi serta mengelola struktur database pada project Blumb dan KTKI eSTR." : "Maintaining and providing RESTful API Services with Golang for function applications and managing database structure in project Blumb and KTKI eSTR.",
                        ImageNetwork.logoAbiseka)}
                    {this.workCard("FK UNISSULA",
                        "Mobile Developer • Part Time • Remote",
                        this.state.lang == "ID" ? "Juli 2023 - November 2023" : "July 2023 - November 2023",
                        this.state.lang == "ID" ? "Pengembangan awal aplikasi Mobile Logbook Co-Ass (MOLOCO) hingga launching perdana di ICT Fakultas Kedokteran UNISSULA " : "Development of the initial stages of the Mobile Logbook Co-Ass (MOLOCO) application to the first launch at ICT Faculty of Medicine UNISSULA",
                        this.state.lang == "ID" ? "Melatih mahasiswa dan dosen dalam penggunaan aplikasi MOLOCO" : "Train students and lecturers in the use of MOLOCO application",
                        ImageNetwork.logoFkUnissula)}
                    {this.workCard("PT. Obatin Sinergi Sehat",
                        "Mobile Developer • Full Time • Remote",
                        this.state.lang == "ID" ? "Juni 2021 - Juni 2023" : "June 2021 - June 2023",
                        this.state.lang == "ID" ? "Merancang UI/UX dan prototipe untuk aplikasi kesehatan OBAT-in dan OBAT-in Heroes" : "Designing UI/UX and prototype for OBAT-in and OBAT-in Heroes application",
                        this.state.lang == "ID" ? "Membangun aplikasi OBAT-in dan OBAT-in Heroes, menganalisa kebutuhan teknologi serta membuat aset desain grafis" : "Building OBAT-in and OBAT-in Heroes, analyzing technological needs and creating graphic assets",
                        ImageNetwork.logoObatin)}

                </div>
            </div>
        );
    }
}
