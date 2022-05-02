import React from 'react'
import { AboutUs } from './AboutUs'
import { FAQ } from './FAQ'
import HeroSection from './HeroSection'
import { HomePosts } from './HomePosts'
import { Props } from '../pages/index'
import { Team } from './Team'



export const HomePage = ({ collection, teamData }: Props) => {

    return (
        <>
            <HeroSection />
            <AboutUs />
            <HomePosts collection={collection} teamData={[]} />
            <Team teamData={teamData} />
            <FAQ />
        </>
    )
}
