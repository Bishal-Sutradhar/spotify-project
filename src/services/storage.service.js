const ImageKit = require('@imagekit/nodejs')

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})


const uploadFile = async (buffer) => {

  const result = await client.files.upload({
    file: buffer.toString('base64'),
    fileName: "music_" + Date.now(),
    folder: "spotify-project/music"
  })


  return(result)

}

module.exports = uploadFile
