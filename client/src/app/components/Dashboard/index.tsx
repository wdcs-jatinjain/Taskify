'use client'
import React from 'react'
import Navbar from '../Navbar'
import Link from 'next/link'

const Dashoard: React.FC = () => {


    return <div>
        <Navbar />

        <div className="w-full max-w-xs mx-auto mt-8 h-36">
            <h1 className="text-center text-xl font-bold mb-4">Welcome to Taskify</h1>
            <Link href={"/register"}>
                <button className="bg-blue-200 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 md:mt-0">Register
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </Link>
        </div>
    </div>


}

export default Dashoard