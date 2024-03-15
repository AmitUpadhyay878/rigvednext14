/** @type {import('next').NextConfig} */
const nextConfig = {
        //  assetPrefix: 'https://d19cx7uv5wsln6.cloudfront.net',
        // output:"export",
    images:{
         unoptimized:true,
        // loader:"imgix",
        // loaderFile: './imgixLoader.js',

     remotePatterns: [
    //    {
    //        protocol: "https",
    //        hostname: "staging.multiqos.com",
    //      },
            // {
            //     protocol: 'https',
            //     hostname: 'staging.multiqos.com',
            //     // port: '',
            //     pathname: '/public/**/',
            // }
        ],
        
       // formats: ['image/avif', 'image/webp'],
    }
};

export default nextConfig;