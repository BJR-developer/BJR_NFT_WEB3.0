interface Image {
    asset: {
        url: string
    }
}
export interface Creator {
    _id: string,
    name: string,
    address: string,
    facebook: string,
    instagram: string,
    opensea: string,
    slug: {
        current: string
    }
    image: Image,
    bio: string
}
export interface Collection {
    _id,
    title,
    description,
    nftCollectionName,
    address: string
    slug: {
        current: string
    },
    mainImage: Image,
    previewImage: Image,
    creator: Creator
}