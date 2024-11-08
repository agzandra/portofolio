
import React, { Component } from "react";
import { useSpring, animated } from 'react-spring';
import BgParallax1 from "../assets/svgs/mountain_parallax_1.svg";
import BgParallax2 from "../assets/svgs/mountain_parallax_2.svg";
import BgParallax3 from "../assets/svgs/mountain_parallax_3.svg";
import BgParallax4 from "../assets/svgs/mountain_parallax_4.svg";
import BgParallax5 from "../assets/svgs/mountain_parallax_5.svg";
import BgParallax6 from "../assets/svgs/mountain_parallax_6.svg";
import BgParallax7 from "../assets/svgs/mountain_parallax_7.svg";
class CMountainParallax extends Component {

    state = {
    offsetTop: '20%'
  };

  componentDidMount() {
    // Setelah komponen dimount, jalankan animasi
    this.animate();
  }

  animate = () => {
    const element = this.element;
    element.style.transition = 'top 0.5s ease-in-out'; // Durasi dan easing animasi
    element.style.top = '0%';
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
        return <div
            className="min-h-screen"
            style={{
                backgroundImage: `url(${bgSelect()})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                height: "100%",
                width: "100%",
                position: "absolute",
                top: "20%",
            }}
        >
        </div>
    }
    render() {
        return (
            <div style={{ position: "relative" }}>
                <this.BgParallax layer={7} />
                <this.BgParallax layer={6} />
                <this.BgParallax layer={5} />
                <this.BgParallax layer={4} />
                <this.BgParallax layer={3} />
                <this.BgParallax layer={2} />
                <this.BgParallax layer={1} />
                <div>Elemen Bawah</div>
            </div >
        )
    }
}

export default CMountainParallax