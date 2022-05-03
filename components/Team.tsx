import React, { FC } from 'react'
import { Creator } from '../typing'
import { ProfileCard } from './Team/ProfileCard'

export interface Creator2 {
    teamData: Creator[]
}


export const Team: FC<Creator2> = ({ teamData }) => {

    return (
        <div style={{ backgroundImage: "url('/images/nft/squad/bjr-group2.jpg')" }} className='team relative bg-fixed bg-bottom bg-cover min-h-screen snap-start flex flex-col items-center bg-[#00000000] text-white'>
            {/* <div className='team bg-fixed bg-bottom bg-cover min-h-screen snap-start flex flex-col items-center bg-[#000000] text-white overflow-hidden'> */}
            <div className='bg-fixed bg-bottom bg-cover  w-full opacity-70 h-full bg-black absolute' />
            <h1 className='text-3xl  z-50 poppins font-bold px-8 py-3 text-center my-10 border-4 border-white rounded-full'>FRIENDS CLUB</h1>
            <div className='flex flex-col items-center justify-center my-auto'>
                <div className='profile lg:w-[1080px] w-auto z-50 flex flex-wrap justify-center items-center'>
                    <ProfileCard teamData={teamData} />
                </div>
            </div>
        </div>
    )
}
