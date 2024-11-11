import React, { Component } from "react";
import Lottie from "lottie-react";
import FishSwimming from "../assets/lottie/fish_swimming.json";

class PortfolioView extends Component {

    Fish = () =>
        <div id="lottieFish" className="w-full h-screen bg-cover bg-center bg-no-repeat opacity-0">
            <Lottie
                animationData={FishSwimming}
                aria-aria-labelledby="use lottie animation"
                style={{ height: "100vh", width: "100vw", clipPath: 'rectangle(0px 0px 0px 0px)' }}
                rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
            />
        </div>


    render() {
        return (<div style={{ backgroundColor: "rgba(20, 20, 20, 1)" }}>
            <this.Fish />
        </div>)
    }

}

export default PortfolioView