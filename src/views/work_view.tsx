import React, { Component } from "react";
import CButton from "../components/c_button";
import { Icon } from "@iconify/react";
import ImageNetwork from "../components/c_image_network";

interface WorkProps {
    workExpAnimation: (reverse?: boolean) => void
}
export default class WorkView extends Component<WorkProps> {

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

                <h2 className="md:text-2xl xs:text-lg font-bold  md:w-2/4 xs: w-3/4 text-center text-white mt-5 mb-0">{title}</h2>



                <div className="flex flex-row items-center md:w-2/4 xs: w-3/4 justify-start ">

                    <div className="flex flex-col">
                        <p className="md:text-xl xs:text-md text-white text-center">
                            {statuskerja}
                        </p>
                        <p className="md:text-xl xs:text-md text-blue-100 text-center">
                            {masakerja}
                        </p>

                        <p className="md:text-xl xs:text-md mt-3 text-left text-white " style={{ fontFamily: "Fira Sans" }}>
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
                        <CButton className="rounded-xl h-12" inner={<div style={{ fontFamily: "Fira Sans", fontWeight: "normal" }}>Kembali</div>} onClick={() => { this.props.workExpAnimation(true) }} styleId={1} />
                    </nav>
                </header>
                <div className=" pt-20 pb-20 ">
                    <h2 className="sm:text-3xl xs:text-xl font-bold text-center text-white mt-5 mb-20" style={{ fontFamily: "Fira Sans" }}>PENGALAMAN KERJA</h2>
                    {this.workCard("PT. Andalan Basis Teknologi Informatika",
                        "Software Engineer • Full Time • On Site",
                        "Juni 2023 - Saat ini",
                        "Bertanggung jawab dan aktif dalam pengembangan aplikasi mobile dan web dan mendesain UI/UX untuk aplikasi Blumb, KTKI eSTR Mobile, KTKI eSTR Web App.",
                        "Membantu membuat dan menyediakan RESTful API Services dengan Golang untuk fungsi aplikasi serta mengelola struktur database pada project Blumb dan KTKI eSTR.",
                        ImageNetwork.logoAbiseka)}
                    {this.workCard("FK UNISSULA",
                        "Mobile Developer • Part Time • Remote",
                        "Juli 2023 - November 2023",
                        "Pengembangan awal aplikasi Mobile Logbook Co-Ass (MOLOCO) hingga launching perdana di ICT Fakultas Kedokteran UNISSULA ",
                        "Melatih mahasiswa dan dosen dalam penggunaan aplikasi MOLOCO",
                        ImageNetwork.logoFkUnissula)}
                    {this.workCard("PT. Obatin Sinergi Sehat",
                        "Mobile Developer • Full Time • Remote",
                        "Juni 2021 - Juni 2023",
                        "Merancang UI/UX dan prototipe untuk aplikasi kesehatan OBAT-in dan OBAT-in Heroes",
                        "Membangun aplikasi OBAT-in dan OBAT-in Heroes, menganalisa kebutuhan teknologi serta membuat aset desain grafis",
                        ImageNetwork.logoObatin)}
                </div>
            </div>
        );
    }
}
