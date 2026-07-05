const ImageKit = require('@imagekit/nodejs')

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
})


const uploadFile = async (buffer, originalname) => {

  const result = await client.files.upload({
    file: buffer.toString('base64'),
    fileName: "music_" + Date.now(),
    folder: "spotify-project/music"
  })


  return(result)

}

module.exports = uploadFile