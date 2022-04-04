import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

export default function NFTdropPage() {
  const connectWithMetamask = useMetamask();
  const disconnectMetamask = useDisconnect();
  const address  = useAddress();
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className='mainNFTDiv flex flex-col lg:flex-row lg:justify-between'>
      {/* Left Side  */}
      <div className='leftSide py-5 lg:w-4/12 bg-gradient-to-br from-cyan-500 to-rose-500 lg:min-h-screen flex items-center flex-col justify-center text-white'>
        <img
          alt='nft 1  '
          src="/images/nft/nft1.png"
          className=' object-cover w-44 lg:w-72 h-auto p-2 bg-gradient-to-br from-yellow-500 to-purple-500 rounded-xl'
        />
        <div className='text-center py-5'>
          <h1 className='font-bold text-xl'>{id}</h1>
          <h2 className=' text-xs'>A collection of BJR Web Programmer</h2>
        </div>
      </div>
      {/* Right Side */}
      <div className='rightSide lg:w-8/12 pt-10 pb-5 px-5 lg:px-10 flex flex-col justify-between'>
        {/* above part  */}
        <div className='above'>
          <div className='navbar flex justify-between items-center w-full'>
            <h1 className=' text-lg'>The <b className=' border-b-rose-500 border-b'>BJR</b> NFT Market Place</h1>
              <button onClick={()=>address ? disconnectMetamask() : connectWithMetamask()} className='bg-rose-400 text-gray-50 pt-2 pb-2.5 px-4 text-center font-bold rounded-3xl'>{address ? 'Sign out' : 'Sign In'}</button>
          </div>
          <hr className='bar my-3 text-black border-t-2'></hr>
          <div className='wallet'>
            <h4 className=' text-center text-xs text-rose-500'>{!address ? 'You are not connected' : `You're logged in with wallet ${address.substring(0,5)}....${address.substring(address.length-5)}`}</h4>
          </div>
        </div>
        {/* middle part  */}
        <div className='middle py-10'>
          <img src='/images/nft/nft-club.jpg' className='m-auto w-44 lg:w-72' alt='bjr nft club' />
          <div className='textContent py-5'>
          <h1 className=' text-3xl font-extrabold text-center'>The BJR Programmer NFT Club | NFT Drop</h1>
          <p className='text-center text-green-700'>13/21 NFT's claimed</p>
          </div>
        </div>
        {/* bottom part  */}
        <button className=' w-full bg-rose-600 text-white rounded-3xl py-3 font-bold'>Mint NFT (0.01 ETH)</button>
      </div>
    </div>
  )
}
