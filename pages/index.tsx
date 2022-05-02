import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { HomePage } from '../components/HomePage';
import { sanityClient, urlFor } from '../sanity'
import { Collection, Creator } from '../typing';

export interface Props {
  collection: Collection[],
  teamData: Creator[]
}

const Home = ({ collection, teamData }: Props) => {

  return (
    <>
      <Head>
        <title>BJR - First NFT</title>
      </Head>
      <HomePage collection={collection} teamData={teamData} />
    </>
  )
}

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const query = `*[_type=="collection"]{
    _id,
    title,
    description,
    nftCollectionName,
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
    facebook,
    instagram,
    opensea,
    slug{
    current
  }
  }
  }`

  const team = `*[_type=="creator"]{
    _id,
    name,
    address,
    image,
    bio,
    facebook,
    instagram,
    opensea,
    slug{
    current
  }
  }`

  const teams = await sanityClient.fetch(team);
  const collection = await sanityClient.fetch(query);

  return {
    props: {
      collection,
      teamData: teams
    }
  }
}