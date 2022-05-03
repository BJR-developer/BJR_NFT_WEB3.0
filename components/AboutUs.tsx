import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export const AboutUs = () => {
    const router = useRouter();

    return (
        <>
            <section className='bg-fixed bg-bottom bg-cover flex bg-[rebeccapurple] snap-start min-h-screen flex-col justify-center items-center'>
                {/* <h1 className=' text-[80px] coiny text-white text-center pt-10'>BoredApes is Back!!!</h1> */}
                <h1 className='text-3xl text-white poppins font-bold px-8 py-3 text-center my-10 border-4 border-white rounded-full'>About Us</h1>
                <div className="flex  flex-col justify-center md:flex-row md:space-x-16 items-center  w-10/12 m-auto">
                    <div className="flex  flex-col items-center w-auto md:w-1/2 justify-center text-center font-coiny text-gray-800 px-4 md:px-0 ">
                        <h2 className="font-bold font-raleway poppins border-b-4 border-white px-5 py-2 rounded-sm text-2xl md:text-4xl text-center text-white">
                            Who we are?
                        </h2>

                        <p className="mt-6 text-lg text-white poppins font-medium">
                            {`We are most talented student of Computer department in Dhaka at PPI. Our next target is going to build a biggest NFT platform. Ahad sir, Hasan sir, Kaniz mam are helping us for this web3.0 project.`}
                        </p>
                    </div>
                    {/* BoredApe Image */}
                    <div className='h-[400px]  '>
                        <div className={`flex flex-col items-center justify-center relative -rotate-[4deg] hover:-rotate-[6deg] duration-500 transition-all 12 w-72 h-72 bg-[#0000005c] border-4 border-white rounded-lg`}>
                            <img
                                src="/images/nft/club.jpg"
                                className="w-64 h-64 absolute top-0 right-0 bottom-0 left-0 m-auto rounded-md object-cover"
                            />
                            <button onClick={() => router.push("/nft/raiyana simi")} className='px-8 py-2 flex items-center -mb-16 shadow-xl transition-all bottom-0 absolute bg-[#cff800] border-2 border-[#cff800] hover:bg-transparent hover:border-white hover:text-white rounded-xl text-gray-700 text-base poppins font-medium my-5'>Get Yours Now
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 ml-5 mt-1 animate-float-right"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
