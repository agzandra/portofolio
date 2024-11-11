import React, { Component } from "react";
import Lottie from "lottie-react";
import FishSwimming from "../assets/lottie/fish_swimming.json";

class PortfolioView extends Component {
    Fish = () =>
        <Lottie
            animationData={FishSwimming}
            aria-aria-labelledby="use lottie animation"
        />

    render() {
        return (<this.Fish />)
    }

}

export default PortfolioView