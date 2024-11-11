import React, { Component } from "react";
import PortfolioView from "./portfolio_view";
import IntroView from "./intro_view";


class LandingView extends Component {

  animateIntro = (reverse: boolean = false) => {
    const introtext = document.getElementById(`introduceText`);
    const introimg = document.getElementById(`introduceImage`);
    const introimgopacity = document.getElementById(`introduceImageOpacity`);
    setTimeout(() => {
      introimgopacity!.style.transition = reverse ? 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'opacity 2.5s cubic-bezier(0.4, 0, 0.2, 1)'; // Durasi dan easing animasi
      introimgopacity!.style.opacity = reverse ? '0%' : '100%';
    }, reverse ? 200 : 1100)
    setTimeout(() => {
      introtext!.style.transition = 'transform  1.0s cubic-bezier(0.4, 0, 0.2, 1)'; // Durasi dan easing animasi
      introtext!.style.transform = reverse ? 'translateX(-100%)' : 'translateX(0%)';
      introimg!.style.transition = 'transform 1.0s cubic-bezier(0.4, 0, 0.2, 1)'; // Durasi dan easing animasi
      introimg!.style.transform = reverse ? 'translateY(-100%)' : 'translateY(0%)';
    }, reverse ? 100 : 1200);
    if (!reverse) {
      setTimeout(() => {
        var portfolio = document.getElementById("portfolioPages");
        portfolio!.hidden = true;
      }, 1200)
    }
  };

  animatePortfolio = (reverse: boolean = false) => {
    const portfoliotext = document.getElementById(`portfolioText`);
    const portfolioimg = document.getElementById(`portfolioImage`);
    const portfolioimgopacity = document.getElementById(`portfolioImageOpacity`);
    setTimeout(() => {
      portfolioimgopacity!.style.transition = reverse ? 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'opacity 2.5s cubic-bezier(0.4, 0, 0.2, 1)'; // Durasi dan easing animasi
      portfolioimgopacity!.style.opacity = reverse ? '0%' : '100%';
    }, reverse ? 200 : 1100)
    setTimeout(() => {
      portfoliotext!.style.transition = 'transform  1.0s cubic-bezier(0.4, 0, 0.2, 1)'; // Durasi dan easing animasi
      portfoliotext!.style.transform = reverse ? 'translateX(-100%)' : 'translateX(0%)';
      portfolioimg!.style.transition = 'transform 1.0s cubic-bezier(0.4, 0, 0.2, 1)'; // Durasi dan easing animasi
      portfolioimg!.style.transform = reverse ? 'translateY(-100%)' : 'translateY(0%)';
    }, reverse ? 100 : 1200);
    if (!reverse) {
      var fish = document.getElementById("lottieFish");
      setTimeout(() => {
        fish!.style.transition = 'opacity  1.0s cubic-bezier(0.4, 0, 0.2, 1)'; // Durasi dan easing animasi
        fish!.style.opacity = reverse ? '0' : '1';
        setTimeout(() => {
          var intro = document.getElementById("introPages");
          intro!.hidden = true;
        }, 1000)
      }, 1000);
    }
  };


  introPortfolioTransition = (reverse: boolean = false) => {
    function transition(id: number) {
      const element = document.getElementById(`parallax${id}`);
      if (reverse) {
        element!.style.transform = `translateY(-${100 / (id * 2.5)}%)`;
      }
      if (id === 1) {
        const offset = document.getElementById(`parallaxOffset`);
        setTimeout(() => {
          offset!.style.transition = 'transform  1.0s cubic-bezier(0.4, 0, 0.2, 1)'; // Durasi dan easing animasi
          offset!.style.transform = reverse ? 'translateY(0%)' : 'translateY(-100%)';
        }, 100 * id);
      }
      setTimeout(() => {
        element!.style.transition = 'transform  1.0s cubic-bezier(0.4, 0, 0.2, 1)'; // Durasi dan easing animasi
        element!.style.transform = reverse ? 'translateY(20%)' : 'translateY(100%)';
      }, 100 * (reverse ? (id / 2) : (8 - id)));

      if (id === 7) {
        setTimeout(() => {
          const star = document.getElementById(`shootingStar`);
          const landingLayout = document.getElementById("landingLayout");
          star!.style.transition = 'opacity  2.0s cubic-bezier(0.4, 0, 0.2, 1)'; // Durasi dan easing animasi
          star!.style.opacity = reverse ? '1' : '0';
          landingLayout!.style.removeProperty('clip-path');
        }, 1000);
      }
    }

    if (reverse) {
      var intro = document.getElementById("introPages");
      intro!.hidden = false;
      var fish = document.getElementById("lottieFish");
      fish!.style.transition = 'opacity  1.0s cubic-bezier(0.4, 0, 0.2, 1)'; // Durasi dan easing animasi
      fish!.style.opacity = reverse ? '0' : '1';
      setTimeout(() => {
        this.animatePortfolio(reverse);
      }, 500)
      setTimeout(() => {
        transition(1);
        transition(2);
        transition(3);
        transition(4);
        transition(5);
        transition(6);
        transition(7);
        this.animateIntro(!reverse);
      }, 1000)

    } else {
      var portfolio = document.getElementById("portfolioPages");
      portfolio!.hidden = false;
      transition(1);
      transition(2);
      transition(3);
      transition(4);
      transition(5);
      transition(6);
      transition(7);
      this.animateIntro(!reverse);
      this.animatePortfolio(reverse);
    }

  }

  render() {
    return (<div id="landingLayout"
      style={{ position: "relative", clipPath: 'rectangle(0px 0px 0px 0px)', backgroundColor: "rgba(20, 20, 20, 1)" }}
    >
      <div id="portfolioPages" className="w-full absolute -z-10">
        <PortfolioView introPortfolioTransition={this.introPortfolioTransition} />
      </div>
      <div id="introPages" className="w-full absolute">
        <IntroView introAnimation={this.animateIntro} introPortfolioTransition={this.introPortfolioTransition} />
      </div>
    </div>
    )
  }
}
export default LandingView