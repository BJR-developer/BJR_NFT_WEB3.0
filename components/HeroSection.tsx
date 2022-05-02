import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from './Navbar';
const HeroSection = () => {
    const [newscrollY, setScrollY] = useState(0);

    const router = useRouter();
    // if (typeof window !== undefined) {
    //     window.onscroll = () => {
    //         setScrollY(scrollY / 80);
    //     }
    // }
    return <>
        <section className=' relative font-raleway tracking-widest overflow-x-hidden snap-start min-h-screen bg-white '>
            <Navbar
                isDark="false"
            />
            <div className='flex flex-col  justify-center items-center absolute bottom-0 top-0 left-0 right-0 m-auto z-20'>
                <h1 className={' text-[65px] md:text-[90px] font-extrabold text-center'}>BJR Club!!!</h1>
                <h3 className='text-xl font-semibold poppins text-center'>BJR Friends circle collection is <br></br> joining the NFT Space on Opensea.</h3>
                <button onClick={() => router.push("/nft/BJR Smile")} className=' px-8 py-2 flex items-center shadow-xl transition-all  bg-[#cff800] border-[#cff800] hover:bg-[#c2e900]  rounded-xl text-gray-700 text-base poppins font-medium my-5'>View on Opensea
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
            <div className='absolute hidden md:block top-[15%] -left-10 bottom-0  right-0 m-auto'>
                <div style={{ transform: `rotate(${newscrollY + 9}deg)` }} className={`flex flex-col items-center justify-center relative  transition-all 12 w-64 h-64 bg-[#00000000] border-4 border-black rounded-lg`}>
                    <img
                        src="/images/nft/bjr-8.jpg"
                        className="w-56 h-56 absolute hidden md:block top-0 right-0 bottom-0 left-0 m-auto rounded-md object-cover"
                    />
                </div>
            </div>
            <div className='absolute hidden md:block top-[15%] -right-10 bottom-0  m-auto'>
                <div style={{ transform: `rotate(${newscrollY + 9}deg)` }} className={`flex flex-col items-center justify-center relative  transition-all 12 w-64 h-64 bg-[#00000000] border-4 border-black rounded-lg`}>
                    <img
                        src="/images/nft/bjr1.jpg"
                        className="w-56 h-56 absolute hidden md:block top-0 right-0 bottom-0 left-0 m-auto rounded-md object-cover"
                    />
                </div>
            </div>
            <div className='absolute hidden md:block top-[45%] -right-10 bottom-0  m-auto'>
                <div style={{ transform: `rotate(${newscrollY + 9}deg)` }} className={`flex flex-col items-center justify-center relative   transition-all 12 w-64 h-64 bg-[#00000000] border-4 border-black rounded-lg`}>
                    <img
                        src="/images/nft/bjr-6.jpg"
                        className="w-56 h-56 absolute hidden md:block top-0 right-0 bottom-0 left-0 m-auto rounded-md object-cover"
                    />
                </div>
            </div>
            <div className='absolute hidden md:block top-[45%] -left-10 filter-[invert] bottom-0  m-auto'>
                <div style={{ transform: `rotate(${newscrollY + 9}deg)` }} className={`flex flex-col items-center justify-center relative  transition-all 12 w-64 h-64 bg-[#00000000] border-4 border-black rounded-lg`}>
                    <img
                        src="/images/nft/bjr-5.jpg"
                        className="w-56 h-56 absolute hidden md:block top-0 right-0 bottom-0 left-0 m-auto rounded-md object-cover"
                    />
                </div>
            </div>
        </section>

    </>;
}


export default HeroSection;