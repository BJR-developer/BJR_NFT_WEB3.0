import React, { useState, useEffect } from 'react'
import { NextRouter, useRouter } from 'next/router'
import Link from 'next/link';
import { Props } from '../pages';
import { urlFor } from '../sanity';

export const HomePosts = ({ collection }: Props) => {

    const router = useRouter();

    return (
        <>
            <section className='bg-fixed bg-white bg-bottom bg-cover flex snap-start min-h-screen flex-col justify-start items-center'>
                {/* <h1 className=' text-[80px] coiny text-black text-center pt-10'>BoredApes is Back!!!</h1> */}
                <div className='' />
                <h1 className='text-3xl text-black poppins font-bold px-8 py-3 text-center my-10 mx-4 border-4 border-black rounded-full max-w-5xl'>NFT Collections</h1>
                {/* posts loop */}
                <div className=' flex items-center justify-center h-[80vh]'>
                    <div className=' flex flex-wrap items-start justify-center'>
                        {
                            collection.map((res, i) => {
                                return (
                                    <div key={i} onClick={() => router.push("/nft/" + res.slug.current)} className='post  flex flex-col items-center justify-center max-w-xs text-black'>
                                        <img src={urlFor(res.previewImage)} className=' object-cover object-center w-60 h-72 border-2 border-[#aaaaaa] shadow-lg rounded-2xl cursor-pointer' />
                                        <h1 className='title cursor-pointer font-raleway text-center my-3 font-bold text-xl'>{res.title}</h1>
                                        <h3 className='description cursor-pointer font-medium text-gray-800  text-center border-l-2 border-rose-500 '>{res.description}</h3>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
