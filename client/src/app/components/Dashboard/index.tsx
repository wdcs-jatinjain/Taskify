'use client'
import React from 'react'
import Link from 'next/link'
import MainLayout from '@/app/layouts/main'

const Dashoard: React.FC = () => {


    return <MainLayout>


        <div className="w-full max-w-xs mx-auto mt-8 h-36">
            <h1 className="text-center text-xl font-bold mb-4">Welcome to Taskify</h1>
            <div className='pl-28 pr-20 '>

                <Link href={"/register"}>
                    <button className="text-gray-700 body-font inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Register!
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    </MainLayout>


}

export default Dashoard