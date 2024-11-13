
import React, { Component } from "react";
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

        return (
            <div
                className="min-h-screen"
                id={`parallax${props.layer}`}
                style={{
                    backgroundImage: `url('/portfolio/mountain_parallax_${props.layer}.svg')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    transform: "translate(0%, 100%)",
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    scale: "1",
                    top: "0%",
                }}
            >
            </div>)

    }
    render() {
        return (
            <div id="parallaxParent" className="translate-y-0" style={{ clipPath: 'rectangle(0px 0px 0px 0px)' }}>
                <div className="h-screen" style={{ backgroundColor: "rgba(20, 20, 20, 1)" }}></div>
                <section id="shootingStar" style={{ opacity: 0 }}>
                    <span className="starfall"></span>
                    <span className="starfall"></span>
                    <span className="starfall"></span>
                    <span className="starfall"></span>
                    <span className="starfall"></span>
                    <span className="starfall"></span>
                    <span className="starfall"></span>
                    <span className="starfall"></span>
                    <span className="starfall"></span>
                    <span className="starfall"></span>
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