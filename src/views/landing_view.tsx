import React, { Component, startTransition, useEffect } from "react";
import PortfolioView from "./portfolio_view";
import IntroView from "./intro_view";
import AboutView from "./about_view";
import WorkView from "./work_view";
import { useAppSelector, useAppDispatch } from '../app/provider_hooks'
import { useSpring, easings } from "react-spring";
import { LandingSection } from "../app/enum";
import { animated } from '@react-spring/web'
import { fastOutSlowIn } from "../app/easing";
import { toSectionIntro } from '../app/reducers/landing_reducer'


function LandingView() {

  const section = useAppSelector((state) => state.landing.section)
  const showAbout = useAppSelector((state) => state.landing.showAbout)
  const showIntro = useAppSelector((state) => state.landing.showIntro)
  const showPortfolio = useAppSelector((state) => state.landing.showPortfolio)
  const showWork = useAppSelector((state) => state.landing.showWork)
  const dispatch = useAppDispatch()


  var photoAnim = useSpring({
    delay: section === LandingSection.Portfolio ? 800 : 10,
    reverse: section !== LandingSection.Portfolio ? true : false,
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: { easing: fastOutSlowIn, duration: 600 },
  });

  return (<div id="landingLayout"
    style={{ position: "relative", clipPath: 'rectangle(0px 0px 0px 0px)', backgroundColor: "rgba(20, 20, 20, 1)" }}
  >

    {showWork ? <div id="workExpPages" className="w-full absolute z-20"><WorkView /></div> : null}


    {showAbout ? <div id="aboutPages" className="w-full absolute z-10"><AboutView /></div> : null}

    {showPortfolio ? <animated.div id="portfolioPages" className="w-full absolute z-10" style={{ ...photoAnim }}><PortfolioView /></animated.div> : null}
    <div id="introPages" className="w-full absolute">
      <IntroView />
    </div>
  </div>
  )
}



class LandingViewPure extends React.PureComponent {
  render() {
    return <LandingView />;
  }
}

export default LandingViewPure