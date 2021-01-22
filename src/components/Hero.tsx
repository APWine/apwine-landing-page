import React from "react"

const Hero = () => (
    <div className="flex flex-col items-center text-white w-full max-w-2xl mx-auto mt-16 mb-32 md:mt-14 md:mb-24 px-8 md:px-0">
        <span className="text-4xl md:text-5xl font-bold glow-text text-center text-glow">The protocol allowing you to trade unrealised yield.</span>
        { /*
        TODO: add on Mainnet beta
        <div className="flex flex-col items-center space-y-2 mt-8">
            <span className="font-text uppercase tracking-widest text-sm">Total value locked</span>
            <span className="px-6 py-4 bg-primary-400 bg-opacity-100 rounded-xl text-5xl font-bold">589,234,583.394$</span>
        </div>
        */ }
        <span className="font-text font-light text-sm text-center mt-8">Speculate on the evolution of the yield generated by different DeFi protocols. Hedge your risk on your passive revenue, converting it into futures.</span>
        <div className="flex flex-col sm:flex-row items-center mt-8 text-sm space-y-2 sm:space-y-0 sm:space-x-2">
            <a href="https://alpha.apwine.fi" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-gradient-to-br from-primary-300 to-primary-200 rounded-xl transition duration-300 hover:opacity-75">Enter platform</a>
            <a href="https://docs.apwine.fi" target="_blank" rel="noopener noreferrer" className="px-8 py-3 hover:text-primary-200 transition duration-300">Explore more</a>
        </div>
    </div>
)

export default Hero