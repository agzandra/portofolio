
import React, { Component, useRef } from "react";
import { useSpring, animated } from 'react-spring';
import BgParallax1 from "../assets/svgs/mountain_parallax_1.svg";
import BgParallax2 from "../assets/svgs/mountain_parallax_2.svg";
import BgParallax3 from "../assets/svgs/mountain_parallax_3.svg";
import BgParallax4 from "../assets/svgs/mountain_parallax_4.svg";
import BgParallax5 from "../assets/svgs/mountain_parallax_5.svg";
import BgParallax6 from "../assets/svgs/mountain_parallax_6.svg";
import BgParallax7 from "../assets/svgs/mountain_parallax_7.svg";
import "../css/shooting_star.css";
class CMountainParallax extends Component {




    componentDidMount() {
        console.log("HELLO DID MOUNT");
        // Setelah komponen dimount, jalankan animasi
        this.animate();
    }

    animate = () => {
        function transition(id: number) {
            const element = document.getElementById(`parallax${id}`);
            setTimeout(() => {
                element!.style.transition = 'transform  1.0s cubic-bezier(0.4, 0, 0.2, 1)'; // Durasi dan easing animasi
                element!.style.transform = 'translateY(20%)';
            }, 100 * id);

            if (id === 7) {
                setTimeout(() => {
                    const star = document.getElementById(`shootingStar`);
                    const landingLayout = document.getElementById("landingLayout");
                    star!.style.transition = 'opacity  2.0s cubic-bezier(0.4, 0, 0.2, 1)'; // Durasi dan easing animasi
                    star!.style.opacity = '1';
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

    };

    BgParallax(props: any) {
        function bgSelect() {
            switch (props.layer) {
                case 1:
                    return BgParallax1;
                case 2:
                    return BgParallax2;
                case 3:
                    return BgParallax3;
                case 4:
                    return BgParallax4;
                case 5:
                    return BgParallax5;
                case 6:
                    return BgParallax6;
                case 7:
                    return BgParallax7;
                default:
                    return BgParallax1;
            }
        }
        return (
            <div
                className="min-h-screen"
                id={`parallax${props.layer}`}
                style={{
                    backgroundImage: `url(${bgSelect()})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    transform: "translateY(100%)",
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    top: "0%",
                }}
            >
            </div>)

    }
    render() {
        return (
            <div style={{clipPath: 'rectangle(0px 0px 0px 0px)'}}>
                <div className="h-screen" style={{ backgroundColor: "rgba(0, 0, 0, 0.93)" }}></div>
                <section id="shootingStar" style={{ opacity: 0 }}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </section>
                <this.BgParallax layer={7} />
                <this.BgParallax layer={6} />
                <this.BgParallax layer={5} />
                <this.BgParallax layer={4} />
                <this.BgParallax layer={3} />
                <this.BgParallax layer={2} />
                <this.BgParallax layer={1} />


            </div >
        )
    }
}

export default CMountainParallax