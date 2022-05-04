import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAddress, useDisconnect, useMetamask, useNFTDrop } from "@thirdweb-dev/react";
import { GetServerSideProps } from 'next';
import { sanityClient, urlFor } from '../../sanity';
import { Collection } from '../../typing'
import { Navbar } from '../../components/nft/Navbar';
import { IoDiamondOutline } from 'react-icons/io5'
import toast, { Toaster } from 'react-hot-toast';
import { BsPlusCircle } from 'react-icons/bs';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'

interface Props {
  collection: Collection
}

export default function NFTdropPage({ collection }: Props) {

  const [price, setPrice] = useState<string>()
  const [quantity, setQuantity] = useState<number>(1)
  const [claimed, setClaimed] = useState<number>(0)
  const [totalSupply, setTotalSupply] = useState<number>(0)
  const [nftImage, setImage] = useState<string>()
  const [nftName, setName] = useState<string>()
  const [nftDesc, setDescription] = useState<string>()
  const [minting, setMinting] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [changed, setSupplyChange] = useState<boolean>(false)

  const nftDrop = useNFTDrop(collection.address)
  const address = useAddress();
  const router = useRouter();

  const notification = () => {
  }

  const mintNFT = async (address: any) => {
    if (!nftDrop) return;
    const loadingMinting = toast.loading("Minting..!🧭")

    setMinting(true)
    await nftDrop?.claimTo(address, quantity)
      .then(async (tx) => {
        toast.dismiss(loadingMinting)
        toast.success("Boom!!!🔥🔥 You successfully minted", { duration: 4000 })
      })
      .catch(err => {
        toast.dismiss(loadingMinting)
        toast.error("💔Something went wrong!!", { duration: 4000 })
        setMinting(false);
        if (err.code === 4001) {
          setTimeout(() => {
            toast.error("You Rejected To Minting..😢!!", { duration: 4000 })
          }, 1000);
        }
      }
      )
      .finally(() => {
        setMinting(false);
        setQuantity(1);
        setSupplyChange(true);
        setSupplyChange(false);
      })
  }

  useEffect(() => {
    setLoading(true)
    const fetchPrice = async () => {
      const claimCondition = await nftDrop?.claimConditions.getAll();
      const NFTdata = await nftDrop?.getAllUnclaimed();
      console.log("nftdata", NFTdata?.[0]);
      if (NFTdata?.[0] !== undefined) {
        setImage(NFTdata?.[0].image);
        setName(NFTdata?.[0].name);
        setDescription(NFTdata?.[0].description)
      }
      setPrice(claimCondition?.[0].currencyMetadata.displayValue);
      setLoading(false)
    }
    fetchPrice();
  }, [nftDrop, totalSupply, changed])


  useEffect(() => {

    const fetchDataSupply = async () => {
      if (!nftDrop) return;
      try {
        setLoading(true)
        const claimed = await nftDrop.getAllClaimed();
        const total = await nftDrop.totalSupply();
        setLoading(false)
        setClaimed(claimed.length)
        setTotalSupply(parseInt(total._hex))

      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    }
    fetchDataSupply();
  }, [nftDrop])

  return (
    <>
      <div className='mainNFTDiv flex flex-col lg:flex-row lg:justify-between'>
        {/* Left Side  */}
        <div className='leftSide py-5 lg:w-4/12 bg-gradient-to-br from-cyan-500 to-rose-500 lg:min-h-screen flex items-center flex-col justify-center text-white'>
          {
            loading ?
              <svg role="status" className="w-8 h-8  text-gray-200 animate-spin dark:text-gray-600 fill-rose-500  m-auto" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
              :
              <>
                {
                  claimed === totalSupply ?
                    <div className='flex mt-5 bg-white text-black font-medium rounded-md px-4 py-2 select-none justify-center items-center text-2xl'>
                      SOLD OUT
                    </div>
                    :
                    <>
                      <>
                        <img
                          alt='nft 1  '
                          // src={urlFor(collection.previewImage).url()}
                          src={nftImage}
                          className=' object-cover w-44 lg:w-72 h-auto p-1 sm:p-2 bg-gradient-to-br from-yellow-500 to-purple-500 rounded-xl'
                        />
                        <div className='text-center py-5'>
                          {/* <h1 className='font-bold text-xl'>{collection.nftCollectionName}</h1>
            <h2 className=' text-xs'>{collection.description}</h2> */}
                          <h1 className='font-bold text-xl'>{nftName}</h1>
                          <h2 className=' text-xs'>{nftDesc}</h2>

                          <div className='flex mt-5 select-none justify-center items-center text-2xl'>
                            {
                              quantity > 1 ? (
                                <AiOutlineMinusCircle onClick={() => { setQuantity(quantity - 1) }} className=' cursor-pointer' />
                              ) :
                                <AiOutlineMinusCircle className=' cursor-pointer' />
                            }
                            <span className='mx-5'>{quantity}</span>
                            {
                              quantity < totalSupply - claimed ? (
                                <AiOutlinePlusCircle onClick={() => { setQuantity(quantity + 1) }} className=' cursor-pointer' />
                              )
                                :
                                <AiOutlinePlusCircle className=' cursor-pointer' />
                            }
                          </div>

                        </div>
                      </>
                    </>
                }
              </>
          }
        </div>
        {/* Right Side */}
        <div className='rightSide lg:w-8/12 pt-10 pb-5 px-5 lg:px-10 flex flex-col justify-between'>
          {/* above part  */}
          <Toaster position='top-left' />
          <div className='above'>
            <Navbar />
            <hr className='bar my-3 text-black border-t-2'></hr>
            <div className='wallet'>
              <h4 onClick={notification} className=' text-center text-xs text-rose-500'>{!address ? 'You are not connected' : `You're logged in with wallet ${address.substring(0, 5)}....${address.substring(address.length - 5)}`}</h4>
            </div>
          </div>
          {/* middle part  */}
          <div className='middle py-10'>
            <img src={urlFor(collection.mainImage).url()} className='m-auto w-44 lg:w-72' alt='bjr nft club' />
            <div className='textContent py-5'>
              <h1 className=' text-3xl font-extrabold text-center'>{collection.title}</h1>
              {
                loading ? <svg role="status" className="w-8 h-8 mt-2 text-gray-200 animate-spin dark:text-gray-600 fill-rose-500  m-auto" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                  :
                  <p className='text-center text-green-700'>
                    {claimed}/{totalSupply} NFT's claimed
                  </p>
              }

            </div>
          </div>
          {/* bottom part  */}
          <button onClick={() => { mintNFT(address) }} disabled={!nftDrop || !address || minting || (totalSupply === claimed)} className={`w-full ${loading || !address || minting || !nftDrop || (totalSupply === claimed) ? ("text-white  bg-gray-400") : ("bg-rose-600 hover:bg-rose-700 transition-all text-white")} rounded-3xl py-3 font-bold`}>{loading ? "Loading..." : claimed === totalSupply ? "SOLD OUT" : minting ? "MINTING..." : !address ? `Sign in to mint (${price} ETH)` : `💎MINT (${price} ETH)`}</button>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const query = `*[_type=="collection" && slug.current==$id][0]{
    _id,
    title,
    description,
    nftCollectionName,
    address,
    slug{
  current
  },
    mainImage{
    asset
  },  previewImage{
    asset
  },
  creator->{
    _id,
    name,
    address,
    image,
    bio,
    slug{
    current
  }
  }
  }`
  const collection = await sanityClient.fetch(query, {
    id: params?.id
  });
  if (!collection) {
    return { notFound: true }
  }

  return { props: { collection } }
}