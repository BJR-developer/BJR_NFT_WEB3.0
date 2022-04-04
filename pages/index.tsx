import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BJR - First NFT</title>
      </Head>
      <div className='mainContainer'>
        <div className='centerDiv text-2xl'>
          Welcome to NFT Drop Challenge😎
        </div>
      </div>
    </>
  )
}

export default Home
