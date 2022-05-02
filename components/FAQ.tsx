import React, { useState } from 'react'
import { Footer } from './Footer';

export const FAQ = () => {

  const [isSelect, setSelect] = useState<any>(null);

  type data = {
    question: string,
    answer: string
  }

  const data = [
    {
      question: "What's an NFT?",
      answer: "A non-fungible token is a non-interchangeable unit of data stored on a blockchain."
    },
    {
      question: "What's Metamask?",
      answer: "MetaMask is a software cryptocurrency wallet used to interact with the Ethereum blockchain. It allows users to access their Ethereum wallet through a browser extension or mobile app, which can then be used to interact with decentralized applications"
    },
    {
      question: "What's pre-sale?",
      answer: "Presales is a process or a set of activities/sales normally carried out before a customer is acquired, though sometimes presales also extends into the period the product or service is delivered to the customer"
    },

  ];



  const handleClick = (i: number) => {
    console.log(i)
    if (isSelect === i) {
      return setSelect(null)
    }
    setSelect(i)
  }

  return (
    <div className=' min-h-screen snap-start bg-white   flex flex-col items-center  text-gray-800'>
      <h1 className='text-3xl poppins font-bold px-8 py-3 text-center my-10 border-4 border-gray-800 rounded-full'>Your Questions..?</h1>
      {/* accordion  */}
      <div className='allFAQ m-auto mt-[10%] px-5 overflow-hidden'>
        {
          data.map((val, i: number) => {
            return (
              <div key={i} onClick={() => { handleClick(i) }} className='accordion px-4 my-2 w-[300px] sm:w-[375px] md:w-[500px] cursor-pointer pt-5 pb-3 text-left bg-slate-300 rounded-lg'>
                <div className='question flex justify-between items-center'>
                  <h1 className='font-bold poppins text-gray-800'>{val.question}</h1>
                  {
                    isSelect === i ?
                      <svg className=' w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.39 265.4l127.1-128C143.6 131.1 151.8 128 160 128s16.38 3.125 22.63 9.375l127.1 128c9.156 9.156 11.9 22.91 6.943 34.88S300.9 320 287.1 320H32.01c-12.94 0-24.62-7.781-29.58-19.75S.2333 274.5 9.39 265.4z" /></svg>
                      :
                      <svg className=' w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z" /></svg>
                  }
                </div>
                <p className={`mt-2  poppins font-light ${isSelect === i ? " max-h-7xl h-auto transition-all test" : " overflow-hidden max-h-0 transition-all test"}`}>{val.answer}
                </p>
              </div>
            )
          })
        }
      </div>
      <Footer />
    </div>
  )
}
