import React, { Component } from "react";
import Lottie from "lottie-react";
import FishSwimming from "../assets/lottie/fish_swimming.json";
import CButton from "../components/c_button";
import { Icon } from '@iconify/react';
import ImageNetwork from "../components/c_image_network";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

interface PortfolioProps {
    introPortfolioTransition: (reverse?: boolean) => void
}

class PortfolioView extends Component<PortfolioProps, { showcaseId: number, title: string, desc: string, tag?: React.JSX.Element, specs?: React.JSX.Element, imageShowcaseRows?: React.JSX.Element, imageShowcaseColumns?: React.JSX.Element, imageShowcases: string[], lang: string }> {


    constructor(props: PortfolioProps) {
        super(props);
        this.state = {
            showcaseId: 1,
            title: "",
            desc: "",
            imageShowcases: [],
            lang: "ID",
        }
    }

    imageShowcase(vertical: boolean = false) {
        return (<div id="portfolioImage" className={(vertical ? "sm:w-full md:mb-20 sm:mb-12 xs:mb-2 lg:px-64 sm:px-40 xs:px-12" : "sm:w-1/3 xs:w-1/2") + " sm:translate-y-full xs:-translate-y-full"}>
            <div id="portfolioImageOpacity" className={(vertical ? "sm:mt-5 xs:mt-3" : "md:w-3/5 xs:w-3/4 h-1/2 md:mr-16 sm: mr-8 xs:mr-0 xs:ml-8 sm:ml-0 sm:mt-10 md:mt-16 xl:mt-24 xs:mt-10") + " xs:mb-10 opacity-0 flex flex-col relative  overflow-clip scale-125"}
            >
                {vertical ? (<img src={ImageNetwork.showcasePlainWeb}
                    className="w-full opacity-100"
                />) : (
                    <img src={ImageNetwork.showcasePlain}
                        className="w-full opacity-100"
                    />
                )}
                <div className="slide-container w-full h-1/2 absolute top-0 left-0 opacity-100">
                    <Fade key={this.state.imageShowcases.join(',')} autoplay={true} arrows={false} duration={1500} infinite={true}>
                        {this.state.imageShowcases.map((url, index) => (
                            <div key={index}>
                                <img style={{ width: '100%' }} src={url} />
                            </div>
                        ))}
                    </Fade>
                </div>
                {vertical ? (<div></div>) : (
                    <img src="/portfolio/iphone_frame.svg"
                        className="w-full absolute top-0 z-20 left-0"
                    />
                )}

            </div>
        </div>)
    }


    componentDidMount() {
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
        this.setState({
            imageShowcaseRows: this.imageShowcase(),
        })
        setTimeout(() => {
            this.selectShowcase(1, true);

        }, 300)

    }

