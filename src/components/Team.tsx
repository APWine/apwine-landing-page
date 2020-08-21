import React from "react"

import styled from "styled-components"

import classnames from "classnames"

import { Title, Paragraph } from "./Text"

import gaspard from "../images/team/gaspard.jpg"
import antoine from "../images/team/antoine.jpg"
import ulysse from "../images/team/ulysse.jpg"

const GradientBackground = styled.div`
    background: linear-gradient(to bottom left, #90cdf4, #4299e1);
`

const Person = ({ image, name, description }) => (
    <div className="flex flex-col md:flex-row mt-16 md:items-center">
        <div className="w-24 h-full">
            <GradientBackground className="p-1 rounded-full w-24 h-auto">
                <img src={image} className="rounded-full w-full" />
            </GradientBackground>
        </div>
        <div className="flex flex-col mt-2 md:mt-0 md:ml-4">
            <h3 className="text-gray-800 text-2xl font-bold text-left">{ name }</h3>
            <Paragraph className="mt-2">{ description }</Paragraph>
        </div>
    </div>
)

const Team = () => (
    <div>
        <Title>Team</Title>
        <Person image={gaspard} name="Gaspard Peduzzi" description="CS Student at EPFL, Gaspard co-founded the Blockchain Student Association. He is passionate about trustless/censorship resistant systems and actively conducting research in those fields." />
        <Person image={antoine} name="Antoine Mouran" description="The uprise of Decentralised Finance (DeFi) marked a turning point for Antoine. This passion led him to become an active member and moderator of the DeFi France community and a member of the Blockchain Student Association at EPFL, where he's currently studying CS." />
        <Person image={ulysse} name="Ulysse Ramage" description="Originally from Paris, Ulysse graduated in CS at EPFL and is now working as a software engineer at Amazon. He's interested in building user-friendly applications and interfaces." />
    </div>
)

export default Team