/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['daostudio-images.s3.us-west-2.amazonaws.com'],
  },
}

module.exports =  { 
  nextConfig,
  resolve: {
    fallback: {
      "encoding": require.resolve("encoding")
    }
  }  

}