import { configDotenv } from "dotenv";
configDotenv()
export const API_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL

   /** @type {import('next').NextConfig} */
   const nextConfig = {
    reactStrictMode: false,
}

export default nextConfig