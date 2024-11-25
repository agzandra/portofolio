
import React, { Component } from "react";
import "../css/shooting_star.css";
import { useAppSelector, useAppDispatch } from '../app/provider_hooks'
import { useSpring, easings } from "react-spring";
import { animated } from '@react-spring/web'
import { LandingSection } from "../app/enum";
import { fastOutSlowIn } from "../app/easing";




function CMountainParallax() {
    const section = useAppSelector((state) => state.landing.section)
    const showAbout = useAppSelector((state) => state.landing.showAbout)
    const dispatch = useAppDispatch()



    var offsetAnim = useSpring({
        delay: 100,
        from: {
            transform: 'translateY(0%)'
        },
        transform: section === LandingSection.Portfolio ? 'translateY(-150%)' : 'translateY(0%)',
        // from: {
        // },
        // to: {
        //     transform: 'translateY(0%)'
        // },
        config: { easing: fastOutSlowIn, duration: section === LandingSection.Portfolio ? 1500 : 1800 },
    });
    var starOpacity = useSpring({
        delay: 600,
        reverse: section === LandingSection.Portfolio ? true : false,
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
        config: { easing: fastOutSlowIn, duration: 1000 },
    });


    return (
        <animated.div id="parallaxParent" style={{ clipPath: 'rectangle(0px 0px 0px 0px)', overflow: "hidden", ...offsetAnim }}>
            <div className="h-screen" style={{ backgroundColor: "rgba(20, 20, 20, 1)" }}></div>
            <animated.section id="shootingStar" style={{ ...starOpacity }}>
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
            </animated.section>
            <BackgroundMountain layer={7} />
            <BackgroundMountain layer={6} />
            <BackgroundMountain layer={5} />
            <BackgroundMountain layer={4} />
            <BackgroundMountain layer={3} />
            <BackgroundMountain layer={2} />
            <BackgroundMountain layer={1} />


        </animated.div >
    )
}

function BgParallax(props: any) {
    const section = useAppSelector((state) => state.landing.section)
    const transition = useSpring({
        delay: 200,

        reverse: false,
        from: {
            scale: 1.5,
            transform: 'translate(0%, 100%)'
        },
       
        scale: section === LandingSection.About ? (2.8 - (0.1 * props.layer)) : (section === LandingSection.Work ? (2.0 - (0.1 * props.layer)) : 1.0),
        transform: section === LandingSection.Intro ? 'translate(0%, 20%)'
            : section === LandingSection.Portfolio ? 'translate(0%, 100%)'
                : section === LandingSection.About ? 'translate(0%,10%)'
                    : section === LandingSection.Work ? 'translate(-10%,10%)' : 'translate(0%, 100%)',
        config: { easing: fastOutSlowIn, duration: section === LandingSection.Portfolio ? (800 + (1400 - (200 * props.layer))) : (800 + (200 * props.layer)) },
    });

    return (
        // <animated.div style={transition(props.layer)}>
        <animated.div
            className="min-h-screen"
            key={props.layer}
            id={`parallax${props.layer}`}
            style={{
                backgroundImage: `url('/portfolio/mountain_parallax_${props.layer}.svg')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                height: "100%",
                width: "100%",
                position: "absolute",
                top: "0%", ...transition
            }}
        >
        </animated.div>
        // </animated.div>
    )

}


class BackgroundMountain extends React.PureComponent<{ layer: number }> {
    render() {
        return <BgParallax layer={this.props.layer} />;
    }
}


class CMountainParallaxClass extends React.PureComponent {
    render() {
        return <CMountainParallax />;
    }
}

export default CMountainParallaxClass