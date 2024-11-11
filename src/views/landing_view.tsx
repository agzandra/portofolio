import React, { Component } from "react";
import PortfolioView from "./portfolio_view";
import IntroView from "./intro_view";


class LandingView extends Component {
  


  render() {
    return (<div id="landingLayout"
      style={{ position: "relative", clipPath: 'rectangle(0px 0px 0px 0px)', backgroundColor: "rgba(20, 20, 20, 1)" }}
    >
      <div id="portfolioPages" className="w-full absolute -z-10">
        <PortfolioView />
      </div>
      <div id="introPages" className="w-full absolute">
        <IntroView />
      </div>
    </div>
    )
  }
}
export default LandingView