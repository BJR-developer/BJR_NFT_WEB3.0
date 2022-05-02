import React from 'react'
import { SingleMember } from './loop/singleMember';
import { Creator2 } from '../Team';

// const memberData: MemberProps[] = [
//     {
//         profile: "/images/nft/solo/raiyana.jpg",
//         facebook: "https://www.facebook.com/naznin.azad.982",
//         instagram: "https://www.facebook.com/naznin.azad.982",
//         profilename: "Raiyana Azad",
//         description: "Designer of Web Development",
//         twitter: "#"
//     },
//     {
//         profile: "/images/nft/solo/rahad.jpg",
//         facebook: "https://www.facebook.com/naznin.azad.982",
//         instagram: "https://www.facebook.com/naznin.azad.982",
//         profilename: "Rahad Islam",
//         description: "Electronics Specialist in Computer",
//         twitter: "#"
//     },
//     {
//         profile: "/images/nft/solo/simi.jpg",
//         facebook: "https://www.facebook.com/naznin.azad.982",
//         instagram: "https://www.facebook.com/naznin.azad.982",
//         profilename: "Arohi Islam Riya",
//         description: "Best Python programmer in our college",
//         twitter: "#"
//     }
// ];

export const ProfileCard = ({ teamData }: Creator2) => {
    return (
        <>
            {
                teamData.map((val, i: number) => {
                    return <SingleMember key={i}
                        profile={val.image} opensea={val.opensea} facebook={val.facebook} instagram={val.instagram} profilename={val.name} description={val.bio}
                    />
                })
            }
        </>
    )
}