    availableStore = (gplay?: string, appstore?: string) => {
        const gplayBtn = () => gplay ? (<a href={gplay} target="_blank">
            <img src={ImageNetwork.getOnGooglePlay} className="w-36 object-contain rounded-lg" />
        </a>) : <div></div>
        const appstoreBtn = () => appstore ? (<a href={appstore} target="_blank">
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

    tagItem = (text: string[]) => {
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
    selectShowcase(id: number, initial: boolean = false) {
        var setToVertical = id === 3 ? true : false


        var replaceTitle = "";
        var replaceDesc = "";
        var replaceTag = this.tagItem([""]);
        var replaceSpecs = this.tagItem([""]);

        if (id === 1) {
            replaceTitle = "blumb";
            replaceDesc = this.state.lang == "ID" ? "blumb adalah aplikasi sosial yang berfokus kepada pengguna profesional, menyediakan lingkungan terbaik bagi para pengguna yang ingin mencari relasi kerja, organisasi dan komunitas profesional, event profesional dan lain sebagainya." : "Blumb is a social application centered around professional users, providing an optimal environment for individuals seeking professional connections, organizations, communities, events, and more.";
            replaceTag = (<div>
                {this.tagItem(["PT. Andalan Basis Teknologi Informatika", "Pre-Release", "Actively Maintained", "Under Development", "Flutter", "Android", "iOS", "Push Notification", "Real Time Chat", "Live Streaming", "Video Conference", "Video Call", "Voice Call", "Google Sign In", "Apple Sign In", "QR Scanner", "Deeplink"])}
                {this.availableStore("https://play.google.com/store/apps/details?id=com.abiseka.blumb", "https://apps.apple.com/id/app/blumb/id6449251568")}
            </div>);

            this.setState({
                imageShowcases: [
                    ImageNetwork.showcaseBlumb1,
                    ImageNetwork.showcaseBlumb2,
                    ImageNetwork.showcaseBlumb3,
                    ImageNetwork.showcaseBlumb4,
                    ImageNetwork.showcaseBlumb5,
                    ImageNetwork.showcaseBlumb6,
                    ImageNetwork.showcaseBlumb7,
                    ImageNetwork.showcaseBlumb8
                ]
            })
        } else if (id === 2) {
            replaceTitle = "e-STR Mobile"
            replaceDesc = this.state.lang == "ID" ? "Aplikasi atas kerja sama dengan Konsil Tenaga Kesehatan Indonesia (sekarang Konsil Kesehatan Indonesia) dibawah naungan Kementerian Kesehatan yang dibuat khusus untuk tenaga kesehatan untuk melakukan pengajuan, perbaikan dan cetak surat tanda registrasi yang telah memiliki sertifikat kompetensi."
                : "This application, developed in collaboration with the Indonesian Health Professionals Council (formerly the Indonesian Health Council) under the Ministry of Health, is specifically designed for healthcare professionals to submit, amend, and print their registration certificates once they have obtained their competency certificates."
            replaceTag = this.tagItem([(this.state.lang == "ID" ? "Konsil Tenaga Kesehatan Indonesia" : "Indonesian Health Professionals Council"), (this.state.lang == "ID" ? "Kementerian Kesehatan" : "Ministry of Health"), "Unreleased", "Under Development", "Flutter", "Android", "iOS"])
            this.setState({
                imageShowcases: [
                    ImageNetwork.showcaseESTR1,
                    ImageNetwork.showcaseESTR2,
                    ImageNetwork.showcaseESTR3,
                    ImageNetwork.showcaseESTR4
                ]
            })
        } else if (id === 3) {
            replaceTitle = "e-STR Webapp"
            replaceDesc = this.state.lang == "ID" ? "Aplikasi atas kerja sama dengan Konsil Tenaga Kesehatan Indonesia (sekarang Konsil Kesehatan Indonesia) dibawah naungan Kementerian Kesehatan yang dibuat khusus untuk tenaga kesehatan untuk melakukan pengajuan, perbaikan dan cetak surat tanda registrasi yang telah memiliki sertifikat kompetensi sekaligus halaman admin untuk validasi pengajuan registrasi baru, registrasi ulang, cetak ulang, tanda tangan elektronik, manajemen akun pemohon, RBAC, dan lainnya"
                : "This application, developed in collaboration with the Indonesian Health Professionals Council (formerly the Indonesian Health Council) under the Ministry of Health, is specifically designed for healthcare professionals to submit, amend, and print their registration certificates once they have obtained their competency certificates, as well as an admin page for validating new registration applications, re-registrations, reprints, electronic signatures, applicant account management, RBAC, and more."
            replaceTag = this.tagItem([(this.state.lang == "ID" ? "Konsil Tenaga Kesehatan Indonesia" : "Indonesian Health Professionals Council"), (this.state.lang == "ID" ? "Kementerian Kesehatan" : "Ministry of Health"), "Unreleased", "Under Development", "Vue.js", "Golang", "HTML"])
            this.setState({
                imageShowcases: [
                    ImageNetwork.showcaseESTRWeb1,
                    ImageNetwork.showcaseESTRWeb2,
                    ImageNetwork.showcaseESTRWeb3,
                    ImageNetwork.showcaseESTRWeb4,
                    ImageNetwork.showcaseESTRWeb5,
                    ImageNetwork.showcaseESTRWeb6,
                ]
            })
        }
        else if (id === 4) {
            replaceTitle = "Moloco"
            replaceDesc = this.state.lang == "ID" ? "Mobile Logbook Co-Ass atau Moloco adalah aplikasi yang dikembangkan untuk membantu mahasiswa dan dosen dalam mengatur pengajuan logbook, penilaian, perwalian dan aktivitas perkuliahan di Universitas Islam Sultan Agung (UNISSULA) fakultas kedokteran."
                : "Mobile Logbook Co-Ass or Moloco is an application developed to assist students and lecturers in managing logbook submissions, assessments, advisory, and other academic activities at the Faculty of Medicine, Universitas Islam Sultan Agung (UNISSULA)."
            replaceTag = (<div>
                {this.tagItem([(this.state.lang == "ID" ? "Fakultas Kedokteran Universitas Islam Sultan Agung" : "Faculty of Medicine, Universitas Islam Sultan Agung (UNISSULA)"), "Released", "Flutter", "Live Production", "Actively Maintained", "Android", "iOS", "Push Notification"])}
                {this.availableStore("https://play.google.com/store/apps/details?id=com.fkunissula.molocopspdfkunissula", "https://apps.apple.com/id/app/moloco/id1625049471")}
            </div>);
            this.setState({
                imageShowcases: [
                    ImageNetwork.showcaseMoloco1,
                    ImageNetwork.showcaseMoloco2,
                    ImageNetwork.showcaseMoloco3,
                    ImageNetwork.showcaseMoloco4
                ]
            })
        }
        else if (id === 5) {
            replaceTitle = "OBAT-in"
            replaceDesc = this.state.lang == "ID" ? "Pengembangan aplikasi bidang kesehatan yang menyediakan layanan dokter dan tenaga medis lainnya berupa layanan telemedis, visit dan reservasi praktik, juga menyediakan penjualan produk kesehatan, layanan pembuatan resep obat apotek dan layanan fasilitas kesehatan. Saat ini pengembangan terhenti dalam jangka waktu yang belum ditentukan."
                : "The development of a healthcare application providing telemedicine services, doctor and other medical professional visits and appointments, as well as health product sales, pharmacy prescription services, and healthcare facility services has been temporarily halted."
            replaceTag = this.tagItem(["PT. Obatin Sinergi Sehat", "Discontinued", "Abadoned Project", "Flutter", "Android", "iOS", "Push Notification", "Voice Call", "Video Call", "Real Time Chat", "MapBox"])
            this.setState({
                imageShowcases: [
                    ImageNetwork.showcaseObatin1,
                    ImageNetwork.showcaseObatin2,
                    ImageNetwork.showcaseObatin3,
                    ImageNetwork.showcaseObatin4
                ]
            })
        }
        else if (id === 6) {
            replaceTitle = "Belief"
            replaceDesc = this.state.lang == "ID" ? "Pengembangan aplikasi sosial media khusus untuk konten keagamaan, bertujuan mencegah adanya intervensi oknum sehingga membuat lingkungan sosial yang lebih sehat, aman dan damai dengan memisahkan konten dan aktivitas sosial relevan sesuai kepercayaan setiap pengguna dan aplikasi ini menindak tegas segala pelanggaran komunitas seperti penghinaan, provokasi dan informasi palsu."
                : "Developing a specialized social media app for religious content, aiming to prevent interference from certain parties and create a healthier, safer, and more peaceful social environment. This app will separate relevant social content and activities according to each user's beliefs and will strictly enforce community guidelines against offenses such as insults, provocations, and the spread of false information."
            replaceTag = this.tagItem(["Own Project", "Early Development", "Social Media", "Figma", "Flutter", "Android", "iOS"])
            this.setState({
                imageShowcases: [
                    ImageNetwork.showcaseBelief1,
                    ImageNetwork.showcaseBelief2,
                    ImageNetwork.showcaseBelief3,
                    ImageNetwork.showcaseBelief4
                ]
            })
        }

        for (let index = 0; index < 6; index++) {
            var i = index + 1;
            if (i != id) {
                document.getElementById(`btnShowcase${i}`)!.style.transition = 'scale 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)'; // Durasi dan easing animasi
                document.getElementById(`btnShowcase${i}`)!.style.scale = '0.7';
                document.getElementById(`btnShowcase${i}`)!.style.opacity = '70%';
            } else {

                document.getElementById(`btnShowcase${i}`)!.style.transition = 'scale 0.5s cubic-bezier(0.4, 0, 0.2, 1),0.5s cubic-bezier(0.4, 0, 0.2, 1)'; // Durasi dan easing animasi
                document.getElementById(`btnShowcase${i}`)!.style.scale = '1';
                document.getElementById(`btnShowcase${i}`)!.style.opacity = '100%';
            }

        }
        document.getElementById("portfolioDesc")!.style.transition = 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)'; // Durasi dan easing animasi
        document.getElementById("portfolioDesc")!.style.opacity = '0%';
        if (!initial) {
            document.getElementById("portfolioImageOpacity")!.style.transition = 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)'; // Durasi dan easing animasi
            document.getElementById("portfolioImageOpacity")!.style.opacity = '0%';
            document.getElementById("portfolioImage")!.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'; // Durasi dan easing animasi
            document.getElementById("portfolioImage")!.style.transform = 'translateY(100%)';
        }

        setTimeout(() => {
            this.setState({
                title: replaceTitle,
                desc: replaceDesc,
                tag: replaceTag,
                showcaseId: id,
                specs: replaceSpecs,
                imageShowcaseColumns: setToVertical === true ? this.imageShowcase(true) : <div></div>,
                imageShowcaseRows: setToVertical === false ? this.imageShowcase() : <div></div>

            })
            setTimeout(() => {
                if (!initial) {
                    document.getElementById("portfolioImageOpacity")!.style.transition = 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)'; // Durasi dan easing animasi
                    document.getElementById("portfolioImageOpacity")!.style.opacity = '100%';
                    document.getElementById("portfolioImage")!.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'; // Durasi dan easing animasi
                    document.getElementById("portfolioImage")!.style.transform = 'translateY(0%)';
                }
                document.getElementById("portfolioDesc")!.style.transition = 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)'; // Durasi dan easing animasi
                document.getElementById("portfolioDesc")!.style.opacity = '100%';

                // setTimeout(() => {
                //     this.setState({
                //         showcaseId: id
                //     })
                // }, 500)
            }, 100)
        }, 500)
    }

    Fish = () =>
        <div id="lottieFish" className="w-full h-screen bg-cover bg-center bg-no-repeat opacity-0 ">
            <Lottie
                animationData={FishSwimming}

                style={{ height: "100vh", width: "100vw", clipPath: 'rectangle(0px 0px 0px 0px)' }}
                rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
            />
        </div>


    render() {

        return (
            <div style={{ backgroundColor: "rgba(20, 20, 20, 1)", clipPath: 'rectangle(0px 0px 0px 0px)' }}>
                <div className="w-full absolute  z-10" style={{ backgroundColor: "rgba(20, 20, 20, 1)" }}>
                    <div id="fishBackground" className="overflow-clip"><this.Fish /></div>
                </div>
                <div id="portfolioContent" className="absolute overflow-y-scroll h-screen z-20" >
                    <div className="flex flex-row mt-8 px-9">
                        <CButton id="btnBack" className="mr-3 rounded-xl w-12 h-12" inner={<Icon icon="mdi-light:arrow-left" fontSize={12} className="w-12 h-12 p-3" />} onClick={() => { this.props.introPortfolioTransition(true) }} styleId={1} color="blue" enablePadding={false} />
                        <CButton id="btnShowcase1" className="mr-3" inner={<img src={ImageNetwork.iconBlumb} className="w-12 h-12 object-contain" />} onClick={() => { this.selectShowcase(1) }} styleId={3} color="" />
                        <CButton id="btnShowcase2" className="mr-3" inner={<img src={ImageNetwork.iconESTR} className="w-12 h-12 object-contain" />} onClick={() => { this.selectShowcase(2) }} styleId={3} color="" />
                        <CButton id="btnShowcase3" className="mr-3" inner={<img src={ImageNetwork.iconESTRWeb} className="w-12 h-12 object-contain" />} onClick={() => { this.selectShowcase(3) }} styleId={3} color="" />
                        <CButton id="btnShowcase4" className="mr-3" inner={<img src={ImageNetwork.iconMoloco} className="w-12 h-12 object-contain" />} onClick={() => { this.selectShowcase(4) }} styleId={3} color="" />
                        <CButton id="btnShowcase5" className="mr-3" inner={<img src={ImageNetwork.iconObatin} className="w-12 h-12 object-contain" />} onClick={() => { this.selectShowcase(5) }} styleId={3} color="" />
                        <CButton id="btnShowcase6" inner={<img src={ImageNetwork.iconBelief} className="w-12 h-12" />} onClick={() => { this.selectShowcase(6) }} styleId={3} color="" />
                    </div>
                    <div className="flex min-h-screen sm:flex-row xs:flex-col-reverse sm:items-start xs:items-center justify-center py-9">
                        <div id="portfolioText" className={(this.state.showcaseId === 3 ? "sm:w-full" : "sm:w-2/3") + " flex-col items- xs:w-full md:pl-16 xs:px-9 sm:pl-8 -translate-x-full sm:mt-10 xs: mt-14 xs:mb-40 sm:mb-10"}>
                            {this.state.imageShowcaseColumns}
                            <div id="portfolioDesc" className="flex flex-col opacity-100">
                                <h1 className="xs:text-3xl md:text-3xl xl:text-5xl w-full font-bold text-transparent text-white">
                                    {this.state.title}
                                </h1>
                                <h4 className="sm:text-sm xl:text-lg sm:w-3/4 xs:w-full mt-5 text-white">
                                    {this.state.desc}
                                </h4>
                                {this.state.tag}

                            </div>
                        </div>

                        {this.state.imageShowcaseRows}
                    </div>
                </div>
            </div>
        )
    }

}

export default PortfolioView