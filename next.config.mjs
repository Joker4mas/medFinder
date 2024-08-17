

/** @type {import('next').NextConfig} */
const nextConfig = {
reactStrictMode:true,
images:{
    remotePatterns:[
    {      
        protocol:'https',
        port: '',
        hostname: 'res.cloudinary.com',
        pathname: '/images/upload***',
    }        
    ]
    
}

};

export default nextConfig;
