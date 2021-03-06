import React, { FunctionComponent } from "react"

import classnames from "classnames"

import styled, { keyframes } from "styled-components"

import SEO from "./SEO"
import Container from "./Container"
import Footer from "./Footer"
import NewsletterSubscribe from "./NewsletterSubscribe"
import Header from "./Header"

const AnimatedBubbleLeft = styled.div`
    animation: ${keyframes`
        0% {
            transform: scale(1.5) translate(-100%, 0);
        }
        100% {
            transform: scale(1.5) translate(calc(-100% + 4rem), 3rem);
        }
    `} 12s infinite ease-in-out alternate;
`
const AnimatedBubbleRight = styled.div`
    animation: ${keyframes`
        0% {
            transform: scale(1.5) translate(100%, 0);
        }
        100% {
            transform: scale(1.5) translate(calc(100% - 8rem), -2rem);
        }
    `} 15s .2s infinite ease-in-out alternate;
`

const Layout: FunctionComponent<{ pageName?: string, className?: string }> = ({ children, pageName, ...props }) => {
    return (
        <div {...props} className={classnames(props.className, "relative pattern-dots text-opacity-10 text-primary-200 overflow-x-hidden")}>

            <SEO pageName={pageName} />
            
            <AnimatedBubbleLeft className="absolute top-0 left-1/2 -ml-32 md:-ml-64 -mt-16 w-96 h-96 rounded-full bg-gradient-to-br from-black to-primary-200 opacity-5" />
            <AnimatedBubbleRight className="absolute top-0 right-1/2 -mr-48 md:-mr-96 mt-16 w-96 h-96 rounded-full bg-gradient-to-br from-black to-primary-200 opacity-10" />

            <div className="absolute bg-gradient-to-b from-primary-200 to-transparent h-screen w-full opacity-20" /> { /* TODO: radial gradient with styled.div */ }

            <div className="relative z-10">

                <Header />
                {children}
                <SEO pageName={pageName} />
                <Container children={<NewsletterSubscribe />} className="mt-32" />
                <Container children={<Footer />} className="mt-8 pb-16" />
            
            </div>

        </div>
    )
}

export default Layout
