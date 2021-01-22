import React from "react"

import classnames from "classnames"

import hedgeIcon from "../images/icons/hedge.svg"
import coinsIcon from "../images/icons/coins.svg"

const Feature = ({ icon, title, description }) => (
    <div className={classnames("flex-1 flex flex-col items-center px-16 py-12 bg-primary-400 bg-opacity-50 rounded-xl")}>
        <img src={icon} alt={title} className="w-16 h-16" />
        <span className="text-3xl font-bold text-white mt-8 text-center">{ title }</span>
        <span className="text-sm font-text text-primary-100 text-center mt-4">{ description }</span>
    </div>
)

const Features = () => (
    <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 mx-auto 2xl:max-w-4xl">
        <Feature
            icon={hedgeIcon}
            title="Hedge your risk"
            description="Hedge your risk on your passive revenue, converting it into futures." />
        <Feature
            icon={coinsIcon}
            title="Tokenize your yield"
            description="Speculate on the evolution of the yield generated by different DeFi protocols." />
    </div>
)

export default Features